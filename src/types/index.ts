// ============================================================
// 台灣長照機構資料模型
// ============================================================

/** 機構類型 */
export type FacilityType =
  | '護理之家'
  | '長照中心'
  | '養護中心'
  | '安養中心'
  | '日照中心'
  | '居家服務'
  | '失智專區'
  | '安寧病房';

/** 縣市 */
export type City =
  | '臺北市' | '新北市' | '桃園市' | '臺中市' | '臺南市'
  | '高雄市' | '基隆市' | '新竹市' | '新竹縣' | '苗栗縣'
  | '彰化縣' | '南投縣' | '雲林縣' | '嘉義市' | '嘉義縣'
  | '屏東縣' | '宜蘭縣' | '花蓮縣' | '臺東縣' | '澎湖縣'
  | '金門縣' | '連江縣';

/** 評鑑等級 */
export type Rating = '優等' | '甲等' | '乙等' | '丙等' | '丁等' | '未評鑑';

/** 收費項目 */
export interface FeeItem {
  label: string;    // e.g., "一般房型（4-6人房）"
  monthly: number;  // 月費
  deposit: number;  // 保證金
}

/** 床位資訊 */
export interface BedInfo {
  total: number;          // 核定床位
  available: number;      // 目前空床
  occupied: number;       // 佔床數
  maleAvailable: number;  // 男空床
  femaleAvailable: number;// 女空床
  lastUpdated: string;    // 更新時間 ISO
}

/** 長照 3.0 服務標籤 */
export type LTC3Feature =
  | '外籍看護家庭社區服務'    // 外籍看護家庭可申請社區式服務
  | '出院準備銜接長照'        // 住院→長照無縫銜接
  | '社區整合型服務'          // A 單位 / 個案管理
  | '居家喘息服務'            // 家庭照顧者喘息
  | '交通接送服務'            // 長照專車接送
  | '輔具及無障礙環境改善';   // 居家無障礙補助

/** 長照機構 */
export interface Facility {
  id: string;
  name: string;
  type: FacilityType;
  city: City;
  district: string;
  address: string;
  phone: string;
  website: string | null;
  beds: BedInfo;
  fees: FeeItem[];
  rating: Rating;
  ratingYear: number;
  services: string[];       // e.g., ['復健', '洗腎', '管路照護']
  acceptsGovernmentSubsidy: boolean;
  ltc3Features: LTC3Feature[];  // 長照 3.0 特色服務
  latitude: number;
  longitude: number;
  establishedYear: number;
  operatorType: '公立' | '私立' | '財團法人' | '社團法人';
}

/** 搜尋條件 */
export interface SearchFilters {
  city?: City;
  type?: FacilityType;
  minBeds?: number;
  maxFee?: number;
  rating?: Rating;
  services?: string[];
  ltc3Features?: LTC3Feature[];
  subsidy?: boolean;
}

/** 排序方式 */
export type SortBy = 'availability' | 'fee_asc' | 'fee_desc' | 'rating' | 'name';
