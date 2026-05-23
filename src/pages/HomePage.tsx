import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal, MapPin, Phone, Bed, X } from 'lucide-react';
import { fetchFacilities } from '@/lib/api';
import { cn, formatCurrency } from '@/lib/utils';
import type { City, FacilityType, Rating, SortBy, Facility, LTC3Feature } from '@/types';

const CITIES: City[] = ['臺北市','新北市','桃園市','臺中市','臺南市','高雄市','基隆市','新竹市','苗栗縣','彰化縣','南投縣','雲林縣','嘉義市','屏東縣','宜蘭縣','花蓮縣','臺東縣','澎湖縣','金門縣'];
const TYPES: FacilityType[] = ['護理之家','長照中心','養護中心','安養中心','日照中心','失智專區','安寧病房'];
const RATINGS: Rating[] = ['優等','甲等','乙等','丙等'];
const LTC3_FEATURES: { value: LTC3Feature; label: string; brief: string }[] = [
  { value: '外籍看護家庭社區服務', label: '外籍看護友善', brief: '外籍看護家庭可申請社區式服務' },
  { value: '出院準備銜接長照', label: '出院銜接', brief: '住院→長照無縫銜接' },
  { value: '社區整合型服務', label: '社區整合', brief: 'A 單位個案管理' },
  { value: '居家喘息服務', label: '居家喘息', brief: '家庭照顧者支持' },
  { value: '交通接送服務', label: '交通接送', brief: '長照專車接送' },
  { value: '輔具及無障礙環境改善', label: '輔具補助', brief: '居家無障礙改善' },
];
const SORT_OPTIONS: { value: SortBy; label: string }[] = [
  { value: 'availability', label: '空床最多' },
  { value: 'fee_asc', label: '費用最低' },
  { value: 'fee_desc', label: '費用最高' },
  { value: 'rating', label: '評鑑最優' },
  { value: 'name', label: '名稱排序' },
];

