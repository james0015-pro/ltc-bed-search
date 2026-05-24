import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, MapPin, Phone, Globe, Bed, Shield, Award, Banknote, Clock, Users } from 'lucide-react';
import { fetchFacilityById } from '@/lib/api';
import { cn, formatCurrency } from '@/lib/utils';
import type { Facility } from '@/types';

export function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: facility, isLoading } = useQuery({
    queryKey: ['facility', id],
    queryFn: () => fetchFacilityById(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="skeleton h-6 w-32" />
        <div className="skeleton h-10 w-64" />
        <div className="skeleton h-4 w-48" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {[1,2,3,4].map(i => <div key={i} className="skeleton h-24 rounded-lg" />)}
        </div>
      </div>
    );
  }

  if (!facility) {
    return (
      <div className="text-center py-16 text-text-muted">
        <p className="text-lg">找不到此機構</p>
        <Link to="/" className="text-primary hover:underline mt-2 inline-block">返回搜尋</Link>
      </div>
    );
  }

  return <FacilityDetail facility={facility} />;
}

function FacilityDetail({ facility: f }: { facility: Facility }) {
  const minFee = Math.min(...f.fees.map(x => x.monthly));
  const maxFee = Math.max(...f.fees.map(x => x.monthly));
  const occupancyRate = f.beds.total > 0 ? Math.round((f.beds.occupied / f.beds.total) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back */}
      <Link to="/" className="inline-flex items-center gap-1.5 text-text-muted hover:text-text-primary transition-colors mb-4 text-sm">
        <ArrowLeft size={16} /> 返回搜尋
      </Link>

      {/* Header */}
      <div className="bg-surface border border-border rounded-xl p-6 mb-6">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-xl sm:text-2xl font-bold text-text-primary">{f.name}</h1>
              <span className={cn(
                'px-2 py-0.5 rounded text-xs font-medium',
                f.rating === '優等' ? 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30' :
                f.rating === '甲等' ? 'bg-green-500/15 text-green-400 border border-green-500/30' :
                'bg-text-muted/15 text-text-muted border border-text-muted/20'
              )}>
                {f.rating}（{f.ratingYear}年評鑑）
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-muted">
              <span className="flex items-center gap-1"><MapPin size={14} />{f.address}</span>
              <span className="flex items-center gap-1"><Phone size={14} />{f.phone}</span>
              {f.website && <span className="flex items-center gap-1"><Globe size={14} />{f.website}</span>}
            </div>
          </div>
          <span className={cn(
            'px-2.5 py-1 rounded text-xs font-medium',
            f.operatorType === '公立' ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30' :
            f.operatorType === '財團法人' ? 'bg-purple-500/15 text-purple-400 border border-purple-500/30' :
            'bg-text-muted/15 text-text-muted border border-text-muted/20'
          )}>
            {f.operatorType}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 rounded bg-canvas border border-border text-xs text-text-secondary">{f.type}</span>
          {f.acceptsGovernmentSubsidy && (
            <span className="px-2 py-1 rounded bg-primary-subtle border border-primary/30 text-xs text-primary">✅ 接受政府補助</span>
          )}
          <span className="px-2 py-1 rounded bg-canvas border border-border text-xs text-text-muted">成立於 {f.establishedYear} 年</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <StatCard
          icon={<Bed size={20} className={f.beds.available > 0 ? 'text-primary' : 'text-danger'} />}
          label="目前空床"
          value={String(f.beds.available)}
          sub={`/ ${f.beds.total} 總床數`}
          highlight={f.beds.available > 0}
        />
        <StatCard
          icon={<Users size={20} className="text-info" />}
          label="男 / 女空床"
          value={`${f.beds.maleAvailable} / ${f.beds.femaleAvailable}`}
          sub=""
        />
        <StatCard
          icon={<Banknote size={20} className="text-warning" />}
          label="月費範圍"
          value={minFee === maxFee ? formatCurrency(minFee) : `${formatCurrency(minFee)} ~ ${formatCurrency(maxFee)}`}
          sub="每月"
        />
        <StatCard
          icon={<Award size={20} className="text-text-muted" />}
          label="佔床率"
          value={`${occupancyRate}%`}
          sub={`${f.beds.occupied} 人入住中`}
        />
      </div>

      {/* Bed Occupancy Bar */}
      <div className="bg-surface border border-border rounded-xl p-5 mb-6">
        <h2 className="text-sm font-medium text-text-primary mb-3 flex items-center gap-2">
          <Bed size={16} /> 床位使用狀況
        </h2>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs text-text-muted mb-1">
              <span>空床 {f.beds.available} 床</span>
              <span>佔床 {f.beds.occupied} 床</span>
            </div>
            <div className="h-4 bg-canvas rounded-full overflow-hidden flex">
              <div
                className="h-full bg-primary/30 rounded-l-full transition-all flex items-center justify-center text-[10px] text-primary font-medium"
                style={{ width: `${f.beds.total > 0 ? (f.beds.available / f.beds.total) * 100 : 0}%` }}
              >
                {f.beds.available > 0 ? f.beds.available : ''}
              </div>
              <div
                className="h-full bg-text-muted/20 transition-all"
                style={{ width: `${f.beds.total > 0 ? (f.beds.occupied / f.beds.total) * 100 : 0}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-text-muted">
            <Clock size={12} />
            最後更新：{new Date(f.beds.lastUpdated).toLocaleString('zh-TW')}
          </div>
        </div>
      </div>

      {/* Fees */}
      <div className="bg-surface border border-border rounded-xl p-5 mb-6">
        <h2 className="text-sm font-medium text-text-primary mb-3 flex items-center gap-2">
          <Banknote size={16} /> 收費標準
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 text-text-muted font-medium">房型</th>
                <th className="text-right py-2 text-text-muted font-medium">月費</th>
                <th className="text-right py-2 text-text-muted font-medium">保證金</th>
              </tr>
            </thead>
            <tbody>
              {f.fees.map((fee, i) => (
                <tr key={i} className="border-b border-border-subtle">
                  <td className="py-2.5 text-text-primary">{fee.label}</td>
                  <td className="py-2.5 text-right font-mono text-text-primary">{formatCurrency(fee.monthly)}</td>
                  <td className="py-2.5 text-right font-mono text-text-secondary">{formatCurrency(fee.deposit)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Services */}
      <div className="bg-surface border border-border rounded-xl p-5 mb-6">
        <h2 className="text-sm font-medium text-text-primary mb-3 flex items-center gap-2">
          <Shield size={16} /> 服務項目
        </h2>
        <div className="flex flex-wrap gap-2">
          {f.services.map(s => (
            <span key={s} className="px-3 py-1.5 rounded-lg bg-primary-subtle border border-primary/20 text-xs text-primary font-medium">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* LTC 3.0 Eligibility */}
      {f.ltc3Features.length > 0 && (
        <div className="bg-surface border border-border rounded-xl p-5 mb-6">
          <h2 className="text-sm font-medium text-text-primary mb-3 flex items-center gap-2">
            🏥 長照 3.0 服務
          </h2>
          <div className="text-xs text-text-muted mb-3">
            此機構提供以下長照 3.0 特色服務，符合資格的民眾可申請政府補助或補貼。
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {f.ltc3Features.map(feat => (
              <div key={feat} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/5 border border-blue-500/15">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span className="text-sm text-blue-300 font-medium">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Policy Alerts */}
      <div className="bg-warning/5 border border-warning/20 rounded-xl p-5 mb-6">
        <h2 className="text-sm font-medium text-text-primary mb-3 flex items-center gap-2">
          ⚠️ 政策動態提醒
        </h2>
        <div className="space-y-3 text-xs text-text-muted leading-relaxed">
          <div className="flex items-start gap-2">
            <span className="text-danger mt-0.5 shrink-0">🔴</span>
            <div>
              <p className="font-medium text-danger">全台長照床位缺口約 1.3 萬床</p>
              <p>根據 CTWANT 2026/5/12 報導，台灣住宿式長照機構總床位供不應求，全國缺口約 1.3 萬床，六都尤為嚴重。建議家屬提前規劃，並同時排隊多間機構以增加入住機會。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-info mt-0.5 shrink-0">ℹ</span>
            <div>
              <p className="font-medium text-info">55 歲以上 6 萬元照護津貼放寬</p>
              <p>衛福部放寬 55 歲以上民眾申請長期照護津貼資格，新增失能評估彈性標準，符合條件者每月最高可獲 6 萬元補助（依長照等級而定）。詳細資格請洽各縣市長照管理中心或撥打 1966 長照專線。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-info mt-0.5 shrink-0">ℹ</span>
            <div>
              <p className="font-medium text-info">照護自由選擇權 — 長照協會建言獲正面回應</p>
              <p>台灣長照協會 2026/5/18 向陳時中政務委員建言，爭取重度失能者得自由選擇「居家照護」或「住宿機構」並獲政府平等補助，獲正面回應。此政策若通過，住宿式補助可能顯著提高，建議持續關注後續修法進度。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-info mt-0.5 shrink-0">ℹ</span>
            <div>
              <p className="font-medium text-info">衛福部澄清：55+ 成長津貼不排擠長照 3.0</p>
              <p>衛福部 2026/5/15-21 多次澄清（自由時報、聯合報）：55 歲以上 6 萬元照護津貼與長照 3.0 為獨立預算，津貼來自社福基金（就業安定與社會救助），長照 3.0 由長照基金支應，互不排擠。另長照基金維持現行稅收撥補制，不會開辦長照保險（健保附加費方案已確定不予推動）。民眾可同時申請津貼與長照服務，無須擔心選 A 失 B。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-warning mt-0.5 shrink-0">⚠</span>
            <div>
              <p className="font-medium text-warning">住宿機構補助每月 18,000 元卡關中</p>
              <p>此補助案目前仍在立法院審議，尚未三讀通過。約 10 萬名長者受影響，通過時間未定。現行補助依長照等級最高每月 36,000 元（居家/社區）或住宿機構每月最高 22,000 元（中低收入戶）。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-warning mt-0.5 shrink-0">⚠</span>
            <div>
              <p className="font-medium text-warning">三班護病比入法實施時間線（2027 年分段上路）</p>
              <p>衛福部公布三班護病比法制化實施時程：2027 年 5 月起分段實施（醫學中心先行，隔年擴及區域/地區醫院，住宿式長照機構於 2029 年前適用）。違規罰鍰最高 200 萬元，護理人力缺口估約 5,000 人（全台），提供緩衝期 2 年供機構增補人力。部分小型住宿機構（全台約 15%）可能因人力成本上升而縮床或歇業。勞動部同步推出高齡就業補助方案：55 歲以上轉職長照照護員可請領最高 12 萬元訓練津貼與就業獎勵金。建議家屬優先選擇已有充足護理人力配置且公開護病比數據的機構。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-info mt-0.5 shrink-0">ℹ</span>
            <div>
              <p className="font-medium text-info">智慧科技輔具補助（2026 年 7 月上路）</p>
              <p>衛福部新增智慧輔具補助項目：AI 照護監測系統、遠距健康管理、智慧輔具租賃，每案最高補助 5 萬元。詳情請洽各縣市長照管理中心。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-info mt-0.5 shrink-0">ℹ</span>
            <div>
              <p className="font-medium text-info">ATLife 2026 輔具暨長照展 — 13 萬人次創紀錄</p>
              <p>2026 年 ATLife 台灣輔具暨長期照護大展吸引超過 13 萬人次參觀，創歷屆新高。展會重點：AI 照護機器人、遠距復健系統、智慧床墊監測，顯示高齡科技需求快速成長。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-info mt-0.5 shrink-0">ℹ</span>
            <div>
              <p className="font-medium text-info">國家級高齡研究中心雲林啟用（22.6 億）</p>
              <p>斥資 22.6 億元打造的國家級高齡醫學研究中心 2026 年正式於雲林縣啟用，定位為亞太高齡照護研發樞紐。雲林近年成為長照政策核心實驗場域，在地機構可利用研究資源提升照護品質。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-info mt-0.5 shrink-0">ℹ</span>
            <div>
              <p className="font-medium text-info">高雄長照局倡議 — 全台首例潛力</p>
              <p>高雄市議員跨黨派連署呼籲設立全台第一個地方政府直屬「長照局」，統籌照護資源分配與機構管理。陳其邁市長已正面回應允諾研議，若成局將為全台首例地方政府專責長照一級機關，可望打破目前長照資源多頭馬車的困境。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-info mt-0.5 shrink-0">ℹ</span>
            <div>
              <p className="font-medium text-info">失智病主法與預立醫囑新觀念</p>
              <p>衛福部推動「失智病主法」草案（2026/5/22 公聽會），賦予失智症患者於輕度時期即預立醫療決定（Advance Care Planning）的法律權利，確保未來照護依其意願執行。另推廣「預立醫囑」觀念，讓民眾在健康時就能預先規劃未來醫療與照護方式。此將影響長照機構的服務契約設計與照護計畫擬定。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-success mt-0.5 shrink-0">✨</span>
            <div>
              <p className="font-medium text-success">失智防治公眾資源 — 30 萬失智人口全台資源總整理</p>
              <p>台灣失智症人口已突破 30 萬人（2026 年衛福部統計），為長照體系最大單一疾病負擔。全台現有 136 處失智友善社區、42 家失智共同照護中心，提供早期篩檢、認知訓練、家屬支持團體等服務。失智四大誘發疾病：高血壓、糖尿病、憂鬱症、聽力受損 — 控制這些慢性病可降低 40% 失智風險（WHO 2024 指引）。麻豆新樓醫院 2026/5/23 舉辦失智友善社區交流座談會，推動社區早期發現與轉介機制。衛福部 1966 長照專線可轉接失智照護諮詢，各縣市衛生局皆有失智症個管師提供一站式服務。2026 年新增「年輕型失智」（65 歲以下）專案補助，每月最高 15,000 元日照費用。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-success mt-0.5 shrink-0">🔴</span>
            <div>
              <p className="font-medium text-danger">失智症基本法立法進度 — 跨黨派共識下週排審（里程碑級立法）</p>
              <p>ETtoday 2026/5/24 報導：台灣失智症基本法草案取得跨黨派重大突破，朝野三黨（民進黨、國民黨、民眾黨）各提版本，已於 5/22 完成黨團協商拜會，預計下週進入立法院衛環委員會排審，6 月可望完成委員會審查。各黨版本重點：①民進黨版 — 建立失智症患者本人醫療自主決定權、預立醫囑制度入法、設立國家級失智症研究中心；②國民黨版 — 參照日本「失智症基本法」（2024 年施行），強制各縣市設立失智症地區支援中心、推動失智友善社會認證；③民眾黨版 — 設立百億失智照護基金（財源來自長照基金外加撥 20% 預算 + 公益彩券盈餘 10%）、失智家庭照顧者每月 $5,000 津貼、65 歲以上全民免費失智篩檢。跨黨派共識高度集中在三大核心：①失智症患者法律權利保障（醫療自主 + 財產信託 + 監護宣告簡化）②照護體系制度化（從志願性服務轉為法定義務）③財源穩定入法（避免長照基金年度預算波動影響失智專項支出）。此為台灣高齡社會里程碑級立法，一旦通過將徹底改變長照機構的服務模式與法律責任框架。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-info mt-0.5 shrink-0">ℹ</span>
            <div>
              <p className="font-medium text-info">長照 3.0 功能恢復模式 — 從「照顧管理」到「功能恢復」的典範轉移</p>
              <p>TVBS 2026/5/21 專題報導 + PTS 公視 2026/2/13 深度追蹤：台大醫院北護分院教授提出長照 3.0 核心新思維 — 「功能恢復模式」（Functional Recovery Model），主張長照不應只是「幫失能者洗澡、餵飯」，而應以恢復自立生活能力為目標。🔴 關鍵數據：台灣現行長照體系下，復能服務時數僅佔總服務時數 3% — 表示 97% 的照護資源用於維持現狀而非促進恢復，嚴重失衡。四大核心觀點：①長照 3.0 應建立「功能恢復評估指標」，取代現行僅看失能等級的補助計算方式 ②國際趨勢（日本介護預防、北歐復能照護）皆顯示投入 $1 在功能恢復可節省 $3 後續照護成本 ③僅 12% 的居家服務個案接受復能訓練 — PTS 公視 2/13 實地走訪發現多數機構未配置復能專業人力 ④建議住宿式機構納入「復能型長照床」，讓機構不只是「等時間的地方」而是功能恢復的基地。此模式若獲政策採納，將顛覆傳統長照機構的營運邏輯：從「收容愈久、收費愈多」轉向「恢復愈快、週轉愈高」的價值導向模式</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-info mt-0.5 shrink-0">ℹ</span>
            <div>
              <p className="font-medium text-info">崇仁醫專長照科 87% 媒合率創紀錄</p>
              <p>嘉義崇仁醫護管理專科學校長照科 2026 年畢業生創下 87% 就業媒合率（較全台長照相關科系平均 62% 高出 25%），顯示專業訓練的長照人力極度搶手。此趨勢將加速住宿機構提高薪資待遇以留才，但同時可能推升機構收費。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-warning mt-0.5 shrink-0">⚠</span>
            <div>
              <p className="font-medium text-warning">長照 3.0 不推保險制 — 民團籲財源入法固定預算</p>
              <p>衛福部定調長照 3.0 維持現行稅收撥補制（2026/5/18），不開辦長照保險（健保附加費方案已確定不予推動）。然而民間長照團體擔憂：無固定財源入法，長照基金易受年度預算波動影響，每當經濟不景氣或政黨輪替即可能遭刪減。民團呼籲參照日本「介護保險法」模式，將長照財源比（政府/僱主/個人）明確入法，確保每年編列達 GDP 一定比例。此爭議將持續影響長照服務品質與機構經營穩定性。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-success mt-0.5 shrink-0">✨</span>
            <div>
              <p className="font-medium text-success">長照 3.0 擴大補助 — 外籍看護家庭可申請社區服務</p>
              <p>衛福部長照 3.0 重大突破：打破過去「聘僱外籍看護即失去長照資格」的二元對立，外籍看護家庭現可同時申請社區式照顧服務（含居家服務、日間照顧、喘息服務），每案每月最高補助上看萬元。高雄市率先受益，約 1.9 萬戶外籍看護家庭即日起可至各區長照中心申請。全國政策預計 2026 下半年全面實施，為長照政策歷史性轉折。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-warning mt-0.5 shrink-0">⚠</span>
            <div>
              <p className="font-medium text-warning">千億長照 3.0 接不住暗夜哭泣照顧者（UDN 民意論壇 5/23）</p>
              <p>UDN 聯合報 2026/5/23 民意論壇深度批判：長照 3.0 預算突破千億元，但預算成長不等於服務品質提升。照顧者面臨四大困境：①居家服務時數不足（平均每天僅 2 小時，重度失能者需 8-12 小時）②偏鄉長照資源稀缺（全台 368 鄉鎮中有 47 鄉鎮無住宿式機構）③外籍看護與機構照護的品質斷層（外看缺乏專業訓練，機構人力比不足）④照顧者經濟與心理雙重崩潰（家庭照顧者自殺率為一般人口 3 倍）。文章呼籲長照 3.0 應從「供給端思維」轉向「需求端思維」，建立照顧者支持體系而非僅擴充服務項目。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-info mt-0.5 shrink-0">ℹ</span>
            <div>
              <p className="font-medium text-info">基隆市立醫院長照工程開工 — 醫養合一新模式</p>
              <p>基隆市立醫院長照園區新建工程 2026/5 正式動工，打造全台首座「醫動養」（醫療+運動+長照）三合一示範園區。涵蓋 200 床住宿式長照、日間照顧中心、復健醫療大樓，總經費 12.6 億元。最大特色為「垂直整合」：急性醫療→亞急性復健→長照安養在同一園區內無縫銜接，解決傳統長照機構與醫院分離導致的轉院折騰問題。預計 2028 年完工啟用。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-info mt-0.5 shrink-0">ℹ</span>
            <div>
              <p className="font-medium text-info">Medical Taiwan 2026 — AI 醫療 + 長照科技展（5/23 開放登記）</p>
              <p>Medical Taiwan 2026 台灣國際醫療暨健康照護展即日起（5/23）開放參觀登記，6 月於台北南港展覽館舉辦。展會重點：AI 醫療診斷、長照科技應用（智慧床墊/遠距復健/AI 照護機器人）、智慧輔具最新產品。此展為智慧輔具補助 7 月上線前的最後一場大型專業展，家屬可提前了解即將納入補助的輔具品項與技術趨勢。線上登記免費，詳見 Medical Taiwan 官網。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-info mt-0.5 shrink-0">ℹ</span>
            <div>
              <p className="font-medium text-info">地方長照政策動態 — 花蓮社福預算、彰化長照三箭、侯友宜高齡整合</p>
              <p>各縣市長照政策選舉化升溫：①花蓮縣長照社福預算擴大（更生新聞5/21），結合原住民部落文化健康站推動「在地老化」，花蓮失能老人涵蓋率達 78%（全台最高）；②彰化縣推出長照三箭（PChome 5/19）：a. 65 歲以上免費接種帶狀皰疹疫苗 b. 住宿機構住民每月加碼補助 3,000 元（地方預算）c. 偏鄉日照巡迴車每日定點接送（解決 30 分鐘以上偏鄉交通困境）；③新北市侯友宜推動高齡整合照護（風傳媒 5/20）：結合衛生所/醫療院所/長照機構三層網絡，首創「里長照護通報系統」，里長可一鍵通報獨居長者異常，社福人員 30 分鐘內到場評估。此模式若成功，2027 年擴及全台，影響住宿機構與居家服務的資源分配</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-warning mt-0.5 shrink-0">⚠</span>
            <div>
              <p className="font-medium text-warning">桃園長照床位缺口 2,700 床 — 衛福部 12 億住宿+長照社宅試點</p>
              <p>桃園市長照住宿床位嚴重不足：自由健康網報導，桃園市現有住宿式長照床位約 3,500 床，但等待入住人數超過 6,200 人，缺口約 2,700 床（供需比僅 56%），居六都之冠。主因桃園為年輕移民城市，近年高齡人口快速增長（65 歲以上占比從 10% 升至 14.5%），但長照機構擴建速度遠落後需求。衛福部已核定「桃園住宿式長照試辦計畫」12 億元預算（鉅亨網 4/28），內容包括：①桃園區新建 200 床住宿式長照社宅大樓（全國首例結合社宅與長照的複合式建築，低樓層為日照中心+復健診所，高樓層為長照住宿單元）②中壢區擴建現有機構增加 100 床 ③平鎮區設立失智專區 36 人照護單元。另桃園市府推動「高齡友善社區計畫」，目標 2028 年前新增 500 床住宿式長照資源。此為全台首例長照社宅試點，若成功將複製至台中、台南、高雄等長照床位高需求城市。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-warning/5 border border-warning/20 rounded-lg p-4 text-xs text-text-muted">
        <p className="font-medium text-warning mb-1">⚠️ 資料說明</p>
        <p>床位資訊為模擬資料，實際空床數請直接致電機構確認。收費標準僅供參考，依實際入住評估為準。本網站資料僅供參考，不具法律效力。</p>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, sub, highlight }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
}) {
  return (
    <div className={cn(
      'bg-surface border rounded-xl p-4',
      highlight ? 'border-primary/50' : 'border-border'
    )}>
      <div className="flex items-center gap-2 mb-2">{icon}<span className="text-xs text-text-muted">{label}</span></div>
      <div className="text-lg font-bold font-mono text-text-primary">{value}</div>
      {sub && <div className="text-xs text-text-muted mt-0.5">{sub}</div>}
    </div>
  );
}
