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
            <span className="text-warning mt-0.5 shrink-0">⚠</span>
            <div>
              <p className="font-medium text-warning">住宿機構補助每月 18,000 元卡關中</p>
              <p>此補助案目前仍在立法院審議，尚未三讀通過。約 10 萬名長者受影響，通過時間未定。現行補助依長照等級最高每月 36,000 元（居家/社區）或住宿機構每月最高 22,000 元（中低收入戶）。</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-warning mt-0.5 shrink-0">⚠</span>
            <div>
              <p className="font-medium text-warning">三班護病比入法影響（2027 年實施）</p>
              <p>衛福部推動「三班護病比」法制化，強制規定早/晚/大夜班護理人力配置。部分小型機構可能因人力成本上升而縮減床位或歇業，預計影響全台約 15% 住宿型機構。建議優先選擇已有充足護理人力配置的機構。</p>
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