export function HomePage() {
  const [query, setQuery] = useState('');
  const [city, setCity] = useState<City | ''>('');
  const [type, setType] = useState<FacilityType | ''>('');
  const [minBeds, setMinBeds] = useState(0);
  const [maxFee, setMaxFee] = useState(0);
  const [rating, setRating] = useState<Rating | ''>('');
  const [sortBy, setSortBy] = useState<SortBy>('availability');
  const [showFilters, setShowFilters] = useState(false);
  const [ltc3Features, setLtc3Features] = useState<LTC3Feature[]>([]);

  const filters = useMemo(() => ({
    ...(city && { city: city as City }),
    ...(type && { type: type as FacilityType }),
    ...(minBeds > 0 && { minBeds }),
    ...(maxFee > 0 && { maxFee }),
    ...(rating && { rating: rating as Rating }),
    ...(ltc3Features.length > 0 && { ltc3Features }),
  }), [city, type, minBeds, maxFee, rating, ltc3Features]);

  const { data: facilities, isLoading } = useQuery({
    queryKey: ['facilities', filters, sortBy, query],
    queryFn: () => fetchFacilities(filters, sortBy, query),
  });

  const hasFilters = city || type || minBeds > 0 || maxFee > 0 || rating || ltc3Features.length > 0;

  return (
    <div>
      {/* Policy Alert Banner */}
      <div className="bg-warning/5 border border-warning/20 rounded-lg p-3 mb-4 text-xs text-text-muted leading-relaxed flex flex-wrap items-start gap-2">
        <span className="text-warning shrink-0 mt-0.5">⚠️</span>
        <span>
          <strong>全台長照床位缺口約 1.3 萬床</strong>（住宿式機構供不應求）｜
          <strong>住宿補助每月 18,000 元仍在立院卡關</strong>（影響 10 萬長者）｜
          <strong>三班護病比 2027 年入法</strong>（約 15% 住宿機構可能縮床或歇業）｜
          <strong>55 歲以上 6 萬元津貼放寬</strong>（新增失能評估彈性，衛福部澄清與長照 3.0 不排擠／長照保險不開辦）｜
          <strong>智慧輔具補助 2026/7 上路</strong>（AI 照護／遠距監測，每案最高 5 萬）｜
          <strong>ATLife 2026 創 13 萬人次</strong>（高齡科技需求快增）｜
          <strong>雲林高齡研究中心啟用</strong>（22.6 億亞太研發樞紐）｜
          <strong>高雄長照局倡議</strong>（全台首例地方政府專責長照機關）｜
          <strong>失智病主法公聽會</strong>（預立醫囑新觀念影響機構服務契約）｜
          <strong>長照 3.0 擴大補助</strong>（外籍看護家庭可申請社區服務，最高萬元/月）｜
          <strong>長照保險不開辦／民團籲財源入法</strong>（稅收制 vs 保險制爭議持續，財源穩定性成隱憂）｜
          <strong>崇仁醫專 87% 媒合率</strong>（長照人力極度搶手，可能推升機構收費）。
        </span>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="搜尋機構名稱、地區、服務項目..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full h-11 pl-10 pr-4 bg-surface border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={cn(
            'flex items-center gap-2 h-11 px-4 rounded-lg border transition-colors text-sm font-medium',
            showFilters || hasFilters
              ? 'bg-primary-subtle border-primary text-primary'
              : 'bg-surface border-border text-text-secondary hover:border-primary/50'
          )}
        >
          <SlidersHorizontal size={16} />
          篩選
          {hasFilters && <span className="w-2 h-2 rounded-full bg-primary" />}
        </button>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value as SortBy)}
          className="h-11 px-3 bg-surface border border-border rounded-lg text-text-secondary text-sm focus:outline-none focus:border-primary"
        >
          {SORT_OPTIONS.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-surface border border-border rounded-lg p-4 mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in">
          <div>
            <label className="block text-xs text-text-muted mb-1">縣市</label>
            <select value={city} onChange={e => setCity(e.target.value as City)} className="w-full h-9 px-2 bg-canvas border border-border rounded text-text-secondary text-sm">
              <option value="">全部縣市</option>
              {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs text-text-muted mb-1">機構類型</label>
            <select value={type} onChange={e => setType(e.target.value as FacilityType)} className="w-full h-9 px-2 bg-canvas border border-border rounded text-text-secondary text-sm">
              <option value="">全部類型</option>
              {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs text-text-muted mb-1">最低空床數</label>
            <select value={minBeds} onChange={e => setMinBeds(Number(e.target.value))} className="w-full h-9 px-2 bg-canvas border border-border rounded text-text-secondary text-sm">
              <option value="0">不限</option>
              {[5, 10, 20, 30, 50].map(n => <option key={n} value={n}>≥ {n} 床</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs text-text-muted mb-1">最高月費</label>
            <select value={maxFee} onChange={e => setMaxFee(Number(e.target.value))} className="w-full h-9 px-2 bg-canvas border border-border rounded text-text-secondary text-sm">
              <option value="0">不限</option>
              {[30000, 35000, 40000, 45000, 50000].map(n => <option key={n} value={n}>≤ {formatCurrency(n)}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2 lg:col-span-4">
            <label className="block text-xs text-text-muted mb-1">評鑑等級</label>
            <div className="flex flex-wrap gap-2">
              {RATINGS.map(r => (
                <button
                  key={r}
                  onClick={() => setRating(rating === r ? '' : r)}
                  className={cn(
                    'px-3 py-1 rounded text-xs font-medium border transition-colors',
                    rating === r
                      ? 'bg-primary-subtle border-primary text-primary'
                      : 'bg-canvas border-border text-text-muted hover:border-primary/50'
                  )}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-4">
            <label className="block text-xs text-text-muted mb-1">🏥 長照 3.0 服務（多選）</label>
            <div className="flex flex-wrap gap-2">
              {LTC3_FEATURES.map(f => {
                const selected = ltc3Features.includes(f.value);
                return (
                  <button
                    key={f.value}
                    onClick={() => {
                      setLtc3Features(prev =>
                        selected ? prev.filter(v => v !== f.value) : [...prev, f.value]
                      );
                    }}
                    title={f.brief}
                    className={cn(
                      'px-2.5 py-1 rounded text-xs font-medium border transition-colors',
                      selected
                        ? 'bg-primary-subtle border-primary text-primary'
                        : 'bg-canvas border-border text-text-muted hover:border-primary/50'
                    )}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm text-text-muted">
          <span>{isLoading ? '搜尋中...' : `共 ${facilities?.length || 0} 間機構`}</span>
          {hasFilters && (
            <button onClick={() => { setCity(''); setType(''); setMinBeds(0); setMaxFee(0); setRating(''); setLtc3Features([]); }} className="flex items-center gap-1 text-primary hover:underline">
              <X size={14} /> 清除篩選
            </button>
          )}
        </div>

        {isLoading ? (
          <div className="space-y-3">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="bg-surface border border-border rounded-lg p-4">
                <div className="skeleton h-5 w-48 mb-2" />
                <div className="skeleton h-4 w-32 mb-3" />
                <div className="flex gap-4">
                  <div className="skeleton h-4 w-20" />
                  <div className="skeleton h-4 w-20" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          facilities?.map(f => <FacilityCard key={f.id} facility={f} />)
        )}

        {facilities?.length === 0 && !isLoading && (
          <div className="text-center py-16 text-text-muted">
            <Search size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg">沒有符合條件的機構</p>
            <p className="text-sm mt-1">試試放寬篩選條件</p>
          </div>
        )}
      </div>
    </div>
  );
}

function FacilityCard({ facility: f }: { facility: Facility }) {
  const minFee = Math.min(...f.fees.map(x => x.monthly));
  const occupancyRate = f.beds.total > 0 ? Math.round((f.beds.occupied / f.beds.total) * 100) : 0;

  return (
    <Link
      to={`/facility/${f.id}`}
      className="block bg-surface border border-border rounded-lg p-4 hover:border-primary/50 transition-colors group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-text-primary font-medium truncate group-hover:text-primary transition-colors">{f.name}</h3>
            <span className={cn(
              'px-1.5 py-0.5 rounded text-[10px] font-medium shrink-0',
              f.rating === '優等' ? 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30' :
              f.rating === '甲等' ? 'bg-green-500/15 text-green-400 border border-green-500/30' :
              'bg-text-muted/15 text-text-muted border border-text-muted/20'
            )}>
              {f.rating}
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-text-muted mb-2">
            <span className="flex items-center gap-1"><MapPin size={12} />{f.city}{f.district}</span>
            <span className="flex items-center gap-1"><Phone size={12} />{f.phone}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {f.services.slice(0, 4).map(s => (
              <span key={s} className="px-1.5 py-0.5 rounded bg-canvas border border-border text-[10px] text-text-muted">{s}</span>
            ))}
            {f.services.length > 4 && (
              <span className="text-[10px] text-text-muted">+{f.services.length - 4}</span>
            )}
          </div>
          {f.ltc3Features.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1.5">
              {f.ltc3Features.map(feat => (
                <span key={feat} className="px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-[10px] text-blue-400">{feat}</span>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col items-end gap-2 shrink-0">
          <div className="flex items-center gap-1.5">
            <Bed size={16} className={f.beds.available > 0 ? 'text-primary' : 'text-danger'} />
            <span className={cn('text-lg font-bold font-mono', f.beds.available > 0 ? 'text-primary' : 'text-danger')}>
              {f.beds.available}
            </span>
            <span className="text-xs text-text-muted">空床</span>
          </div>
          <div className="text-right text-xs text-text-muted">
            <span>{formatCurrency(minFee)}/月</span>
          </div>
          <div className="w-24 h-1.5 bg-canvas rounded-full overflow-hidden">
            <div
              className={cn('h-full rounded-full transition-all', occupancyRate > 80 ? 'bg-danger' : occupancyRate > 60 ? 'bg-warning' : 'bg-primary')}
              style={{ width: `${occupancyRate}%` }}
            />
          </div>
          <span className="text-[10px] text-text-muted">佔床率 {occupancyRate}%</span>
        </div>
      </div>
    </Link>
  );
}
