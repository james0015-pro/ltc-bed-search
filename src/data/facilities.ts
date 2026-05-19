import type { Facility } from '@/types';

export const facilities: Facility[] = [
  {
    "id": "F0001",
    "name": "慈暉失智照顧專區",
    "type": "失智專區",
    "city": "臺中市",
    "district": "中區",
    "address": "臺中市中區和平路215號之1",
    "phone": "(04) 2178-7912",
    "website": null,
    "beds": {
      "total": 49,
      "available": 25,
      "occupied": 24,
      "maleAvailable": 23,
      "femaleAvailable": 2,
      "lastUpdated": "2026-05-14T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 28000,
        "deposit": 28000
      },
      {
        "label": "雙人房",
        "monthly": 36000,
        "deposit": 36000
      },
      {
        "label": "單人房",
        "monthly": 46000,
        "deposit": 46000
      }
    ],
    "rating": "優等",
    "ratingYear": 2024,
    "services": [
      "傷口照護",
      "心理諮商",
      "社工服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.164323,
    "longitude": 120.683799,
    "establishedYear": 2006,
    "operatorType": "私立"
  },
  {
    "id": "F0002",
    "name": "仁愛松柏護理之家",
    "type": "護理之家",
    "city": "基隆市",
    "district": "市區",
    "address": "基隆市市區中山路339號之1",
    "phone": "(02) 2940-9785",
    "website": "https://仁愛松柏護理之家.com.tw",
    "beds": {
      "total": 30,
      "available": 9,
      "occupied": 21,
      "maleAvailable": 5,
      "femaleAvailable": 4,
      "lastUpdated": "2026-05-11T11:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 44000,
        "deposit": 44000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "洗腎服務",
      "社工服務",
      "呼吸照護",
      "物理治療",
      "職能治療",
      "失智照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 25.140376,
    "longitude": 121.774731,
    "establishedYear": 2014,
    "operatorType": "財團法人"
  },
  {
    "id": "F0003",
    "name": "雲林老人養護中心",
    "type": "養護中心",
    "city": "雲林縣",
    "district": "市區",
    "address": "雲林縣市區民生路421號",
    "phone": "(05) 2501-3677",
    "website": "https://雲林老人養護中心.com.tw",
    "beds": {
      "total": 200,
      "available": 66,
      "occupied": 134,
      "maleAvailable": 9,
      "femaleAvailable": 57,
      "lastUpdated": "2026-05-16T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 44000,
        "deposit": 44000
      },
      {
        "label": "雙人房",
        "monthly": 52000,
        "deposit": 52000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "物理治療",
      "語言治療",
      "社工服務",
      "傷口照護",
      "失智照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.761856,
    "longitude": 120.58816,
    "establishedYear": 2021,
    "operatorType": "公立"
  },
  {
    "id": "F0004",
    "name": "耕莘憶家園失智專區",
    "type": "失智專區",
    "city": "南投縣",
    "district": "市區",
    "address": "南投縣市區中正路79號之1",
    "phone": "(049) 3103-5304",
    "website": "https://耕莘憶家園失智專區.com.tw",
    "beds": {
      "total": 200,
      "available": 17,
      "occupied": 183,
      "maleAvailable": 4,
      "femaleAvailable": 13,
      "lastUpdated": "2026-05-16T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 33000,
        "deposit": 33000
      },
      {
        "label": "單人房",
        "monthly": 51000,
        "deposit": 51000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "職能治療",
      "安寧療護",
      "失智照護",
      "傷口照護",
      "管路照護",
      "社工服務"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.909963,
    "longitude": 120.725925,
    "establishedYear": 2014,
    "operatorType": "財團法人"
  },
  {
    "id": "F0005",
    "name": "松柏忘憂園失智照護中心",
    "type": "失智專區",
    "city": "臺北市",
    "district": "南港區",
    "address": "臺北市南港區和平路471號",
    "phone": "(02) 2929-1053",
    "website": "https://松柏忘憂園失智照護中心.com.tw",
    "beds": {
      "total": 120,
      "available": 46,
      "occupied": 74,
      "maleAvailable": 41,
      "femaleAvailable": 5,
      "lastUpdated": "2026-05-17T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 36000,
        "deposit": 36000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2024,
    "services": [
      "呼吸照護",
      "社工服務",
      "管路照護",
      "藥事服務",
      "洗腎服務",
      "心理諮商",
      "傷口照護",
      "職能治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.012826,
    "longitude": 121.510848,
    "establishedYear": 2004,
    "operatorType": "私立"
  },
  {
    "id": "F0006",
    "name": "萬芳松柏護理之家",
    "type": "護理之家",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區中正路127號之1",
    "phone": "(03) 2338-5342",
    "website": null,
    "beds": {
      "total": 30,
      "available": 3,
      "occupied": 27,
      "maleAvailable": 1,
      "femaleAvailable": 2,
      "lastUpdated": "2026-05-10T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 29000,
        "deposit": 29000
      },
      {
        "label": "雙人房",
        "monthly": 37000,
        "deposit": 37000
      },
      {
        "label": "單人房",
        "monthly": 47000,
        "deposit": 47000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "安寧療護",
      "傷口照護",
      "社工服務",
      "藥事服務",
      "呼吸照護",
      "心理諮商",
      "失智照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.794096,
    "longitude": 120.973812,
    "establishedYear": 1985,
    "operatorType": "私立"
  },
  {
    "id": "F0007",
    "name": "中山護理之家",
    "type": "護理之家",
    "city": "新北市",
    "district": "蘆洲區",
    "address": "新北市蘆洲區大同路211號之3",
    "phone": "(02) 3104-3167",
    "website": "https://中山護理之家.com.tw",
    "beds": {
      "total": 60,
      "available": 36,
      "occupied": 24,
      "maleAvailable": 32,
      "femaleAvailable": 4,
      "lastUpdated": "2026-05-10T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 32000,
        "deposit": 32000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "職能治療",
      "營養諮詢",
      "傷口照護",
      "藥事服務",
      "安寧療護",
      "語言治療",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.952509,
    "longitude": 121.446968,
    "establishedYear": 2006,
    "operatorType": "公立"
  },
  {
    "id": "F0008",
    "name": "悠然綜合長照中心",
    "type": "長照中心",
    "city": "臺中市",
    "district": "南屯區",
    "address": "臺中市南屯區民生路443號之3",
    "phone": "(04) 2154-8260",
    "website": "https://悠然綜合長照中心.com.tw",
    "beds": {
      "total": 40,
      "available": 14,
      "occupied": 26,
      "maleAvailable": 2,
      "femaleAvailable": 12,
      "lastUpdated": "2026-05-12T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 34000,
        "deposit": 34000
      },
      {
        "label": "雙人房",
        "monthly": 42000,
        "deposit": 42000
      },
      {
        "label": "單人房",
        "monthly": 52000,
        "deposit": 52000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2024,
    "services": [
      "洗腎服務",
      "復健治療",
      "物理治療",
      "社工服務",
      "藥事服務",
      "心理諮商",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.09461,
    "longitude": 120.671703,
    "establishedYear": 2001,
    "operatorType": "社團法人"
  },
  {
    "id": "F0009",
    "name": "亞東長青安養中心",
    "type": "安養中心",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區中華路30號",
    "phone": "(03) 3110-1998",
    "website": "https://亞東長青安養中心.com.tw",
    "beds": {
      "total": 40,
      "available": 21,
      "occupied": 19,
      "maleAvailable": 9,
      "femaleAvailable": 12,
      "lastUpdated": "2026-05-11T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 32000,
        "deposit": 32000
      },
      {
        "label": "雙人房",
        "monthly": 40000,
        "deposit": 40000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "復健治療",
      "職能治療",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.756456,
    "longitude": 121.809435,
    "establishedYear": 2000,
    "operatorType": "財團法人"
  },
  {
    "id": "F0010",
    "name": "仁愛社區日照中心",
    "type": "日照中心",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區中正路276號之1",
    "phone": "(03) 2488-5351",
    "website": "https://仁愛社區日照中心.com.tw",
    "beds": {
      "total": 200,
      "available": 1,
      "occupied": 199,
      "maleAvailable": 1,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-12T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 33000,
        "deposit": 33000
      },
      {
        "label": "單人房",
        "monthly": 51000,
        "deposit": 51000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "物理治療",
      "呼吸照護",
      "營養諮詢",
      "失智照護",
      "洗腎服務",
      "復健治療",
      "語言治療",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.883753,
    "longitude": 121.050375,
    "establishedYear": 2008,
    "operatorType": "私立"
  },
  {
    "id": "F0011",
    "name": "恩主公銀髮日照中心",
    "type": "日照中心",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區復興路105號之2",
    "phone": "(03) 3798-3200",
    "website": "https://恩主公銀髮日照中心.com.tw",
    "beds": {
      "total": 120,
      "available": 79,
      "occupied": 41,
      "maleAvailable": 70,
      "femaleAvailable": 9,
      "lastUpdated": "2026-05-14T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 34000,
        "deposit": 34000
      },
      {
        "label": "雙人房",
        "monthly": 42000,
        "deposit": 42000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "語言治療",
      "社工服務",
      "管路照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.719576,
    "longitude": 121.769773,
    "establishedYear": 2002,
    "operatorType": "私立"
  },
  {
    "id": "F0012",
    "name": "慈暉失智照顧專區",
    "type": "失智專區",
    "city": "南投縣",
    "district": "市區",
    "address": "南投縣市區中山路461號之2",
    "phone": "(049) 3415-3442",
    "website": null,
    "beds": {
      "total": 100,
      "available": 13,
      "occupied": 87,
      "maleAvailable": 8,
      "femaleAvailable": 5,
      "lastUpdated": "2026-05-13T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 25000,
        "deposit": 25000
      },
      {
        "label": "單人房",
        "monthly": 43000,
        "deposit": 43000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "職能治療",
      "社工服務",
      "管路照護",
      "安寧療護",
      "語言治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.837693,
    "longitude": 120.663344,
    "establishedYear": 2011,
    "operatorType": "社團法人"
  },
  {
    "id": "F0013",
    "name": "康寧安寧照護中心",
    "type": "安寧病房",
    "city": "臺南市",
    "district": "歸仁區",
    "address": "臺南市歸仁區民生路115號",
    "phone": "(06) 2843-5065",
    "website": "https://康寧安寧照護中心.com.tw",
    "beds": {
      "total": 80,
      "available": 53,
      "occupied": 27,
      "maleAvailable": 11,
      "femaleAvailable": 42,
      "lastUpdated": "2026-05-16T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 49000,
        "deposit": 49000
      },
      {
        "label": "雙人房",
        "monthly": 57000,
        "deposit": 57000
      },
      {
        "label": "單人房",
        "monthly": 67000,
        "deposit": 67000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "洗腎服務",
      "安寧療護",
      "復健治療",
      "營養諮詢",
      "傷口照護",
      "職能治療",
      "物理治療",
      "管路照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.967831,
    "longitude": 120.274255,
    "establishedYear": 2002,
    "operatorType": "私立"
  },
  {
    "id": "F0014",
    "name": "輔大忘憂園失智照護中心",
    "type": "失智專區",
    "city": "臺東縣",
    "district": "市區",
    "address": "臺東縣市區建國路23號之3",
    "phone": "(089) 3971-5349",
    "website": null,
    "beds": {
      "total": 60,
      "available": 39,
      "occupied": 21,
      "maleAvailable": 7,
      "femaleAvailable": 32,
      "lastUpdated": "2026-05-18T11:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 53000,
        "deposit": 53000
      },
      {
        "label": "雙人房",
        "monthly": 61000,
        "deposit": 61000
      }
    ],
    "rating": "優等",
    "ratingYear": 2025,
    "services": [
      "安寧療護",
      "失智照護",
      "語言治療",
      "藥事服務",
      "心理諮商",
      "社工服務",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.736631,
    "longitude": 121.157254,
    "establishedYear": 2006,
    "operatorType": "財團法人"
  },
  {
    "id": "F0015",
    "name": "馬偕慈暉養護中心",
    "type": "養護中心",
    "city": "臺中市",
    "district": "外埔區",
    "address": "臺中市外埔區建國路147號之1",
    "phone": "(04) 2392-7888",
    "website": null,
    "beds": {
      "total": 200,
      "available": 30,
      "occupied": 170,
      "maleAvailable": 10,
      "femaleAvailable": 20,
      "lastUpdated": "2026-05-19T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 38000,
        "deposit": 38000
      },
      {
        "label": "雙人房",
        "monthly": 46000,
        "deposit": 46000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "物理治療",
      "語言治療",
      "管路照護",
      "職能治療",
      "心理諮商",
      "呼吸照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.132972,
    "longitude": 120.727396,
    "establishedYear": 2013,
    "operatorType": "財團法人"
  },
  {
    "id": "F0016",
    "name": "中山安寧照護中心",
    "type": "安寧病房",
    "city": "臺東縣",
    "district": "市區",
    "address": "臺東縣市區光復路436號",
    "phone": "(089) 2191-4848",
    "website": null,
    "beds": {
      "total": 200,
      "available": 113,
      "occupied": 87,
      "maleAvailable": 36,
      "femaleAvailable": 77,
      "lastUpdated": "2026-05-19T11:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 41000,
        "deposit": 41000
      },
      {
        "label": "雙人房",
        "monthly": 49000,
        "deposit": 49000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "藥事服務",
      "傷口照護",
      "管路照護",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.682394,
    "longitude": 121.22243,
    "establishedYear": 2000,
    "operatorType": "私立"
  },
  {
    "id": "F0017",
    "name": "主恩安寧照護中心",
    "type": "安寧病房",
    "city": "臺北市",
    "district": "大同區",
    "address": "臺北市大同區和平路219號之3",
    "phone": "(02) 3878-2988",
    "website": "https://主恩安寧照護中心.com.tw",
    "beds": {
      "total": 40,
      "available": 2,
      "occupied": 38,
      "maleAvailable": 2,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-17T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 41000,
        "deposit": 41000
      },
      {
        "label": "雙人房",
        "monthly": 49000,
        "deposit": 49000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "物理治療",
      "社工服務",
      "藥事服務",
      "職能治療",
      "失智照護",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.051024,
    "longitude": 121.600084,
    "establishedYear": 2002,
    "operatorType": "公立"
  },
  {
    "id": "F0018",
    "name": "福安憶家園失智專區",
    "type": "失智專區",
    "city": "臺東縣",
    "district": "市區",
    "address": "臺東縣市區大同路170號之3",
    "phone": "(089) 3828-9849",
    "website": null,
    "beds": {
      "total": 100,
      "available": 58,
      "occupied": 42,
      "maleAvailable": 45,
      "femaleAvailable": 13,
      "lastUpdated": "2026-05-13T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 34000,
        "deposit": 34000
      }
    ],
    "rating": "優等",
    "ratingYear": 2025,
    "services": [
      "傷口照護",
      "安寧療護",
      "語言治療",
      "管路照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.788027,
    "longitude": 121.075277,
    "establishedYear": 2022,
    "operatorType": "社團法人"
  },
  {
    "id": "F0019",
    "name": "耕莘安養中心",
    "type": "安養中心",
    "city": "臺北市",
    "district": "內湖區",
    "address": "臺北市內湖區大同路371號之1",
    "phone": "(02) 3102-9947",
    "website": "https://耕莘安養中心.com.tw",
    "beds": {
      "total": 60,
      "available": 21,
      "occupied": 39,
      "maleAvailable": 12,
      "femaleAvailable": 9,
      "lastUpdated": "2026-05-12T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 52000,
        "deposit": 52000
      },
      {
        "label": "雙人房",
        "monthly": 60000,
        "deposit": 60000
      },
      {
        "label": "單人房",
        "monthly": 70000,
        "deposit": 70000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "營養諮詢",
      "傷口照護",
      "呼吸照護",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.030703,
    "longitude": 121.547217,
    "establishedYear": 2022,
    "operatorType": "財團法人"
  },
  {
    "id": "F0020",
    "name": "主恩失智照顧專區",
    "type": "失智專區",
    "city": "臺北市",
    "district": "大同區",
    "address": "臺北市大同區復興路115號",
    "phone": "(02) 2669-6529",
    "website": "https://主恩失智照顧專區.com.tw",
    "beds": {
      "total": 100,
      "available": 44,
      "occupied": 56,
      "maleAvailable": 3,
      "femaleAvailable": 41,
      "lastUpdated": "2026-05-10T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 33000,
        "deposit": 33000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "呼吸照護",
      "藥事服務",
      "安寧療護",
      "心理諮商",
      "洗腎服務",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.956101,
    "longitude": 121.571307,
    "establishedYear": 1986,
    "operatorType": "財團法人"
  },
  {
    "id": "F0021",
    "name": "國泰安養中心",
    "type": "安養中心",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區大同路204號之1",
    "phone": "(03) 3240-2876",
    "website": null,
    "beds": {
      "total": 150,
      "available": 73,
      "occupied": 77,
      "maleAvailable": 59,
      "femaleAvailable": 14,
      "lastUpdated": "2026-05-13T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 47000,
        "deposit": 47000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "呼吸照護",
      "洗腎服務",
      "職能治療",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.872622,
    "longitude": 120.983127,
    "establishedYear": 1992,
    "operatorType": "公立"
  },
  {
    "id": "F0022",
    "name": "主恩銀髮日照中心",
    "type": "日照中心",
    "city": "新北市",
    "district": "三峽區",
    "address": "新北市三峽區建國路316號之3",
    "phone": "(02) 3684-9031",
    "website": null,
    "beds": {
      "total": 60,
      "available": 36,
      "occupied": 24,
      "maleAvailable": 32,
      "femaleAvailable": 4,
      "lastUpdated": "2026-05-19T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 46000,
        "deposit": 46000
      },
      {
        "label": "單人房",
        "monthly": 64000,
        "deposit": 64000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "物理治療",
      "營養諮詢",
      "語言治療",
      "管路照護",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.965182,
    "longitude": 121.461479,
    "establishedYear": 1990,
    "operatorType": "私立"
  },
  {
    "id": "F0023",
    "name": "聖母安寧緩和病房",
    "type": "安寧病房",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區和平路389號之1",
    "phone": "(03) 2726-5232",
    "website": "https://聖母安寧緩和病房.com.tw",
    "beds": {
      "total": 60,
      "available": 39,
      "occupied": 21,
      "maleAvailable": 31,
      "femaleAvailable": 8,
      "lastUpdated": "2026-05-17T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 52000,
        "deposit": 52000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "語言治療",
      "呼吸照護",
      "社工服務",
      "復健治療",
      "心理諮商",
      "傷口照護",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.714617,
    "longitude": 121.738028,
    "establishedYear": 1999,
    "operatorType": "財團法人"
  },
  {
    "id": "F0024",
    "name": "門諾憶家園失智專區",
    "type": "失智專區",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區中華路99號之1",
    "phone": "(03) 2720-8434",
    "website": "https://門諾憶家園失智專區.com.tw",
    "beds": {
      "total": 100,
      "available": 0,
      "occupied": 100,
      "maleAvailable": 0,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-14T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 38000,
        "deposit": 38000
      },
      {
        "label": "雙人房",
        "monthly": 46000,
        "deposit": 46000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "傷口照護",
      "洗腎服務",
      "語言治療",
      "心理諮商",
      "失智照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.743129,
    "longitude": 120.976738,
    "establishedYear": 1997,
    "operatorType": "私立"
  },
  {
    "id": "F0025",
    "name": "慈恩福安養護中心",
    "type": "養護中心",
    "city": "雲林縣",
    "district": "市區",
    "address": "雲林縣市區中山路130號之3",
    "phone": "(05) 2258-9042",
    "website": null,
    "beds": {
      "total": 40,
      "available": 19,
      "occupied": 21,
      "maleAvailable": 1,
      "femaleAvailable": 18,
      "lastUpdated": "2026-05-11T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 26000,
        "deposit": 26000
      },
      {
        "label": "雙人房",
        "monthly": 34000,
        "deposit": 34000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "職能治療",
      "呼吸照護",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.703594,
    "longitude": 120.518513,
    "establishedYear": 1988,
    "operatorType": "私立"
  },
  {
    "id": "F0026",
    "name": "松柏綜合長照中心",
    "type": "長照中心",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區中正路81號之1",
    "phone": "(04) 3860-8253",
    "website": null,
    "beds": {
      "total": 150,
      "available": 24,
      "occupied": 126,
      "maleAvailable": 19,
      "femaleAvailable": 5,
      "lastUpdated": "2026-05-11T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 32000,
        "deposit": 32000
      },
      {
        "label": "雙人房",
        "monthly": 40000,
        "deposit": 40000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "安寧療護",
      "呼吸照護",
      "職能治療",
      "語言治療",
      "復健治療",
      "洗腎服務",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.100082,
    "longitude": 120.504343,
    "establishedYear": 2015,
    "operatorType": "私立"
  },
  {
    "id": "F0027",
    "name": "松鶴忘憂園失智照護中心",
    "type": "失智專區",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區光復路472號之2",
    "phone": "(03) 3280-4241",
    "website": null,
    "beds": {
      "total": 100,
      "available": 58,
      "occupied": 42,
      "maleAvailable": 43,
      "femaleAvailable": 15,
      "lastUpdated": "2026-05-17T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 32000,
        "deposit": 32000
      },
      {
        "label": "雙人房",
        "monthly": 40000,
        "deposit": 40000
      },
      {
        "label": "單人房",
        "monthly": 50000,
        "deposit": 50000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "傷口照護",
      "物理治療",
      "管路照護",
      "呼吸照護",
      "語言治療",
      "洗腎服務",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.750548,
    "longitude": 120.940218,
    "establishedYear": 2017,
    "operatorType": "財團法人"
  },
  {
    "id": "F0028",
    "name": "博愛社區日照中心",
    "type": "日照中心",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區信義路497號",
    "phone": "(03) 3712-1339",
    "website": null,
    "beds": {
      "total": 60,
      "available": 2,
      "occupied": 58,
      "maleAvailable": 1,
      "femaleAvailable": 1,
      "lastUpdated": "2026-05-16T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 25000,
        "deposit": 25000
      },
      {
        "label": "單人房",
        "monthly": 43000,
        "deposit": 43000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2025,
    "services": [
      "心理諮商",
      "呼吸照護",
      "職能治療",
      "復健治療",
      "管路照護",
      "營養諮詢",
      "社工服務",
      "語言治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.705038,
    "longitude": 121.766653,
    "establishedYear": 1995,
    "operatorType": "私立"
  },
  {
    "id": "F0029",
    "name": "高醫憶家園失智專區",
    "type": "失智專區",
    "city": "花蓮縣",
    "district": "市區",
    "address": "花蓮縣市區復興路319號之3",
    "phone": "(03) 3986-7622",
    "website": "https://高醫憶家園失智專區.com.tw",
    "beds": {
      "total": 120,
      "available": 76,
      "occupied": 44,
      "maleAvailable": 58,
      "femaleAvailable": 18,
      "lastUpdated": "2026-05-10T11:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 27000,
        "deposit": 27000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2025,
    "services": [
      "物理治療",
      "社工服務",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.97312,
    "longitude": 121.551013,
    "establishedYear": 2003,
    "operatorType": "財團法人"
  },
  {
    "id": "F0030",
    "name": "奇美仁愛護理之家",
    "type": "護理之家",
    "city": "花蓮縣",
    "district": "市區",
    "address": "花蓮縣市區建國路213號之3",
    "phone": "(03) 2460-2858",
    "website": "https://奇美仁愛護理之家.com.tw",
    "beds": {
      "total": 49,
      "available": 23,
      "occupied": 26,
      "maleAvailable": 9,
      "femaleAvailable": 14,
      "lastUpdated": "2026-05-13T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 43000,
        "deposit": 43000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "物理治療",
      "管路照護",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.056224,
    "longitude": 121.567698,
    "establishedYear": 2017,
    "operatorType": "財團法人"
  },
  {
    "id": "F0031",
    "name": "雙和松鶴養護中心",
    "type": "養護中心",
    "city": "臺南市",
    "district": "南區",
    "address": "臺南市南區民生路358號之1",
    "phone": "(06) 3715-9022",
    "website": "https://雙和松鶴養護中心.com.tw",
    "beds": {
      "total": 60,
      "available": 8,
      "occupied": 52,
      "maleAvailable": 4,
      "femaleAvailable": 4,
      "lastUpdated": "2026-05-13T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 51000,
        "deposit": 51000
      },
      {
        "label": "單人房",
        "monthly": 69000,
        "deposit": 69000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2024,
    "services": [
      "社工服務",
      "營養諮詢",
      "失智照護",
      "語言治療",
      "心理諮商",
      "職能治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.979354,
    "longitude": 120.296256,
    "establishedYear": 2015,
    "operatorType": "財團法人"
  },
  {
    "id": "F0032",
    "name": "恩主公忘憂園失智照護中心",
    "type": "失智專區",
    "city": "嘉義市",
    "district": "市區",
    "address": "嘉義市市區中正路241號之2",
    "phone": "(05) 3781-2644",
    "website": null,
    "beds": {
      "total": 40,
      "available": 12,
      "occupied": 28,
      "maleAvailable": 0,
      "femaleAvailable": 12,
      "lastUpdated": "2026-05-16T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 29000,
        "deposit": 29000
      },
      {
        "label": "雙人房",
        "monthly": 37000,
        "deposit": 37000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2025,
    "services": [
      "洗腎服務",
      "社工服務",
      "營養諮詢",
      "復健治療",
      "管路照護",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.539349,
    "longitude": 120.524193,
    "establishedYear": 2019,
    "operatorType": "私立"
  },
  {
    "id": "F0033",
    "name": "慈濟安寧照護中心",
    "type": "安寧病房",
    "city": "南投縣",
    "district": "市區",
    "address": "南投縣市區建國路463號",
    "phone": "(049) 2465-2480",
    "website": null,
    "beds": {
      "total": 150,
      "available": 92,
      "occupied": 58,
      "maleAvailable": 30,
      "femaleAvailable": 62,
      "lastUpdated": "2026-05-10T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 45000,
        "deposit": 45000
      },
      {
        "label": "雙人房",
        "monthly": 53000,
        "deposit": 53000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "藥事服務",
      "物理治療",
      "語言治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.970613,
    "longitude": 120.675989,
    "establishedYear": 1994,
    "operatorType": "私立"
  },
  {
    "id": "F0034",
    "name": "康寧長期照顧中心",
    "type": "長照中心",
    "city": "屏東縣",
    "district": "市區",
    "address": "屏東縣市區中華路38號之3",
    "phone": "(08) 2293-4804",
    "website": "https://康寧長期照顧中心.com.tw",
    "beds": {
      "total": 150,
      "available": 52,
      "occupied": 98,
      "maleAvailable": 39,
      "femaleAvailable": 13,
      "lastUpdated": "2026-05-19T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 47000,
        "deposit": 47000
      },
      {
        "label": "單人房",
        "monthly": 65000,
        "deposit": 65000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "營養諮詢",
      "呼吸照護",
      "物理治療",
      "復健治療",
      "心理諮商"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.739194,
    "longitude": 120.516418,
    "establishedYear": 2014,
    "operatorType": "公立"
  },
  {
    "id": "F0035",
    "name": "耕莘安寧照護中心",
    "type": "安寧病房",
    "city": "基隆市",
    "district": "市區",
    "address": "基隆市市區復興路113號之1",
    "phone": "(02) 2604-1359",
    "website": "https://耕莘安寧照護中心.com.tw",
    "beds": {
      "total": 49,
      "available": 9,
      "occupied": 40,
      "maleAvailable": 9,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-12T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 36000,
        "deposit": 36000
      },
      {
        "label": "雙人房",
        "monthly": 44000,
        "deposit": 44000
      },
      {
        "label": "單人房",
        "monthly": 54000,
        "deposit": 54000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2024,
    "services": [
      "安寧療護",
      "呼吸照護",
      "復健治療",
      "職能治療",
      "語言治療",
      "營養諮詢",
      "藥事服務",
      "心理諮商"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 25.175818,
    "longitude": 121.75913,
    "establishedYear": 2013,
    "operatorType": "私立"
  },
  {
    "id": "F0036",
    "name": "成大慈恩護理之家",
    "type": "護理之家",
    "city": "雲林縣",
    "district": "市區",
    "address": "雲林縣市區中正路240號",
    "phone": "(05) 3989-6994",
    "website": null,
    "beds": {
      "total": 60,
      "available": 14,
      "occupied": 46,
      "maleAvailable": 2,
      "femaleAvailable": 12,
      "lastUpdated": "2026-05-13T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 31000,
        "deposit": 31000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "心理諮商",
      "管路照護",
      "呼吸照護",
      "營養諮詢",
      "語言治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.746449,
    "longitude": 120.518194,
    "establishedYear": 2010,
    "operatorType": "私立"
  },
  {
    "id": "F0037",
    "name": "國泰慈暉養護中心",
    "type": "養護中心",
    "city": "臺中市",
    "district": "潭子區",
    "address": "臺中市潭子區中山路485號",
    "phone": "(04) 2478-8724",
    "website": null,
    "beds": {
      "total": 150,
      "available": 52,
      "occupied": 98,
      "maleAvailable": 52,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-17T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 45000,
        "deposit": 45000
      },
      {
        "label": "雙人房",
        "monthly": 53000,
        "deposit": 53000
      }
    ],
    "rating": "優等",
    "ratingYear": 2024,
    "services": [
      "失智照護",
      "職能治療",
      "傷口照護",
      "物理治療",
      "洗腎服務",
      "營養諮詢",
      "呼吸照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.171878,
    "longitude": 120.612668,
    "establishedYear": 2019,
    "operatorType": "私立"
  },
  {
    "id": "F0038",
    "name": "高醫忘憂園失智照護中心",
    "type": "失智專區",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區中正路352號之2",
    "phone": "(03) 3341-2622",
    "website": "https://高醫忘憂園失智照護中心.com.tw",
    "beds": {
      "total": 120,
      "available": 27,
      "occupied": 93,
      "maleAvailable": 18,
      "femaleAvailable": 9,
      "lastUpdated": "2026-05-15T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 49000,
        "deposit": 49000
      },
      {
        "label": "雙人房",
        "monthly": 57000,
        "deposit": 57000
      },
      {
        "label": "單人房",
        "monthly": 67000,
        "deposit": 67000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2025,
    "services": [
      "安寧療護",
      "呼吸照護",
      "復健治療",
      "失智照護",
      "傷口照護",
      "營養諮詢",
      "社工服務"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.828089,
    "longitude": 121.809872,
    "establishedYear": 1992,
    "operatorType": "社團法人"
  },
  {
    "id": "F0039",
    "name": "悠然忘憂園失智照護中心",
    "type": "失智專區",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區中華路277號之2",
    "phone": "(03) 3611-4362",
    "website": "https://悠然忘憂園失智照護中心.com.tw",
    "beds": {
      "total": 200,
      "available": 129,
      "occupied": 71,
      "maleAvailable": 12,
      "femaleAvailable": 117,
      "lastUpdated": "2026-05-11T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 50000,
        "deposit": 50000
      },
      {
        "label": "單人房",
        "monthly": 68000,
        "deposit": 68000
      }
    ],
    "rating": "優等",
    "ratingYear": 2024,
    "services": [
      "傷口照護",
      "職能治療",
      "心理諮商",
      "語言治療",
      "失智照護",
      "管路照護",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.720364,
    "longitude": 121.830445,
    "establishedYear": 2000,
    "operatorType": "財團法人"
  },
  {
    "id": "F0040",
    "name": "博愛老人養護中心",
    "type": "養護中心",
    "city": "臺北市",
    "district": "中山區",
    "address": "臺北市中山區中山路246號之3",
    "phone": "(02) 2741-9408",
    "website": null,
    "beds": {
      "total": 80,
      "available": 21,
      "occupied": 59,
      "maleAvailable": 3,
      "femaleAvailable": 18,
      "lastUpdated": "2026-05-11T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 49000,
        "deposit": 49000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "社工服務",
      "傷口照護",
      "職能治療",
      "復健治療",
      "心理諮商",
      "呼吸照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 25.026287,
    "longitude": 121.639244,
    "establishedYear": 1990,
    "operatorType": "私立"
  },
  {
    "id": "F0041",
    "name": "慈暉社區長照中心",
    "type": "長照中心",
    "city": "臺南市",
    "district": "南區",
    "address": "臺南市南區大同路374號",
    "phone": "(06) 2203-2874",
    "website": null,
    "beds": {
      "total": 80,
      "available": 16,
      "occupied": 64,
      "maleAvailable": 16,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-15T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 34000,
        "deposit": 34000
      },
      {
        "label": "雙人房",
        "monthly": 42000,
        "deposit": 42000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2025,
    "services": [
      "藥事服務",
      "社工服務",
      "語言治療",
      "傷口照護",
      "安寧療護",
      "營養諮詢",
      "物理治療",
      "心理諮商"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.973229,
    "longitude": 120.21956,
    "establishedYear": 2015,
    "operatorType": "私立"
  },
  {
    "id": "F0042",
    "name": "松柏悠然安養中心",
    "type": "安養中心",
    "city": "桃園市",
    "district": "中壢區",
    "address": "桃園市中壢區信義路115號",
    "phone": "(03) 3372-3002",
    "website": null,
    "beds": {
      "total": 40,
      "available": 10,
      "occupied": 30,
      "maleAvailable": 0,
      "femaleAvailable": 10,
      "lastUpdated": "2026-05-18T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 44000,
        "deposit": 44000
      },
      {
        "label": "雙人房",
        "monthly": 52000,
        "deposit": 52000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "藥事服務",
      "安寧療護",
      "語言治療",
      "復健治療",
      "呼吸照護",
      "職能治療",
      "失智照護",
      "物理治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.006467,
    "longitude": 121.251038,
    "establishedYear": 2021,
    "operatorType": "私立"
  },
  {
    "id": "F0043",
    "name": "成大銀髮日照中心",
    "type": "日照中心",
    "city": "屏東縣",
    "district": "市區",
    "address": "屏東縣市區中山路47號之1",
    "phone": "(08) 2695-6751",
    "website": null,
    "beds": {
      "total": 50,
      "available": 33,
      "occupied": 17,
      "maleAvailable": 11,
      "femaleAvailable": 22,
      "lastUpdated": "2026-05-17T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 33000,
        "deposit": 33000
      },
      {
        "label": "雙人房",
        "monthly": 41000,
        "deposit": 41000
      }
    ],
    "rating": "優等",
    "ratingYear": 2024,
    "services": [
      "職能治療",
      "物理治療",
      "安寧療護",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.6177,
    "longitude": 120.509308,
    "establishedYear": 2005,
    "operatorType": "公立"
  },
  {
    "id": "F0044",
    "name": "康寧長期照顧中心",
    "type": "長照中心",
    "city": "桃園市",
    "district": "桃園區",
    "address": "桃園市桃園區光復路29號",
    "phone": "(03) 2905-7785",
    "website": null,
    "beds": {
      "total": 200,
      "available": 114,
      "occupied": 86,
      "maleAvailable": 34,
      "femaleAvailable": 80,
      "lastUpdated": "2026-05-13T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 39000,
        "deposit": 39000
      },
      {
        "label": "雙人房",
        "monthly": 47000,
        "deposit": 47000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "洗腎服務",
      "失智照護",
      "安寧療護",
      "心理諮商",
      "呼吸照護",
      "營養諮詢",
      "職能治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.921267,
    "longitude": 121.280242,
    "establishedYear": 1992,
    "operatorType": "私立"
  },
  {
    "id": "F0045",
    "name": "恩典長照服務中心",
    "type": "長照中心",
    "city": "屏東縣",
    "district": "市區",
    "address": "屏東縣市區大同路149號",
    "phone": "(08) 2893-1307",
    "website": null,
    "beds": {
      "total": 120,
      "available": 9,
      "occupied": 111,
      "maleAvailable": 5,
      "femaleAvailable": 4,
      "lastUpdated": "2026-05-15T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 27000,
        "deposit": 27000
      },
      {
        "label": "單人房",
        "monthly": 45000,
        "deposit": 45000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "心理諮商",
      "失智照護",
      "職能治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.663685,
    "longitude": 120.472708,
    "establishedYear": 2008,
    "operatorType": "私立"
  },
  {
    "id": "F0046",
    "name": "門諾長青安養中心",
    "type": "安養中心",
    "city": "臺中市",
    "district": "南屯區",
    "address": "臺中市南屯區中華路309號之1",
    "phone": "(04) 2682-3754",
    "website": "https://門諾長青安養中心.com.tw",
    "beds": {
      "total": 120,
      "available": 70,
      "occupied": 50,
      "maleAvailable": 50,
      "femaleAvailable": 20,
      "lastUpdated": "2026-05-11T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 53000,
        "deposit": 53000
      }
    ],
    "rating": "優等",
    "ratingYear": 2025,
    "services": [
      "洗腎服務",
      "社工服務",
      "藥事服務",
      "傷口照護",
      "失智照護",
      "職能治療",
      "管路照護",
      "心理諮商"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.084449,
    "longitude": 120.634955,
    "establishedYear": 2021,
    "operatorType": "公立"
  },
  {
    "id": "F0047",
    "name": "奇美安寧緩和病房",
    "type": "安寧病房",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區建國路40號",
    "phone": "(03) 2562-1920",
    "website": "https://奇美安寧緩和病房.com.tw",
    "beds": {
      "total": 40,
      "available": 13,
      "occupied": 27,
      "maleAvailable": 1,
      "femaleAvailable": 12,
      "lastUpdated": "2026-05-18T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 40000,
        "deposit": 40000
      },
      {
        "label": "雙人房",
        "monthly": 48000,
        "deposit": 48000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "呼吸照護",
      "營養諮詢",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.682017,
    "longitude": 121.731998,
    "establishedYear": 1987,
    "operatorType": "財團法人"
  },
  {
    "id": "F0048",
    "name": "耕莘銀髮日照中心",
    "type": "日照中心",
    "city": "基隆市",
    "district": "市區",
    "address": "基隆市市區光復路82號之2",
    "phone": "(02) 3462-2381",
    "website": null,
    "beds": {
      "total": 40,
      "available": 26,
      "occupied": 14,
      "maleAvailable": 14,
      "femaleAvailable": 12,
      "lastUpdated": "2026-05-14T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 28000,
        "deposit": 28000
      },
      {
        "label": "雙人房",
        "monthly": 36000,
        "deposit": 36000
      },
      {
        "label": "單人房",
        "monthly": 46000,
        "deposit": 46000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "復健治療",
      "傷口照護",
      "語言治療",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.206558,
    "longitude": 121.745851,
    "establishedYear": 1988,
    "operatorType": "公立"
  },
  {
    "id": "F0049",
    "name": "松柏福安養護中心",
    "type": "養護中心",
    "city": "南投縣",
    "district": "市區",
    "address": "南投縣市區復興路417號之1",
    "phone": "(049) 3856-3463",
    "website": "https://松柏福安養護中心.com.tw",
    "beds": {
      "total": 200,
      "available": 36,
      "occupied": 164,
      "maleAvailable": 18,
      "femaleAvailable": 18,
      "lastUpdated": "2026-05-18T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 33000,
        "deposit": 33000
      },
      {
        "label": "雙人房",
        "monthly": 41000,
        "deposit": 41000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "物理治療",
      "管路照護",
      "失智照護",
      "呼吸照護",
      "安寧療護",
      "藥事服務",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.880533,
    "longitude": 120.665269,
    "establishedYear": 1986,
    "operatorType": "私立"
  },
  {
    "id": "F0050",
    "name": "高醫松鶴養護中心",
    "type": "養護中心",
    "city": "高雄市",
    "district": "前鎮區",
    "address": "高雄市前鎮區光復路415號之1",
    "phone": "(07) 2207-9317",
    "website": "https://高醫松鶴養護中心.com.tw",
    "beds": {
      "total": 49,
      "available": 19,
      "occupied": 30,
      "maleAvailable": 4,
      "femaleAvailable": 15,
      "lastUpdated": "2026-05-10T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 30000,
        "deposit": 30000
      },
      {
        "label": "單人房",
        "monthly": 48000,
        "deposit": 48000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "社工服務",
      "復健治療",
      "物理治療",
      "失智照護",
      "職能治療",
      "管路照護",
      "安寧療護",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.57296,
    "longitude": 120.354015,
    "establishedYear": 2000,
    "operatorType": "社團法人"
  },
  {
    "id": "F0051",
    "name": "慈濟長照服務中心",
    "type": "長照中心",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區信義路448號之2",
    "phone": "(04) 2902-8564",
    "website": "https://慈濟長照服務中心.com.tw",
    "beds": {
      "total": 50,
      "available": 4,
      "occupied": 46,
      "maleAvailable": 1,
      "femaleAvailable": 3,
      "lastUpdated": "2026-05-11T16:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 37000,
        "deposit": 37000
      },
      {
        "label": "雙人房",
        "monthly": 45000,
        "deposit": 45000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "社工服務",
      "心理諮商",
      "安寧療護",
      "管路照護",
      "傷口照護",
      "物理治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.13968,
    "longitude": 120.470349,
    "establishedYear": 1995,
    "operatorType": "私立"
  },
  {
    "id": "F0052",
    "name": "主恩安寧照護中心",
    "type": "安寧病房",
    "city": "臺東縣",
    "district": "市區",
    "address": "臺東縣市區復興路406號之1",
    "phone": "(089) 2765-4862",
    "website": null,
    "beds": {
      "total": 49,
      "available": 5,
      "occupied": 44,
      "maleAvailable": 2,
      "femaleAvailable": 3,
      "lastUpdated": "2026-05-14T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 25000,
        "deposit": 25000
      },
      {
        "label": "雙人房",
        "monthly": 33000,
        "deposit": 33000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "失智照護",
      "傷口照護",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.72599,
    "longitude": 121.080853,
    "establishedYear": 2015,
    "operatorType": "財團法人"
  },
  {
    "id": "F0053",
    "name": "慈暉長期照護之家",
    "type": "護理之家",
    "city": "臺北市",
    "district": "大同區",
    "address": "臺北市大同區信義路306號",
    "phone": "(02) 2486-5934",
    "website": "https://慈暉長期照護之家.com.tw",
    "beds": {
      "total": 40,
      "available": 10,
      "occupied": 30,
      "maleAvailable": 9,
      "femaleAvailable": 1,
      "lastUpdated": "2026-05-19T11:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 42000,
        "deposit": 42000
      },
      {
        "label": "雙人房",
        "monthly": 50000,
        "deposit": 50000
      },
      {
        "label": "單人房",
        "monthly": 60000,
        "deposit": 60000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "安寧療護",
      "物理治療",
      "職能治療",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.963049,
    "longitude": 121.61887,
    "establishedYear": 1985,
    "operatorType": "財團法人"
  },
  {
    "id": "F0054",
    "name": "國泰長期照顧中心",
    "type": "長照中心",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區民生路376號",
    "phone": "(03) 3039-1333",
    "website": "https://國泰長期照顧中心.com.tw",
    "beds": {
      "total": 120,
      "available": 34,
      "occupied": 86,
      "maleAvailable": 4,
      "femaleAvailable": 30,
      "lastUpdated": "2026-05-15T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 42000,
        "deposit": 42000
      },
      {
        "label": "雙人房",
        "monthly": 50000,
        "deposit": 50000
      },
      {
        "label": "單人房",
        "monthly": 60000,
        "deposit": 60000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "復健治療",
      "物理治療",
      "安寧療護",
      "失智照護",
      "呼吸照護",
      "心理諮商"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.781135,
    "longitude": 120.90181,
    "establishedYear": 2006,
    "operatorType": "公立"
  },
  {
    "id": "F0055",
    "name": "耕莘忘憂園失智照護中心",
    "type": "失智專區",
    "city": "高雄市",
    "district": "路竹區",
    "address": "高雄市路竹區信義路130號",
    "phone": "(07) 2075-5807",
    "website": "https://耕莘忘憂園失智照護中心.com.tw",
    "beds": {
      "total": 40,
      "available": 2,
      "occupied": 38,
      "maleAvailable": 0,
      "femaleAvailable": 2,
      "lastUpdated": "2026-05-13T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 27000,
        "deposit": 27000
      },
      {
        "label": "雙人房",
        "monthly": 35000,
        "deposit": 35000
      },
      {
        "label": "單人房",
        "monthly": 45000,
        "deposit": 45000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "復健治療",
      "失智照護",
      "呼吸照護",
      "社工服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.610716,
    "longitude": 120.351465,
    "establishedYear": 1988,
    "operatorType": "公立"
  },
  {
    "id": "F0056",
    "name": "恩主公慈恩護理之家",
    "type": "護理之家",
    "city": "南投縣",
    "district": "市區",
    "address": "南投縣市區中華路280號之2",
    "phone": "(049) 3994-4060",
    "website": null,
    "beds": {
      "total": 80,
      "available": 29,
      "occupied": 51,
      "maleAvailable": 23,
      "femaleAvailable": 6,
      "lastUpdated": "2026-05-11T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 39000,
        "deposit": 39000
      },
      {
        "label": "雙人房",
        "monthly": 47000,
        "deposit": 47000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "失智照護",
      "藥事服務",
      "社工服務",
      "呼吸照護",
      "洗腎服務",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.843628,
    "longitude": 120.701393,
    "establishedYear": 2012,
    "operatorType": "私立"
  },
  {
    "id": "F0057",
    "name": "博愛悠然安養中心",
    "type": "安養中心",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區復興路186號之3",
    "phone": "(03) 2153-7655",
    "website": "https://博愛悠然安養中心.com.tw",
    "beds": {
      "total": 150,
      "available": 45,
      "occupied": 105,
      "maleAvailable": 17,
      "femaleAvailable": 28,
      "lastUpdated": "2026-05-10T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 45000,
        "deposit": 45000
      },
      {
        "label": "雙人房",
        "monthly": 53000,
        "deposit": 53000
      },
      {
        "label": "單人房",
        "monthly": 63000,
        "deposit": 63000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "物理治療",
      "管路照護",
      "復健治療",
      "藥事服務",
      "職能治療",
      "營養諮詢",
      "語言治療",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.686757,
    "longitude": 121.797562,
    "establishedYear": 2008,
    "operatorType": "私立"
  },
  {
    "id": "F0058",
    "name": "馬偕社區長照中心",
    "type": "長照中心",
    "city": "桃園市",
    "district": "大園區",
    "address": "桃園市大園區中正路232號之1",
    "phone": "(03) 2381-9176",
    "website": "https://馬偕社區長照中心.com.tw",
    "beds": {
      "total": 80,
      "available": 34,
      "occupied": 46,
      "maleAvailable": 17,
      "femaleAvailable": 17,
      "lastUpdated": "2026-05-17T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 33000,
        "deposit": 33000
      },
      {
        "label": "雙人房",
        "monthly": 41000,
        "deposit": 41000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "洗腎服務",
      "呼吸照護",
      "藥事服務",
      "營養諮詢",
      "傷口照護",
      "語言治療",
      "物理治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.946029,
    "longitude": 121.238717,
    "establishedYear": 1989,
    "operatorType": "財團法人"
  },
  {
    "id": "F0059",
    "name": "康寧安寧照護中心",
    "type": "安寧病房",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區信義路270號之3",
    "phone": "(04) 2484-9094",
    "website": "https://康寧安寧照護中心.com.tw",
    "beds": {
      "total": 60,
      "available": 8,
      "occupied": 52,
      "maleAvailable": 3,
      "femaleAvailable": 5,
      "lastUpdated": "2026-05-19T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 28000,
        "deposit": 28000
      },
      {
        "label": "雙人房",
        "monthly": 36000,
        "deposit": 36000
      },
      {
        "label": "單人房",
        "monthly": 46000,
        "deposit": 46000
      }
    ],
    "rating": "優等",
    "ratingYear": 2024,
    "services": [
      "職能治療",
      "失智照護",
      "營養諮詢",
      "社工服務",
      "管路照護",
      "洗腎服務",
      "物理治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.049487,
    "longitude": 120.621935,
    "establishedYear": 1989,
    "operatorType": "財團法人"
  },
  {
    "id": "F0060",
    "name": "中山長照服務中心",
    "type": "長照中心",
    "city": "臺東縣",
    "district": "市區",
    "address": "臺東縣市區建國路434號",
    "phone": "(089) 3061-3507",
    "website": null,
    "beds": {
      "total": 40,
      "available": 14,
      "occupied": 26,
      "maleAvailable": 8,
      "femaleAvailable": 6,
      "lastUpdated": "2026-05-18T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 54000,
        "deposit": 54000
      },
      {
        "label": "雙人房",
        "monthly": 62000,
        "deposit": 62000
      },
      {
        "label": "單人房",
        "monthly": 72000,
        "deposit": 72000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "失智照護",
      "語言治療",
      "傷口照護",
      "心理諮商"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.826597,
    "longitude": 121.148024,
    "establishedYear": 2019,
    "operatorType": "私立"
  },
  {
    "id": "F0061",
    "name": "長青日間照顧中心",
    "type": "日照中心",
    "city": "高雄市",
    "district": "林園區",
    "address": "高雄市林園區民生路413號之3",
    "phone": "(07) 2093-5336",
    "website": null,
    "beds": {
      "total": 200,
      "available": 48,
      "occupied": 152,
      "maleAvailable": 36,
      "femaleAvailable": 12,
      "lastUpdated": "2026-05-11T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 26000,
        "deposit": 26000
      },
      {
        "label": "雙人房",
        "monthly": 34000,
        "deposit": 34000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "安寧療護",
      "職能治療",
      "物理治療",
      "復健治療",
      "營養諮詢",
      "社工服務",
      "呼吸照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.649705,
    "longitude": 120.269335,
    "establishedYear": 2015,
    "operatorType": "財團法人"
  },
  {
    "id": "F0062",
    "name": "中國慈暉養護中心",
    "type": "養護中心",
    "city": "南投縣",
    "district": "市區",
    "address": "南投縣市區光復路215號之1",
    "phone": "(049) 2653-4960",
    "website": "https://中國慈暉養護中心.com.tw",
    "beds": {
      "total": 60,
      "available": 15,
      "occupied": 45,
      "maleAvailable": 4,
      "femaleAvailable": 11,
      "lastUpdated": "2026-05-12T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 49000,
        "deposit": 49000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "營養諮詢",
      "傷口照護",
      "管路照護",
      "洗腎服務",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.877434,
    "longitude": 120.666464,
    "establishedYear": 1995,
    "operatorType": "財團法人"
  },
  {
    "id": "F0063",
    "name": "中山悠然安養中心",
    "type": "安養中心",
    "city": "臺東縣",
    "district": "市區",
    "address": "臺東縣市區中正路221號之1",
    "phone": "(089) 2440-6781",
    "website": "https://中山悠然安養中心.com.tw",
    "beds": {
      "total": 100,
      "available": 65,
      "occupied": 35,
      "maleAvailable": 11,
      "femaleAvailable": 54,
      "lastUpdated": "2026-05-15T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 37000,
        "deposit": 37000
      },
      {
        "label": "雙人房",
        "monthly": 45000,
        "deposit": 45000
      },
      {
        "label": "單人房",
        "monthly": 55000,
        "deposit": 55000
      }
    ],
    "rating": "優等",
    "ratingYear": 2025,
    "services": [
      "營養諮詢",
      "職能治療",
      "物理治療",
      "語言治療",
      "心理諮商"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.72072,
    "longitude": 121.066308,
    "establishedYear": 1988,
    "operatorType": "財團法人"
  },
  {
    "id": "F0064",
    "name": "松鶴日間照顧中心",
    "type": "日照中心",
    "city": "基隆市",
    "district": "市區",
    "address": "基隆市市區中華路102號之3",
    "phone": "(02) 3276-2946",
    "website": "https://松鶴日間照顧中心.com.tw",
    "beds": {
      "total": 80,
      "available": 22,
      "occupied": 58,
      "maleAvailable": 14,
      "femaleAvailable": 8,
      "lastUpdated": "2026-05-10T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 50000,
        "deposit": 50000
      },
      {
        "label": "雙人房",
        "monthly": 58000,
        "deposit": 58000
      },
      {
        "label": "單人房",
        "monthly": 68000,
        "deposit": 68000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "安寧療護",
      "失智照護",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.137253,
    "longitude": 121.720497,
    "establishedYear": 2015,
    "operatorType": "財團法人"
  },
  {
    "id": "F0065",
    "name": "西港區社區長照中心",
    "type": "長照中心",
    "city": "臺南市",
    "district": "西港區",
    "address": "臺南市西港區中山路306號之3",
    "phone": "(06) 3090-9025",
    "website": null,
    "beds": {
      "total": 40,
      "available": 15,
      "occupied": 25,
      "maleAvailable": 9,
      "femaleAvailable": 6,
      "lastUpdated": "2026-05-19T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 44000,
        "deposit": 44000
      },
      {
        "label": "單人房",
        "monthly": 62000,
        "deposit": 62000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "營養諮詢",
      "復健治療",
      "失智照護",
      "語言治療",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.075784,
    "longitude": 120.240392,
    "establishedYear": 2022,
    "operatorType": "財團法人"
  },
  {
    "id": "F0066",
    "name": "輔大長照服務中心",
    "type": "長照中心",
    "city": "臺東縣",
    "district": "市區",
    "address": "臺東縣市區中山路362號之1",
    "phone": "(089) 2857-3481",
    "website": "https://輔大長照服務中心.com.tw",
    "beds": {
      "total": 20,
      "available": 5,
      "occupied": 15,
      "maleAvailable": 5,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-18T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 28000,
        "deposit": 28000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "安寧療護",
      "社工服務",
      "職能治療",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.814651,
    "longitude": 121.182734,
    "establishedYear": 2005,
    "operatorType": "社團法人"
  },
  {
    "id": "F0067",
    "name": "宜蘭銀髮日照中心",
    "type": "日照中心",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區建國路148號",
    "phone": "(03) 2611-4684",
    "website": "https://宜蘭銀髮日照中心.com.tw",
    "beds": {
      "total": 200,
      "available": 67,
      "occupied": 133,
      "maleAvailable": 61,
      "femaleAvailable": 6,
      "lastUpdated": "2026-05-18T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 31000,
        "deposit": 31000
      },
      {
        "label": "雙人房",
        "monthly": 39000,
        "deposit": 39000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2025,
    "services": [
      "藥事服務",
      "呼吸照護",
      "語言治療",
      "傷口照護",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.726727,
    "longitude": 121.728809,
    "establishedYear": 1994,
    "operatorType": "私立"
  },
  {
    "id": "F0068",
    "name": "成大松鶴養護中心",
    "type": "養護中心",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區大同路170號之3",
    "phone": "(04) 3910-5450",
    "website": null,
    "beds": {
      "total": 200,
      "available": 69,
      "occupied": 131,
      "maleAvailable": 61,
      "femaleAvailable": 8,
      "lastUpdated": "2026-05-12T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 32000,
        "deposit": 32000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "語言治療",
      "職能治療",
      "傷口照護",
      "心理諮商",
      "復健治療",
      "社工服務",
      "物理治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.102071,
    "longitude": 120.470399,
    "establishedYear": 2015,
    "operatorType": "財團法人"
  },
  {
    "id": "F0069",
    "name": "松鶴養護中心",
    "type": "養護中心",
    "city": "基隆市",
    "district": "市區",
    "address": "基隆市市區建國路449號",
    "phone": "(02) 2076-3868",
    "website": null,
    "beds": {
      "total": 30,
      "available": 0,
      "occupied": 30,
      "maleAvailable": 0,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-19T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 42000,
        "deposit": 42000
      },
      {
        "label": "雙人房",
        "monthly": 50000,
        "deposit": 50000
      },
      {
        "label": "單人房",
        "monthly": 60000,
        "deposit": 60000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "復健治療",
      "安寧療護",
      "營養諮詢",
      "管路照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.197857,
    "longitude": 121.815941,
    "establishedYear": 2006,
    "operatorType": "私立"
  },
  {
    "id": "F0070",
    "name": "中國綜合長照中心",
    "type": "長照中心",
    "city": "臺東縣",
    "district": "市區",
    "address": "臺東縣市區大同路424號之3",
    "phone": "(089) 2526-4050",
    "website": "https://中國綜合長照中心.com.tw",
    "beds": {
      "total": 50,
      "available": 22,
      "occupied": 28,
      "maleAvailable": 3,
      "femaleAvailable": 19,
      "lastUpdated": "2026-05-11T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 35000,
        "deposit": 35000
      }
    ],
    "rating": "優等",
    "ratingYear": 2024,
    "services": [
      "藥事服務",
      "呼吸照護",
      "職能治療",
      "物理治療",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.703079,
    "longitude": 121.201983,
    "establishedYear": 1993,
    "operatorType": "財團法人"
  },
  {
    "id": "F0071",
    "name": "恩典老人養護中心",
    "type": "養護中心",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區和平路473號之2",
    "phone": "(03) 2535-6890",
    "website": "https://恩典老人養護中心.com.tw",
    "beds": {
      "total": 100,
      "available": 33,
      "occupied": 67,
      "maleAvailable": 21,
      "femaleAvailable": 12,
      "lastUpdated": "2026-05-14T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 34000,
        "deposit": 34000
      },
      {
        "label": "雙人房",
        "monthly": 42000,
        "deposit": 42000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "物理治療",
      "洗腎服務",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.773089,
    "longitude": 120.955867,
    "establishedYear": 1993,
    "operatorType": "財團法人"
  },
  {
    "id": "F0072",
    "name": "亞東長青安養中心",
    "type": "安養中心",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區復興路438號之3",
    "phone": "(03) 3612-2341",
    "website": null,
    "beds": {
      "total": 120,
      "available": 53,
      "occupied": 67,
      "maleAvailable": 48,
      "femaleAvailable": 5,
      "lastUpdated": "2026-05-13T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 33000,
        "deposit": 33000
      },
      {
        "label": "雙人房",
        "monthly": 41000,
        "deposit": 41000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "語言治療",
      "失智照護",
      "洗腎服務",
      "職能治療",
      "心理諮商",
      "復健治療",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.767632,
    "longitude": 121.696976,
    "establishedYear": 2017,
    "operatorType": "財團法人"
  },
  {
    "id": "F0073",
    "name": "馬偕綜合長照中心",
    "type": "長照中心",
    "city": "新北市",
    "district": "五股區",
    "address": "新北市五股區中正路278號",
    "phone": "(02) 2044-7487",
    "website": "https://馬偕綜合長照中心.com.tw",
    "beds": {
      "total": 100,
      "available": 60,
      "occupied": 40,
      "maleAvailable": 35,
      "femaleAvailable": 25,
      "lastUpdated": "2026-05-11T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 40000,
        "deposit": 40000
      },
      {
        "label": "雙人房",
        "monthly": 48000,
        "deposit": 48000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "語言治療",
      "傷口照護",
      "職能治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.948685,
    "longitude": 121.445792,
    "establishedYear": 1996,
    "operatorType": "公立"
  },
  {
    "id": "F0074",
    "name": "聖母長青安養中心",
    "type": "安養中心",
    "city": "屏東縣",
    "district": "市區",
    "address": "屏東縣市區大同路273號之3",
    "phone": "(08) 3761-6697",
    "website": "https://聖母長青安養中心.com.tw",
    "beds": {
      "total": 80,
      "available": 49,
      "occupied": 31,
      "maleAvailable": 43,
      "femaleAvailable": 6,
      "lastUpdated": "2026-05-13T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 46000,
        "deposit": 46000
      },
      {
        "label": "雙人房",
        "monthly": 54000,
        "deposit": 54000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "安寧療護",
      "社工服務",
      "管路照護",
      "傷口照護",
      "復健治療",
      "職能治療",
      "呼吸照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.669081,
    "longitude": 120.523055,
    "establishedYear": 1997,
    "operatorType": "社團法人"
  },
  {
    "id": "F0075",
    "name": "國泰安寧緩和病房",
    "type": "安寧病房",
    "city": "臺中市",
    "district": "東區",
    "address": "臺中市東區中山路72號之2",
    "phone": "(04) 2068-8314",
    "website": null,
    "beds": {
      "total": 150,
      "available": 2,
      "occupied": 148,
      "maleAvailable": 0,
      "femaleAvailable": 2,
      "lastUpdated": "2026-05-19T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 32000,
        "deposit": 32000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "心理諮商",
      "復健治療",
      "傷口照護",
      "藥事服務",
      "安寧療護",
      "營養諮詢",
      "語言治療",
      "呼吸照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.102763,
    "longitude": 120.732197,
    "establishedYear": 1994,
    "operatorType": "社團法人"
  },
  {
    "id": "F0076",
    "name": "松鶴悠然安養中心",
    "type": "安養中心",
    "city": "臺東縣",
    "district": "市區",
    "address": "臺東縣市區大同路210號之1",
    "phone": "(089) 3390-7999",
    "website": null,
    "beds": {
      "total": 20,
      "available": 6,
      "occupied": 14,
      "maleAvailable": 4,
      "femaleAvailable": 2,
      "lastUpdated": "2026-05-12T16:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 53000,
        "deposit": 53000
      },
      {
        "label": "雙人房",
        "monthly": 61000,
        "deposit": 61000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "失智照護",
      "物理治療",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.735985,
    "longitude": 121.148914,
    "establishedYear": 1999,
    "operatorType": "私立"
  },
  {
    "id": "F0077",
    "name": "慈濟松柏護理之家",
    "type": "護理之家",
    "city": "臺南市",
    "district": "麻豆區",
    "address": "臺南市麻豆區光復路21號",
    "phone": "(06) 2676-2295",
    "website": null,
    "beds": {
      "total": 80,
      "available": 19,
      "occupied": 61,
      "maleAvailable": 16,
      "femaleAvailable": 3,
      "lastUpdated": "2026-05-19T16:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 29000,
        "deposit": 29000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2024,
    "services": [
      "洗腎服務",
      "社工服務",
      "語言治療",
      "傷口照護",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.961954,
    "longitude": 120.254788,
    "establishedYear": 2006,
    "operatorType": "私立"
  },
  {
    "id": "F0078",
    "name": "高醫長期照顧中心",
    "type": "長照中心",
    "city": "臺北市",
    "district": "松山區",
    "address": "臺北市松山區信義路390號之2",
    "phone": "(02) 3588-5637",
    "website": "https://高醫長期照顧中心.com.tw",
    "beds": {
      "total": 100,
      "available": 36,
      "occupied": 64,
      "maleAvailable": 13,
      "femaleAvailable": 23,
      "lastUpdated": "2026-05-15T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 37000,
        "deposit": 37000
      },
      {
        "label": "雙人房",
        "monthly": 45000,
        "deposit": 45000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "物理治療",
      "失智照護",
      "呼吸照護",
      "語言治療",
      "藥事服務",
      "社工服務",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 25.027561,
    "longitude": 121.613451,
    "establishedYear": 1999,
    "operatorType": "財團法人"
  },
  {
    "id": "F0079",
    "name": "成大銀髮日照中心",
    "type": "日照中心",
    "city": "臺北市",
    "district": "大安區",
    "address": "臺北市大安區和平路251號之1",
    "phone": "(02) 2777-5026",
    "website": "https://成大銀髮日照中心.com.tw",
    "beds": {
      "total": 150,
      "available": 8,
      "occupied": 142,
      "maleAvailable": 6,
      "femaleAvailable": 2,
      "lastUpdated": "2026-05-18T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 34000,
        "deposit": 34000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "物理治療",
      "失智照護",
      "呼吸照護",
      "營養諮詢",
      "心理諮商",
      "職能治療",
      "管路照護",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.080196,
    "longitude": 121.512083,
    "establishedYear": 1989,
    "operatorType": "社團法人"
  },
  {
    "id": "F0080",
    "name": "長青老人安養中心",
    "type": "安養中心",
    "city": "新北市",
    "district": "板橋區",
    "address": "新北市板橋區建國路275號之2",
    "phone": "(02) 3265-8916",
    "website": null,
    "beds": {
      "total": 30,
      "available": 16,
      "occupied": 14,
      "maleAvailable": 0,
      "femaleAvailable": 16,
      "lastUpdated": "2026-05-16T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 32000,
        "deposit": 32000
      },
      {
        "label": "雙人房",
        "monthly": 40000,
        "deposit": 40000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "復健治療",
      "社工服務",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.002814,
    "longitude": 121.380676,
    "establishedYear": 2018,
    "operatorType": "私立"
  },
  {
    "id": "F0081",
    "name": "基隆安寧緩和病房",
    "type": "安寧病房",
    "city": "基隆市",
    "district": "市區",
    "address": "基隆市市區和平路244號",
    "phone": "(02) 3427-4700",
    "website": "https://基隆安寧緩和病房.com.tw",
    "beds": {
      "total": 80,
      "available": 49,
      "occupied": 31,
      "maleAvailable": 23,
      "femaleAvailable": 26,
      "lastUpdated": "2026-05-12T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 38000,
        "deposit": 38000
      },
      {
        "label": "雙人房",
        "monthly": 46000,
        "deposit": 46000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "物理治療",
      "心理諮商",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.06296,
    "longitude": 121.722682,
    "establishedYear": 2006,
    "operatorType": "財團法人"
  },
  {
    "id": "F0082",
    "name": "福安長期照護之家",
    "type": "護理之家",
    "city": "臺中市",
    "district": "神岡區",
    "address": "臺中市神岡區大同路476號",
    "phone": "(04) 2574-9897",
    "website": null,
    "beds": {
      "total": 150,
      "available": 40,
      "occupied": 110,
      "maleAvailable": 17,
      "femaleAvailable": 23,
      "lastUpdated": "2026-05-19T11:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 26000,
        "deposit": 26000
      },
      {
        "label": "雙人房",
        "monthly": 34000,
        "deposit": 34000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "管路照護",
      "失智照護",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.221835,
    "longitude": 120.687926,
    "establishedYear": 2019,
    "operatorType": "私立"
  },
  {
    "id": "F0083",
    "name": "萬芳社區日照中心",
    "type": "日照中心",
    "city": "臺南市",
    "district": "南區",
    "address": "臺南市南區大同路222號之1",
    "phone": "(06) 3574-7499",
    "website": "https://萬芳社區日照中心.com.tw",
    "beds": {
      "total": 20,
      "available": 13,
      "occupied": 7,
      "maleAvailable": 6,
      "femaleAvailable": 7,
      "lastUpdated": "2026-05-16T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 32000,
        "deposit": 32000
      },
      {
        "label": "雙人房",
        "monthly": 40000,
        "deposit": 40000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2025,
    "services": [
      "復健治療",
      "物理治療",
      "呼吸照護",
      "營養諮詢",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.955502,
    "longitude": 120.235486,
    "establishedYear": 1989,
    "operatorType": "私立"
  },
  {
    "id": "F0084",
    "name": "恩主公忘憂園失智照護中心",
    "type": "失智專區",
    "city": "臺南市",
    "district": "鹽水區",
    "address": "臺南市鹽水區大同路53號",
    "phone": "(06) 3931-6050",
    "website": null,
    "beds": {
      "total": 40,
      "available": 4,
      "occupied": 36,
      "maleAvailable": 3,
      "femaleAvailable": 1,
      "lastUpdated": "2026-05-18T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 35000,
        "deposit": 35000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "洗腎服務",
      "管路照護",
      "心理諮商",
      "藥事服務",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.990815,
    "longitude": 120.235758,
    "establishedYear": 1985,
    "operatorType": "私立"
  },
  {
    "id": "F0085",
    "name": "中山忘憂園失智照護中心",
    "type": "失智專區",
    "city": "嘉義市",
    "district": "市區",
    "address": "嘉義市市區中正路185號之2",
    "phone": "(05) 2616-5397",
    "website": "https://中山忘憂園失智照護中心.com.tw",
    "beds": {
      "total": 49,
      "available": 0,
      "occupied": 49,
      "maleAvailable": 0,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-17T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 47000,
        "deposit": 47000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "管路照護",
      "安寧療護",
      "呼吸照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.467376,
    "longitude": 120.446477,
    "establishedYear": 1993,
    "operatorType": "私立"
  },
  {
    "id": "F0086",
    "name": "彰基安寧緩和病房",
    "type": "安寧病房",
    "city": "嘉義市",
    "district": "市區",
    "address": "嘉義市市區信義路496號之1",
    "phone": "(05) 3995-3230",
    "website": null,
    "beds": {
      "total": 60,
      "available": 12,
      "occupied": 48,
      "maleAvailable": 5,
      "femaleAvailable": 7,
      "lastUpdated": "2026-05-14T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 39000,
        "deposit": 39000
      },
      {
        "label": "雙人房",
        "monthly": 47000,
        "deposit": 47000
      },
      {
        "label": "單人房",
        "monthly": 57000,
        "deposit": 57000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "語言治療",
      "傷口照護",
      "營養諮詢",
      "失智照護",
      "管路照護",
      "安寧療護",
      "物理治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.446632,
    "longitude": 120.480193,
    "establishedYear": 2021,
    "operatorType": "私立"
  },
  {
    "id": "F0087",
    "name": "高醫博愛護理之家",
    "type": "護理之家",
    "city": "高雄市",
    "district": "大寮區",
    "address": "高雄市大寮區大同路38號之3",
    "phone": "(07) 3677-7703",
    "website": "https://高醫博愛護理之家.com.tw",
    "beds": {
      "total": 100,
      "available": 41,
      "occupied": 59,
      "maleAvailable": 28,
      "femaleAvailable": 13,
      "lastUpdated": "2026-05-17T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 51000,
        "deposit": 51000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "物理治療",
      "呼吸照護",
      "傷口照護",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.652386,
    "longitude": 120.335438,
    "establishedYear": 2011,
    "operatorType": "財團法人"
  },
  {
    "id": "F0088",
    "name": "雙和長期照護之家",
    "type": "護理之家",
    "city": "雲林縣",
    "district": "市區",
    "address": "雲林縣市區和平路286號之1",
    "phone": "(05) 3321-7547",
    "website": null,
    "beds": {
      "total": 200,
      "available": 44,
      "occupied": 156,
      "maleAvailable": 10,
      "femaleAvailable": 34,
      "lastUpdated": "2026-05-16T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 46000,
        "deposit": 46000
      },
      {
        "label": "雙人房",
        "monthly": 54000,
        "deposit": 54000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2024,
    "services": [
      "藥事服務",
      "安寧療護",
      "洗腎服務",
      "復健治療",
      "語言治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.668398,
    "longitude": 120.545708,
    "establishedYear": 1986,
    "operatorType": "財團法人"
  },
  {
    "id": "F0089",
    "name": "松柏康寧護理之家",
    "type": "護理之家",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區中山路435號之2",
    "phone": "(04) 2989-6706",
    "website": "https://松柏康寧護理之家.com.tw",
    "beds": {
      "total": 40,
      "available": 16,
      "occupied": 24,
      "maleAvailable": 9,
      "femaleAvailable": 7,
      "lastUpdated": "2026-05-12T11:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 36000,
        "deposit": 36000
      },
      {
        "label": "雙人房",
        "monthly": 44000,
        "deposit": 44000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "語言治療",
      "心理諮商",
      "營養諮詢",
      "失智照護",
      "洗腎服務",
      "呼吸照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.007149,
    "longitude": 120.575725,
    "establishedYear": 2006,
    "operatorType": "財團法人"
  },
  {
    "id": "F0090",
    "name": "恩典安寧照護中心",
    "type": "安寧病房",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區和平路96號之2",
    "phone": "(03) 2404-8365",
    "website": null,
    "beds": {
      "total": 40,
      "available": 7,
      "occupied": 33,
      "maleAvailable": 6,
      "femaleAvailable": 1,
      "lastUpdated": "2026-05-17T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 37000,
        "deposit": 37000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "復健治療",
      "語言治療",
      "傷口照護",
      "藥事服務",
      "呼吸照護",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.768376,
    "longitude": 121.80092,
    "establishedYear": 2016,
    "operatorType": "財團法人"
  },
  {
    "id": "F0091",
    "name": "恩典銀髮日照中心",
    "type": "日照中心",
    "city": "南投縣",
    "district": "市區",
    "address": "南投縣市區中華路262號之3",
    "phone": "(049) 3379-5873",
    "website": null,
    "beds": {
      "total": 30,
      "available": 9,
      "occupied": 21,
      "maleAvailable": 5,
      "femaleAvailable": 4,
      "lastUpdated": "2026-05-12T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 52000,
        "deposit": 52000
      },
      {
        "label": "雙人房",
        "monthly": 60000,
        "deposit": 60000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2025,
    "services": [
      "洗腎服務",
      "物理治療",
      "管路照護",
      "失智照護",
      "心理諮商",
      "傷口照護",
      "呼吸照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.849712,
    "longitude": 120.664729,
    "establishedYear": 2016,
    "operatorType": "財團法人"
  },
  {
    "id": "F0092",
    "name": "耕莘社區長照中心",
    "type": "長照中心",
    "city": "高雄市",
    "district": "大寮區",
    "address": "高雄市大寮區信義路213號之3",
    "phone": "(07) 2735-1157",
    "website": null,
    "beds": {
      "total": 40,
      "available": 22,
      "occupied": 18,
      "maleAvailable": 10,
      "femaleAvailable": 12,
      "lastUpdated": "2026-05-11T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 52000,
        "deposit": 52000
      },
      {
        "label": "雙人房",
        "monthly": 60000,
        "deposit": 60000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "心理諮商",
      "安寧療護",
      "社工服務",
      "語言治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.651491,
    "longitude": 120.286461,
    "establishedYear": 1999,
    "operatorType": "私立"
  },
  {
    "id": "F0093",
    "name": "松鶴日間照顧中心",
    "type": "日照中心",
    "city": "苗栗縣",
    "district": "市區",
    "address": "苗栗縣市區民生路153號",
    "phone": "(037) 3587-9898",
    "website": null,
    "beds": {
      "total": 100,
      "available": 4,
      "occupied": 96,
      "maleAvailable": 4,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-15T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 41000,
        "deposit": 41000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2025,
    "services": [
      "社工服務",
      "藥事服務",
      "復健治療",
      "營養諮詢",
      "心理諮商"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.518967,
    "longitude": 120.810025,
    "establishedYear": 1992,
    "operatorType": "公立"
  },
  {
    "id": "F0094",
    "name": "萬芳安寧緩和病房",
    "type": "安寧病房",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區光復路137號",
    "phone": "(03) 3666-4390",
    "website": null,
    "beds": {
      "total": 150,
      "available": 20,
      "occupied": 130,
      "maleAvailable": 13,
      "femaleAvailable": 7,
      "lastUpdated": "2026-05-16T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 30000,
        "deposit": 30000
      },
      {
        "label": "雙人房",
        "monthly": 38000,
        "deposit": 38000
      },
      {
        "label": "單人房",
        "monthly": 48000,
        "deposit": 48000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2025,
    "services": [
      "失智照護",
      "社工服務",
      "呼吸照護",
      "職能治療",
      "藥事服務",
      "管路照護",
      "心理諮商"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.88064,
    "longitude": 120.937822,
    "establishedYear": 1993,
    "operatorType": "財團法人"
  },
  {
    "id": "F0095",
    "name": "亞東社區長照中心",
    "type": "長照中心",
    "city": "臺南市",
    "district": "歸仁區",
    "address": "臺南市歸仁區中山路445號",
    "phone": "(06) 2848-7146",
    "website": "https://亞東社區長照中心.com.tw",
    "beds": {
      "total": 49,
      "available": 8,
      "occupied": 41,
      "maleAvailable": 7,
      "femaleAvailable": 1,
      "lastUpdated": "2026-05-17T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 29000,
        "deposit": 29000
      },
      {
        "label": "雙人房",
        "monthly": 37000,
        "deposit": 37000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "藥事服務",
      "心理諮商",
      "洗腎服務",
      "安寧療護",
      "社工服務",
      "呼吸照護",
      "失智照護",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.071041,
    "longitude": 120.199366,
    "establishedYear": 2010,
    "operatorType": "私立"
  },
  {
    "id": "F0096",
    "name": "慈暉悠然安養中心",
    "type": "安養中心",
    "city": "屏東縣",
    "district": "市區",
    "address": "屏東縣市區中正路476號之1",
    "phone": "(08) 3614-6631",
    "website": null,
    "beds": {
      "total": 50,
      "available": 13,
      "occupied": 37,
      "maleAvailable": 8,
      "femaleAvailable": 5,
      "lastUpdated": "2026-05-10T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 43000,
        "deposit": 43000
      },
      {
        "label": "單人房",
        "monthly": 61000,
        "deposit": 61000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2024,
    "services": [
      "復健治療",
      "洗腎服務",
      "物理治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.720422,
    "longitude": 120.481533,
    "establishedYear": 1993,
    "operatorType": "公立"
  },
  {
    "id": "F0097",
    "name": "成大安寧緩和病房",
    "type": "安寧病房",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區光復路116號之3",
    "phone": "(04) 3328-3711",
    "website": null,
    "beds": {
      "total": 30,
      "available": 0,
      "occupied": 30,
      "maleAvailable": 0,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-15T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 33000,
        "deposit": 33000
      }
    ],
    "rating": "優等",
    "ratingYear": 2025,
    "services": [
      "呼吸照護",
      "語言治療",
      "藥事服務",
      "傷口照護",
      "安寧療護",
      "洗腎服務",
      "社工服務",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.034147,
    "longitude": 120.47447,
    "establishedYear": 2015,
    "operatorType": "私立"
  },
  {
    "id": "F0098",
    "name": "恩主公失智照顧專區",
    "type": "失智專區",
    "city": "嘉義市",
    "district": "市區",
    "address": "嘉義市市區中華路471號之3",
    "phone": "(05) 3665-3181",
    "website": "https://恩主公失智照顧專區.com.tw",
    "beds": {
      "total": 30,
      "available": 10,
      "occupied": 20,
      "maleAvailable": 5,
      "femaleAvailable": 5,
      "lastUpdated": "2026-05-17T11:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 53000,
        "deposit": 53000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "管路照護",
      "洗腎服務",
      "社工服務",
      "職能治療",
      "復健治療",
      "心理諮商",
      "營養諮詢",
      "語言治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.515589,
    "longitude": 120.469493,
    "establishedYear": 1993,
    "operatorType": "公立"
  },
  {
    "id": "F0099",
    "name": "市區老人安養中心",
    "type": "安養中心",
    "city": "嘉義市",
    "district": "市區",
    "address": "嘉義市市區民生路254號之3",
    "phone": "(05) 3244-5668",
    "website": null,
    "beds": {
      "total": 49,
      "available": 16,
      "occupied": 33,
      "maleAvailable": 2,
      "femaleAvailable": 14,
      "lastUpdated": "2026-05-17T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 33000,
        "deposit": 33000
      },
      {
        "label": "雙人房",
        "monthly": 41000,
        "deposit": 41000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "復健治療",
      "物理治療",
      "呼吸照護",
      "傷口照護",
      "社工服務",
      "職能治療",
      "藥事服務",
      "失智照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.46268,
    "longitude": 120.472387,
    "establishedYear": 1985,
    "operatorType": "社團法人"
  },
  {
    "id": "F0100",
    "name": "中國長青安養中心",
    "type": "安養中心",
    "city": "南投縣",
    "district": "市區",
    "address": "南投縣市區大同路260號之2",
    "phone": "(049) 3577-2195",
    "website": "https://中國長青安養中心.com.tw",
    "beds": {
      "total": 60,
      "available": 6,
      "occupied": 54,
      "maleAvailable": 5,
      "femaleAvailable": 1,
      "lastUpdated": "2026-05-18T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 30000,
        "deposit": 30000
      },
      {
        "label": "雙人房",
        "monthly": 38000,
        "deposit": 38000
      },
      {
        "label": "單人房",
        "monthly": 48000,
        "deposit": 48000
      }
    ],
    "rating": "優等",
    "ratingYear": 2025,
    "services": [
      "復健治療",
      "呼吸照護",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.837372,
    "longitude": 120.614675,
    "establishedYear": 1990,
    "operatorType": "財團法人"
  },
  {
    "id": "F0101",
    "name": "松鶴護理之家",
    "type": "護理之家",
    "city": "臺南市",
    "district": "新化區",
    "address": "臺南市新化區中山路159號之1",
    "phone": "(06) 3299-2083",
    "website": null,
    "beds": {
      "total": 120,
      "available": 54,
      "occupied": 66,
      "maleAvailable": 51,
      "femaleAvailable": 3,
      "lastUpdated": "2026-05-12T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 30000,
        "deposit": 30000
      },
      {
        "label": "雙人房",
        "monthly": 38000,
        "deposit": 38000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "語言治療",
      "傷口照護",
      "復健治療",
      "藥事服務",
      "洗腎服務",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.937558,
    "longitude": 120.244967,
    "establishedYear": 2007,
    "operatorType": "財團法人"
  },
  {
    "id": "F0102",
    "name": "長青慈暉養護中心",
    "type": "養護中心",
    "city": "苗栗縣",
    "district": "市區",
    "address": "苗栗縣市區光復路346號",
    "phone": "(037) 2538-2262",
    "website": null,
    "beds": {
      "total": 30,
      "available": 20,
      "occupied": 10,
      "maleAvailable": 10,
      "femaleAvailable": 10,
      "lastUpdated": "2026-05-18T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 51000,
        "deposit": 51000
      },
      {
        "label": "雙人房",
        "monthly": 59000,
        "deposit": 59000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "失智照護",
      "復健治療",
      "營養諮詢",
      "職能治療",
      "管路照護",
      "心理諮商",
      "物理治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.524819,
    "longitude": 120.758465,
    "establishedYear": 1985,
    "operatorType": "私立"
  },
  {
    "id": "F0103",
    "name": "成大老人安養中心",
    "type": "安養中心",
    "city": "花蓮縣",
    "district": "市區",
    "address": "花蓮縣市區中正路258號",
    "phone": "(03) 3342-7870",
    "website": null,
    "beds": {
      "total": 40,
      "available": 0,
      "occupied": 40,
      "maleAvailable": 0,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-18T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 43000,
        "deposit": 43000
      },
      {
        "label": "雙人房",
        "monthly": 51000,
        "deposit": 51000
      },
      {
        "label": "單人房",
        "monthly": 61000,
        "deposit": 61000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "安寧療護",
      "語言治療",
      "失智照護",
      "呼吸照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.03916,
    "longitude": 121.612446,
    "establishedYear": 2014,
    "operatorType": "公立"
  },
  {
    "id": "F0104",
    "name": "慈濟松柏護理之家",
    "type": "護理之家",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區和平路178號",
    "phone": "(04) 3275-4974",
    "website": "https://慈濟松柏護理之家.com.tw",
    "beds": {
      "total": 20,
      "available": 9,
      "occupied": 11,
      "maleAvailable": 3,
      "femaleAvailable": 6,
      "lastUpdated": "2026-05-10T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 34000,
        "deposit": 34000
      },
      {
        "label": "雙人房",
        "monthly": 42000,
        "deposit": 42000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "營養諮詢",
      "藥事服務",
      "傷口照護",
      "社工服務",
      "語言治療",
      "管路照護",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.149184,
    "longitude": 120.465826,
    "establishedYear": 2018,
    "operatorType": "社團法人"
  },
  {
    "id": "F0105",
    "name": "長青博愛護理之家",
    "type": "護理之家",
    "city": "屏東縣",
    "district": "市區",
    "address": "屏東縣市區中華路122號之2",
    "phone": "(08) 3435-7102",
    "website": null,
    "beds": {
      "total": 50,
      "available": 29,
      "occupied": 21,
      "maleAvailable": 1,
      "femaleAvailable": 28,
      "lastUpdated": "2026-05-15T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 32000,
        "deposit": 32000
      },
      {
        "label": "雙人房",
        "monthly": 40000,
        "deposit": 40000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "洗腎服務",
      "職能治療",
      "心理諮商",
      "社工服務",
      "管路照護",
      "安寧療護",
      "語言治療",
      "呼吸照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.685851,
    "longitude": 120.477597,
    "establishedYear": 2002,
    "operatorType": "私立"
  },
  {
    "id": "F0106",
    "name": "雙和安寧照護中心",
    "type": "安寧病房",
    "city": "基隆市",
    "district": "市區",
    "address": "基隆市市區建國路424號",
    "phone": "(02) 3097-6870",
    "website": null,
    "beds": {
      "total": 40,
      "available": 24,
      "occupied": 16,
      "maleAvailable": 5,
      "femaleAvailable": 19,
      "lastUpdated": "2026-05-15T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 39000,
        "deposit": 39000
      },
      {
        "label": "雙人房",
        "monthly": 47000,
        "deposit": 47000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2024,
    "services": [
      "營養諮詢",
      "呼吸照護",
      "心理諮商",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.184397,
    "longitude": 121.676467,
    "establishedYear": 2007,
    "operatorType": "私立"
  },
  {
    "id": "F0107",
    "name": "輔大老人養護中心",
    "type": "養護中心",
    "city": "新北市",
    "district": "汐止區",
    "address": "新北市汐止區復興路352號",
    "phone": "(02) 2946-2669",
    "website": "https://輔大老人養護中心.com.tw",
    "beds": {
      "total": 20,
      "available": 8,
      "occupied": 12,
      "maleAvailable": 7,
      "femaleAvailable": 1,
      "lastUpdated": "2026-05-14T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 43000,
        "deposit": 43000
      },
      {
        "label": "雙人房",
        "monthly": 51000,
        "deposit": 51000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2024,
    "services": [
      "洗腎服務",
      "復健治療",
      "藥事服務",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.957914,
    "longitude": 121.509788,
    "establishedYear": 1997,
    "operatorType": "社團法人"
  },
  {
    "id": "F0108",
    "name": "中山康寧護理之家",
    "type": "護理之家",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區中華路18號之1",
    "phone": "(03) 2887-7471",
    "website": "https://中山康寧護理之家.com.tw",
    "beds": {
      "total": 60,
      "available": 33,
      "occupied": 27,
      "maleAvailable": 2,
      "femaleAvailable": 31,
      "lastUpdated": "2026-05-17T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 40000,
        "deposit": 40000
      },
      {
        "label": "單人房",
        "monthly": 58000,
        "deposit": 58000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "物理治療",
      "安寧療護",
      "管路照護",
      "失智照護",
      "傷口照護",
      "語言治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.719997,
    "longitude": 121.744362,
    "establishedYear": 2002,
    "operatorType": "私立"
  },
  {
    "id": "F0109",
    "name": "中山忘憂園失智照護中心",
    "type": "失智專區",
    "city": "屏東縣",
    "district": "市區",
    "address": "屏東縣市區建國路30號之3",
    "phone": "(08) 3600-8940",
    "website": "https://中山忘憂園失智照護中心.com.tw",
    "beds": {
      "total": 49,
      "available": 32,
      "occupied": 17,
      "maleAvailable": 24,
      "femaleAvailable": 8,
      "lastUpdated": "2026-05-19T11:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 50000,
        "deposit": 50000
      },
      {
        "label": "雙人房",
        "monthly": 58000,
        "deposit": 58000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "社工服務",
      "失智照護",
      "安寧療護",
      "呼吸照護",
      "管路照護",
      "復健治療",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.690539,
    "longitude": 120.412689,
    "establishedYear": 2000,
    "operatorType": "私立"
  },
  {
    "id": "F0110",
    "name": "中國社區日照中心",
    "type": "日照中心",
    "city": "新北市",
    "district": "蘆洲區",
    "address": "新北市蘆洲區光復路486號之1",
    "phone": "(02) 3428-6878",
    "website": "https://中國社區日照中心.com.tw",
    "beds": {
      "total": 60,
      "available": 29,
      "occupied": 31,
      "maleAvailable": 5,
      "femaleAvailable": 24,
      "lastUpdated": "2026-05-17T16:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 32000,
        "deposit": 32000
      },
      {
        "label": "雙人房",
        "monthly": 40000,
        "deposit": 40000
      },
      {
        "label": "單人房",
        "monthly": 50000,
        "deposit": 50000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2025,
    "services": [
      "語言治療",
      "心理諮商",
      "失智照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 25.088609,
    "longitude": 121.468177,
    "establishedYear": 1987,
    "operatorType": "私立"
  },
  {
    "id": "F0111",
    "name": "馬偕松柏護理之家",
    "type": "護理之家",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區中正路192號之3",
    "phone": "(03) 2363-6301",
    "website": "https://馬偕松柏護理之家.com.tw",
    "beds": {
      "total": 20,
      "available": 9,
      "occupied": 11,
      "maleAvailable": 9,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-15T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 31000,
        "deposit": 31000
      },
      {
        "label": "雙人房",
        "monthly": 39000,
        "deposit": 39000
      }
    ],
    "rating": "優等",
    "ratingYear": 2025,
    "services": [
      "職能治療",
      "語言治療",
      "管路照護",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.859437,
    "longitude": 121.028707,
    "establishedYear": 1995,
    "operatorType": "財團法人"
  },
  {
    "id": "F0112",
    "name": "市區失智照顧專區",
    "type": "失智專區",
    "city": "屏東縣",
    "district": "市區",
    "address": "屏東縣市區光復路17號之1",
    "phone": "(08) 2774-6026",
    "website": "https://市區失智照顧專區.com.tw",
    "beds": {
      "total": 120,
      "available": 2,
      "occupied": 118,
      "maleAvailable": 1,
      "femaleAvailable": 1,
      "lastUpdated": "2026-05-19T11:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 32000,
        "deposit": 32000
      },
      {
        "label": "雙人房",
        "monthly": 40000,
        "deposit": 40000
      },
      {
        "label": "單人房",
        "monthly": 50000,
        "deposit": 50000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "管路照護",
      "心理諮商",
      "語言治療",
      "復健治療",
      "職能治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.657656,
    "longitude": 120.567085,
    "establishedYear": 1994,
    "operatorType": "私立"
  },
  {
    "id": "F0113",
    "name": "八德區老人養護中心",
    "type": "養護中心",
    "city": "桃園市",
    "district": "八德區",
    "address": "桃園市八德區中山路25號之3",
    "phone": "(03) 2687-8317",
    "website": null,
    "beds": {
      "total": 200,
      "available": 112,
      "occupied": 88,
      "maleAvailable": 105,
      "femaleAvailable": 7,
      "lastUpdated": "2026-05-16T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 48000,
        "deposit": 48000
      },
      {
        "label": "雙人房",
        "monthly": 56000,
        "deposit": 56000
      },
      {
        "label": "單人房",
        "monthly": 66000,
        "deposit": 66000
      }
    ],
    "rating": "優等",
    "ratingYear": 2025,
    "services": [
      "傷口照護",
      "語言治療",
      "洗腎服務",
      "失智照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.955065,
    "longitude": 121.234286,
    "establishedYear": 2009,
    "operatorType": "私立"
  },
  {
    "id": "F0114",
    "name": "耕莘安寧照護中心",
    "type": "安寧病房",
    "city": "嘉義市",
    "district": "市區",
    "address": "嘉義市市區中正路174號之3",
    "phone": "(05) 2652-5278",
    "website": "https://耕莘安寧照護中心.com.tw",
    "beds": {
      "total": 40,
      "available": 13,
      "occupied": 27,
      "maleAvailable": 1,
      "femaleAvailable": 12,
      "lastUpdated": "2026-05-16T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 51000,
        "deposit": 51000
      },
      {
        "label": "雙人房",
        "monthly": 59000,
        "deposit": 59000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2025,
    "services": [
      "失智照護",
      "管路照護",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.425745,
    "longitude": 120.381,
    "establishedYear": 1991,
    "operatorType": "私立"
  },
  {
    "id": "F0115",
    "name": "慈濟忘憂園失智照護中心",
    "type": "失智專區",
    "city": "基隆市",
    "district": "市區",
    "address": "基隆市市區民生路88號之2",
    "phone": "(02) 2804-9043",
    "website": "https://慈濟忘憂園失智照護中心.com.tw",
    "beds": {
      "total": 120,
      "available": 47,
      "occupied": 73,
      "maleAvailable": 42,
      "femaleAvailable": 5,
      "lastUpdated": "2026-05-17T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 34000,
        "deposit": 34000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "復健治療",
      "安寧療護",
      "洗腎服務",
      "呼吸照護",
      "職能治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.124853,
    "longitude": 121.677518,
    "establishedYear": 2015,
    "operatorType": "財團法人"
  },
  {
    "id": "F0116",
    "name": "慈濟憶家園失智專區",
    "type": "失智專區",
    "city": "苗栗縣",
    "district": "市區",
    "address": "苗栗縣市區和平路212號之1",
    "phone": "(037) 2900-8619",
    "website": "https://慈濟憶家園失智專區.com.tw",
    "beds": {
      "total": 40,
      "available": 16,
      "occupied": 24,
      "maleAvailable": 12,
      "femaleAvailable": 4,
      "lastUpdated": "2026-05-16T16:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 37000,
        "deposit": 37000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "職能治療",
      "復健治療",
      "管路照護",
      "物理治療",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.497713,
    "longitude": 120.797007,
    "establishedYear": 2015,
    "operatorType": "財團法人"
  },
  {
    "id": "F0117",
    "name": "仁愛松鶴養護中心",
    "type": "養護中心",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區大同路104號之1",
    "phone": "(03) 3270-3415",
    "website": "https://仁愛松鶴養護中心.com.tw",
    "beds": {
      "total": 20,
      "available": 6,
      "occupied": 14,
      "maleAvailable": 4,
      "femaleAvailable": 2,
      "lastUpdated": "2026-05-14T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 54000,
        "deposit": 54000
      },
      {
        "label": "雙人房",
        "monthly": 62000,
        "deposit": 62000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "管路照護",
      "心理諮商",
      "傷口照護",
      "語言治療",
      "藥事服務",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.79174,
    "longitude": 121.049125,
    "establishedYear": 2020,
    "operatorType": "私立"
  },
  {
    "id": "F0118",
    "name": "聖母日間照顧中心",
    "type": "日照中心",
    "city": "南投縣",
    "district": "市區",
    "address": "南投縣市區光復路243號",
    "phone": "(049) 2303-2641",
    "website": null,
    "beds": {
      "total": 150,
      "available": 25,
      "occupied": 125,
      "maleAvailable": 16,
      "femaleAvailable": 9,
      "lastUpdated": "2026-05-16T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 50000,
        "deposit": 50000
      },
      {
        "label": "雙人房",
        "monthly": 58000,
        "deposit": 58000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2025,
    "services": [
      "藥事服務",
      "洗腎服務",
      "呼吸照護",
      "社工服務",
      "失智照護",
      "安寧療護",
      "語言治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.892287,
    "longitude": 120.682694,
    "establishedYear": 2006,
    "operatorType": "財團法人"
  },
  {
    "id": "F0119",
    "name": "中山慈暉養護中心",
    "type": "養護中心",
    "city": "新北市",
    "district": "泰山區",
    "address": "新北市泰山區大同路310號",
    "phone": "(02) 3425-2609",
    "website": null,
    "beds": {
      "total": 20,
      "available": 9,
      "occupied": 11,
      "maleAvailable": 4,
      "femaleAvailable": 5,
      "lastUpdated": "2026-05-13T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 35000,
        "deposit": 35000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2025,
    "services": [
      "管路照護",
      "呼吸照護",
      "語言治療",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.060845,
    "longitude": 121.429339,
    "establishedYear": 2008,
    "operatorType": "公立"
  },
  {
    "id": "F0120",
    "name": "松鶴博愛護理之家",
    "type": "護理之家",
    "city": "臺東縣",
    "district": "市區",
    "address": "臺東縣市區民生路141號之2",
    "phone": "(089) 2059-3846",
    "website": "https://松鶴博愛護理之家.com.tw",
    "beds": {
      "total": 120,
      "available": 29,
      "occupied": 91,
      "maleAvailable": 4,
      "femaleAvailable": 25,
      "lastUpdated": "2026-05-18T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 50000,
        "deposit": 50000
      },
      {
        "label": "雙人房",
        "monthly": 58000,
        "deposit": 58000
      },
      {
        "label": "單人房",
        "monthly": 68000,
        "deposit": 68000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "心理諮商",
      "復健治療",
      "傷口照護",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.748032,
    "longitude": 121.211885,
    "establishedYear": 2000,
    "operatorType": "私立"
  },
  {
    "id": "F0121",
    "name": "耕莘安寧緩和病房",
    "type": "安寧病房",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區民生路138號之3",
    "phone": "(03) 2185-5670",
    "website": "https://耕莘安寧緩和病房.com.tw",
    "beds": {
      "total": 60,
      "available": 30,
      "occupied": 30,
      "maleAvailable": 26,
      "femaleAvailable": 4,
      "lastUpdated": "2026-05-10T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 54000,
        "deposit": 54000
      },
      {
        "label": "單人房",
        "monthly": 72000,
        "deposit": 72000
      }
    ],
    "rating": "優等",
    "ratingYear": 2024,
    "services": [
      "管路照護",
      "職能治療",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.813138,
    "longitude": 121.776581,
    "establishedYear": 1985,
    "operatorType": "私立"
  },
  {
    "id": "F0122",
    "name": "中山長青安養中心",
    "type": "安養中心",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區建國路153號",
    "phone": "(04) 3688-7506",
    "website": null,
    "beds": {
      "total": 60,
      "available": 11,
      "occupied": 49,
      "maleAvailable": 4,
      "femaleAvailable": 7,
      "lastUpdated": "2026-05-15T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 32000,
        "deposit": 32000
      },
      {
        "label": "雙人房",
        "monthly": 40000,
        "deposit": 40000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "社工服務",
      "物理治療",
      "失智照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.089833,
    "longitude": 120.557004,
    "establishedYear": 2001,
    "operatorType": "財團法人"
  },
  {
    "id": "F0123",
    "name": "馬偕長照服務中心",
    "type": "長照中心",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區民生路176號之1",
    "phone": "(04) 3477-1417",
    "website": "https://馬偕長照服務中心.com.tw",
    "beds": {
      "total": 20,
      "available": 2,
      "occupied": 18,
      "maleAvailable": 2,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-17T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 38000,
        "deposit": 38000
      },
      {
        "label": "雙人房",
        "monthly": 46000,
        "deposit": 46000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "呼吸照護",
      "安寧療護",
      "藥事服務",
      "語言治療",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.093284,
    "longitude": 120.621161,
    "establishedYear": 2020,
    "operatorType": "私立"
  },
  {
    "id": "F0124",
    "name": "萬芳社區長照中心",
    "type": "長照中心",
    "city": "臺中市",
    "district": "大雅區",
    "address": "臺中市大雅區中正路241號",
    "phone": "(04) 2727-4659",
    "website": "https://萬芳社區長照中心.com.tw",
    "beds": {
      "total": 120,
      "available": 57,
      "occupied": 63,
      "maleAvailable": 43,
      "femaleAvailable": 14,
      "lastUpdated": "2026-05-19T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 54000,
        "deposit": 54000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "安寧療護",
      "藥事服務",
      "失智照護",
      "語言治療",
      "呼吸照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.161691,
    "longitude": 120.668202,
    "establishedYear": 1997,
    "operatorType": "財團法人"
  },
  {
    "id": "F0125",
    "name": "博愛老人安養中心",
    "type": "安養中心",
    "city": "嘉義市",
    "district": "市區",
    "address": "嘉義市市區民生路390號之1",
    "phone": "(05) 2937-3346",
    "website": "https://博愛老人安養中心.com.tw",
    "beds": {
      "total": 40,
      "available": 21,
      "occupied": 19,
      "maleAvailable": 10,
      "femaleAvailable": 11,
      "lastUpdated": "2026-05-12T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 38000,
        "deposit": 38000
      },
      {
        "label": "雙人房",
        "monthly": 46000,
        "deposit": 46000
      },
      {
        "label": "單人房",
        "monthly": 56000,
        "deposit": 56000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "管路照護",
      "藥事服務",
      "洗腎服務",
      "營養諮詢",
      "失智照護",
      "心理諮商",
      "職能治療",
      "物理治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.409282,
    "longitude": 120.441329,
    "establishedYear": 2012,
    "operatorType": "財團法人"
  },
  {
    "id": "F0126",
    "name": "恩典安養中心",
    "type": "安養中心",
    "city": "嘉義市",
    "district": "市區",
    "address": "嘉義市市區建國路86號",
    "phone": "(05) 2659-9700",
    "website": "https://恩典安養中心.com.tw",
    "beds": {
      "total": 20,
      "available": 6,
      "occupied": 14,
      "maleAvailable": 1,
      "femaleAvailable": 5,
      "lastUpdated": "2026-05-14T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 48000,
        "deposit": 48000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "復健治療",
      "物理治療",
      "語言治療",
      "傷口照護",
      "藥事服務",
      "失智照護",
      "呼吸照護",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.416433,
    "longitude": 120.449534,
    "establishedYear": 2018,
    "operatorType": "私立"
  },
  {
    "id": "F0127",
    "name": "臺南老人安養中心",
    "type": "安養中心",
    "city": "臺南市",
    "district": "關廟區",
    "address": "臺南市關廟區光復路25號",
    "phone": "(06) 2268-4460",
    "website": "https://臺南老人安養中心.com.tw",
    "beds": {
      "total": 40,
      "available": 2,
      "occupied": 38,
      "maleAvailable": 1,
      "femaleAvailable": 1,
      "lastUpdated": "2026-05-10T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 25000,
        "deposit": 25000
      },
      {
        "label": "單人房",
        "monthly": 43000,
        "deposit": 43000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "社工服務",
      "管路照護",
      "洗腎服務",
      "失智照護",
      "復健治療",
      "安寧療護",
      "呼吸照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.0424,
    "longitude": 120.246702,
    "establishedYear": 2009,
    "operatorType": "私立"
  },
  {
    "id": "F0128",
    "name": "長青失智照顧專區",
    "type": "失智專區",
    "city": "苗栗縣",
    "district": "市區",
    "address": "苗栗縣市區中正路255號之1",
    "phone": "(037) 2552-3247",
    "website": "https://長青失智照顧專區.com.tw",
    "beds": {
      "total": 200,
      "available": 132,
      "occupied": 68,
      "maleAvailable": 77,
      "femaleAvailable": 55,
      "lastUpdated": "2026-05-14T16:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 38000,
        "deposit": 38000
      },
      {
        "label": "雙人房",
        "monthly": 46000,
        "deposit": 46000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "社工服務",
      "語言治療",
      "職能治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.502838,
    "longitude": 120.760242,
    "establishedYear": 2011,
    "operatorType": "私立"
  },
  {
    "id": "F0129",
    "name": "成大老人安養中心",
    "type": "安養中心",
    "city": "新北市",
    "district": "深坑區",
    "address": "新北市深坑區建國路330號之1",
    "phone": "(02) 2226-9095",
    "website": null,
    "beds": {
      "total": 100,
      "available": 25,
      "occupied": 75,
      "maleAvailable": 7,
      "femaleAvailable": 18,
      "lastUpdated": "2026-05-14T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 25000,
        "deposit": 25000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "藥事服務",
      "社工服務",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 25.05277,
    "longitude": 121.394206,
    "establishedYear": 1996,
    "operatorType": "公立"
  },
  {
    "id": "F0130",
    "name": "國泰安寧緩和病房",
    "type": "安寧病房",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區復興路418號之2",
    "phone": "(04) 2019-3267",
    "website": null,
    "beds": {
      "total": 80,
      "available": 7,
      "occupied": 73,
      "maleAvailable": 1,
      "femaleAvailable": 6,
      "lastUpdated": "2026-05-16T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 28000,
        "deposit": 28000
      },
      {
        "label": "雙人房",
        "monthly": 36000,
        "deposit": 36000
      },
      {
        "label": "單人房",
        "monthly": 46000,
        "deposit": 46000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "失智照護",
      "心理諮商",
      "營養諮詢",
      "職能治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.04293,
    "longitude": 120.579291,
    "establishedYear": 2009,
    "operatorType": "財團法人"
  },
  {
    "id": "F0131",
    "name": "中山失智照顧專區",
    "type": "失智專區",
    "city": "花蓮縣",
    "district": "市區",
    "address": "花蓮縣市區大同路226號",
    "phone": "(03) 3209-8908",
    "website": null,
    "beds": {
      "total": 30,
      "available": 16,
      "occupied": 14,
      "maleAvailable": 1,
      "femaleAvailable": 15,
      "lastUpdated": "2026-05-15T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 52000,
        "deposit": 52000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2024,
    "services": [
      "營養諮詢",
      "管路照護",
      "職能治療",
      "安寧療護",
      "失智照護",
      "復健治療",
      "藥事服務",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.054264,
    "longitude": 121.53907,
    "establishedYear": 2006,
    "operatorType": "財團法人"
  },
  {
    "id": "F0132",
    "name": "萬芳失智照顧專區",
    "type": "失智專區",
    "city": "臺中市",
    "district": "后里區",
    "address": "臺中市后里區民生路170號之2",
    "phone": "(04) 3692-1894",
    "website": null,
    "beds": {
      "total": 100,
      "available": 23,
      "occupied": 77,
      "maleAvailable": 21,
      "femaleAvailable": 2,
      "lastUpdated": "2026-05-13T16:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 47000,
        "deposit": 47000
      },
      {
        "label": "雙人房",
        "monthly": 55000,
        "deposit": 55000
      }
    ],
    "rating": "優等",
    "ratingYear": 2025,
    "services": [
      "社工服務",
      "營養諮詢",
      "藥事服務",
      "管路照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.079978,
    "longitude": 120.672664,
    "establishedYear": 2000,
    "operatorType": "私立"
  },
  {
    "id": "F0133",
    "name": "中國松柏護理之家",
    "type": "護理之家",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區復興路187號",
    "phone": "(03) 2826-7755",
    "website": "https://中國松柏護理之家.com.tw",
    "beds": {
      "total": 100,
      "available": 27,
      "occupied": 73,
      "maleAvailable": 3,
      "femaleAvailable": 24,
      "lastUpdated": "2026-05-17T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 41000,
        "deposit": 41000
      },
      {
        "label": "雙人房",
        "monthly": 49000,
        "deposit": 49000
      }
    ],
    "rating": "優等",
    "ratingYear": 2025,
    "services": [
      "復健治療",
      "洗腎服務",
      "職能治療",
      "語言治療",
      "呼吸照護",
      "社工服務",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.780735,
    "longitude": 121.745993,
    "establishedYear": 2008,
    "operatorType": "財團法人"
  },
  {
    "id": "F0134",
    "name": "國泰安寧照護中心",
    "type": "安寧病房",
    "city": "臺中市",
    "district": "西區",
    "address": "臺中市西區大同路55號之2",
    "phone": "(04) 3121-9552",
    "website": "https://國泰安寧照護中心.com.tw",
    "beds": {
      "total": 20,
      "available": 9,
      "occupied": 11,
      "maleAvailable": 5,
      "femaleAvailable": 4,
      "lastUpdated": "2026-05-13T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 52000,
        "deposit": 52000
      },
      {
        "label": "雙人房",
        "monthly": 60000,
        "deposit": 60000
      },
      {
        "label": "單人房",
        "monthly": 70000,
        "deposit": 70000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "復健治療",
      "管路照護",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.090472,
    "longitude": 120.708697,
    "establishedYear": 1997,
    "operatorType": "財團法人"
  },
  {
    "id": "F0135",
    "name": "博愛安養中心",
    "type": "安養中心",
    "city": "臺中市",
    "district": "大安區",
    "address": "臺中市大安區大同路337號之2",
    "phone": "(04) 3086-1795",
    "website": "https://博愛安養中心.com.tw",
    "beds": {
      "total": 100,
      "available": 9,
      "occupied": 91,
      "maleAvailable": 9,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-16T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 41000,
        "deposit": 41000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "心理諮商",
      "職能治療",
      "營養諮詢",
      "社工服務",
      "管路照護",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.184879,
    "longitude": 120.614541,
    "establishedYear": 2006,
    "operatorType": "社團法人"
  },
  {
    "id": "F0136",
    "name": "主恩社區長照中心",
    "type": "長照中心",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區信義路299號之3",
    "phone": "(03) 3463-5760",
    "website": "https://主恩社區長照中心.com.tw",
    "beds": {
      "total": 120,
      "available": 40,
      "occupied": 80,
      "maleAvailable": 35,
      "femaleAvailable": 5,
      "lastUpdated": "2026-05-18T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 45000,
        "deposit": 45000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "管路照護",
      "語言治療",
      "物理治療",
      "心理諮商",
      "社工服務",
      "職能治療",
      "失智照護",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.694465,
    "longitude": 121.729358,
    "establishedYear": 2018,
    "operatorType": "私立"
  },
  {
    "id": "F0137",
    "name": "國泰護理之家",
    "type": "護理之家",
    "city": "嘉義市",
    "district": "市區",
    "address": "嘉義市市區民生路262號之2",
    "phone": "(05) 2127-5835",
    "website": "https://國泰護理之家.com.tw",
    "beds": {
      "total": 49,
      "available": 16,
      "occupied": 33,
      "maleAvailable": 5,
      "femaleAvailable": 11,
      "lastUpdated": "2026-05-10T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 34000,
        "deposit": 34000
      },
      {
        "label": "雙人房",
        "monthly": 42000,
        "deposit": 42000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "復健治療",
      "失智照護",
      "營養諮詢",
      "洗腎服務",
      "職能治療",
      "社工服務",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.518786,
    "longitude": 120.458803,
    "establishedYear": 2005,
    "operatorType": "社團法人"
  },
  {
    "id": "F0138",
    "name": "慈暉失智照顧專區",
    "type": "失智專區",
    "city": "新北市",
    "district": "板橋區",
    "address": "新北市板橋區中華路377號",
    "phone": "(02) 3453-7025",
    "website": null,
    "beds": {
      "total": 150,
      "available": 1,
      "occupied": 149,
      "maleAvailable": 1,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-16T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 52000,
        "deposit": 52000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "語言治療",
      "職能治療",
      "傷口照護",
      "心理諮商",
      "呼吸照護",
      "營養諮詢",
      "管路照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 25.094353,
    "longitude": 121.389915,
    "establishedYear": 2022,
    "operatorType": "公立"
  },
  {
    "id": "F0139",
    "name": "亞東老人安養中心",
    "type": "安養中心",
    "city": "臺北市",
    "district": "萬華區",
    "address": "臺北市萬華區中華路213號之3",
    "phone": "(02) 3260-5934",
    "website": null,
    "beds": {
      "total": 20,
      "available": 12,
      "occupied": 8,
      "maleAvailable": 5,
      "femaleAvailable": 7,
      "lastUpdated": "2026-05-13T11:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 44000,
        "deposit": 44000
      },
      {
        "label": "單人房",
        "monthly": 62000,
        "deposit": 62000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "社工服務",
      "失智照護",
      "洗腎服務",
      "藥事服務",
      "心理諮商",
      "傷口照護",
      "管路照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 25.036297,
    "longitude": 121.610801,
    "establishedYear": 2003,
    "operatorType": "私立"
  },
  {
    "id": "F0140",
    "name": "輔大銀髮日照中心",
    "type": "日照中心",
    "city": "臺東縣",
    "district": "市區",
    "address": "臺東縣市區復興路264號之3",
    "phone": "(089) 3256-4994",
    "website": null,
    "beds": {
      "total": 20,
      "available": 13,
      "occupied": 7,
      "maleAvailable": 10,
      "femaleAvailable": 3,
      "lastUpdated": "2026-05-14T11:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 36000,
        "deposit": 36000
      },
      {
        "label": "雙人房",
        "monthly": 44000,
        "deposit": 44000
      },
      {
        "label": "單人房",
        "monthly": 54000,
        "deposit": 54000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2025,
    "services": [
      "失智照護",
      "安寧療護",
      "洗腎服務",
      "藥事服務",
      "呼吸照護",
      "社工服務",
      "職能治療",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.820814,
    "longitude": 121.196537,
    "establishedYear": 1991,
    "operatorType": "私立"
  },
  {
    "id": "F0141",
    "name": "悠然博愛護理之家",
    "type": "護理之家",
    "city": "臺北市",
    "district": "南港區",
    "address": "臺北市南港區中山路45號",
    "phone": "(02) 3439-8130",
    "website": null,
    "beds": {
      "total": 200,
      "available": 80,
      "occupied": 120,
      "maleAvailable": 54,
      "femaleAvailable": 26,
      "lastUpdated": "2026-05-14T16:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 52000,
        "deposit": 52000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "語言治療",
      "物理治療",
      "管路照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.9568,
    "longitude": 121.599699,
    "establishedYear": 1999,
    "operatorType": "社團法人"
  },
  {
    "id": "F0142",
    "name": "奇美長青安養中心",
    "type": "安養中心",
    "city": "屏東縣",
    "district": "市區",
    "address": "屏東縣市區中正路145號之3",
    "phone": "(08) 3313-2036",
    "website": null,
    "beds": {
      "total": 80,
      "available": 34,
      "occupied": 46,
      "maleAvailable": 1,
      "femaleAvailable": 33,
      "lastUpdated": "2026-05-10T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 37000,
        "deposit": 37000
      },
      {
        "label": "雙人房",
        "monthly": 45000,
        "deposit": 45000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "復健治療",
      "語言治療",
      "洗腎服務",
      "失智照護",
      "社工服務",
      "藥事服務",
      "呼吸照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.720903,
    "longitude": 120.456216,
    "establishedYear": 1993,
    "operatorType": "財團法人"
  },
  {
    "id": "F0143",
    "name": "國泰慈暉養護中心",
    "type": "養護中心",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區民生路212號之1",
    "phone": "(04) 3172-7456",
    "website": null,
    "beds": {
      "total": 20,
      "available": 6,
      "occupied": 14,
      "maleAvailable": 6,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-13T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 43000,
        "deposit": 43000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "呼吸照護",
      "傷口照護",
      "語言治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.118629,
    "longitude": 120.57815,
    "establishedYear": 1996,
    "operatorType": "財團法人"
  },
  {
    "id": "F0144",
    "name": "奇美安養中心",
    "type": "安養中心",
    "city": "新北市",
    "district": "深坑區",
    "address": "新北市深坑區建國路356號之1",
    "phone": "(02) 3948-6420",
    "website": "https://奇美安養中心.com.tw",
    "beds": {
      "total": 50,
      "available": 30,
      "occupied": 20,
      "maleAvailable": 8,
      "femaleAvailable": 22,
      "lastUpdated": "2026-05-15T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 28000,
        "deposit": 28000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "物理治療",
      "傷口照護",
      "洗腎服務",
      "呼吸照護",
      "職能治療",
      "語言治療",
      "藥事服務",
      "管路照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 25.014738,
    "longitude": 121.430535,
    "establishedYear": 2005,
    "operatorType": "私立"
  },
  {
    "id": "F0145",
    "name": "輔大慈暉養護中心",
    "type": "養護中心",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區中華路457號之1",
    "phone": "(03) 2734-6004",
    "website": null,
    "beds": {
      "total": 40,
      "available": 6,
      "occupied": 34,
      "maleAvailable": 5,
      "femaleAvailable": 1,
      "lastUpdated": "2026-05-11T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 35000,
        "deposit": 35000
      },
      {
        "label": "雙人房",
        "monthly": 43000,
        "deposit": 43000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "管路照護",
      "物理治療",
      "職能治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.737116,
    "longitude": 120.935899,
    "establishedYear": 1986,
    "operatorType": "公立"
  },
  {
    "id": "F0146",
    "name": "慈濟慈恩護理之家",
    "type": "護理之家",
    "city": "嘉義市",
    "district": "市區",
    "address": "嘉義市市區光復路351號之1",
    "phone": "(05) 2457-5767",
    "website": "https://慈濟慈恩護理之家.com.tw",
    "beds": {
      "total": 120,
      "available": 11,
      "occupied": 109,
      "maleAvailable": 7,
      "femaleAvailable": 4,
      "lastUpdated": "2026-05-12T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 46000,
        "deposit": 46000
      },
      {
        "label": "雙人房",
        "monthly": 54000,
        "deposit": 54000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "社工服務",
      "洗腎服務",
      "安寧療護",
      "失智照護",
      "心理諮商",
      "復健治療",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.535677,
    "longitude": 120.498046,
    "establishedYear": 2021,
    "operatorType": "財團法人"
  },
  {
    "id": "F0147",
    "name": "博愛老人養護中心",
    "type": "養護中心",
    "city": "臺南市",
    "district": "佳里區",
    "address": "臺南市佳里區和平路325號之2",
    "phone": "(06) 2423-9485",
    "website": "https://博愛老人養護中心.com.tw",
    "beds": {
      "total": 100,
      "available": 38,
      "occupied": 62,
      "maleAvailable": 4,
      "femaleAvailable": 34,
      "lastUpdated": "2026-05-14T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 33000,
        "deposit": 33000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2024,
    "services": [
      "安寧療護",
      "營養諮詢",
      "藥事服務",
      "復健治療",
      "物理治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.075894,
    "longitude": 120.198851,
    "establishedYear": 2009,
    "operatorType": "私立"
  },
  {
    "id": "F0148",
    "name": "恩典老人養護中心",
    "type": "養護中心",
    "city": "桃園市",
    "district": "龜山區",
    "address": "桃園市龜山區中華路96號之1",
    "phone": "(03) 2987-1108",
    "website": null,
    "beds": {
      "total": 120,
      "available": 29,
      "occupied": 91,
      "maleAvailable": 11,
      "femaleAvailable": 18,
      "lastUpdated": "2026-05-11T11:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 51000,
        "deposit": 51000
      },
      {
        "label": "雙人房",
        "monthly": 59000,
        "deposit": 59000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "營養諮詢",
      "管路照護",
      "傷口照護",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.996327,
    "longitude": 121.26193,
    "establishedYear": 1992,
    "operatorType": "財團法人"
  },
  {
    "id": "F0149",
    "name": "門諾長照服務中心",
    "type": "長照中心",
    "city": "花蓮縣",
    "district": "市區",
    "address": "花蓮縣市區和平路491號之3",
    "phone": "(03) 2329-3207",
    "website": "https://門諾長照服務中心.com.tw",
    "beds": {
      "total": 200,
      "available": 29,
      "occupied": 171,
      "maleAvailable": 0,
      "femaleAvailable": 29,
      "lastUpdated": "2026-05-19T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 32000,
        "deposit": 32000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "職能治療",
      "管路照護",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.933615,
    "longitude": 121.668591,
    "establishedYear": 1998,
    "operatorType": "財團法人"
  },
  {
    "id": "F0150",
    "name": "福安綜合長照中心",
    "type": "長照中心",
    "city": "花蓮縣",
    "district": "市區",
    "address": "花蓮縣市區和平路441號之3",
    "phone": "(03) 3046-5333",
    "website": "https://福安綜合長照中心.com.tw",
    "beds": {
      "total": 150,
      "available": 82,
      "occupied": 68,
      "maleAvailable": 74,
      "femaleAvailable": 8,
      "lastUpdated": "2026-05-19T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 51000,
        "deposit": 51000
      },
      {
        "label": "雙人房",
        "monthly": 59000,
        "deposit": 59000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "失智照護",
      "營養諮詢",
      "職能治療",
      "語言治療",
      "洗腎服務",
      "傷口照護",
      "安寧療護",
      "社工服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.928154,
    "longitude": 121.52365,
    "establishedYear": 1987,
    "operatorType": "公立"
  },
  {
    "id": "F0151",
    "name": "耕莘博愛護理之家",
    "type": "護理之家",
    "city": "臺東縣",
    "district": "市區",
    "address": "臺東縣市區大同路180號",
    "phone": "(089) 3389-8069",
    "website": null,
    "beds": {
      "total": 40,
      "available": 8,
      "occupied": 32,
      "maleAvailable": 8,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-14T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 52000,
        "deposit": 52000
      },
      {
        "label": "單人房",
        "monthly": 70000,
        "deposit": 70000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "心理諮商",
      "復健治療",
      "語言治療",
      "社工服務",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.711718,
    "longitude": 121.193368,
    "establishedYear": 1990,
    "operatorType": "私立"
  },
  {
    "id": "F0152",
    "name": "慈恩長期照顧中心",
    "type": "長照中心",
    "city": "屏東縣",
    "district": "市區",
    "address": "屏東縣市區和平路217號之2",
    "phone": "(08) 3408-6175",
    "website": "https://慈恩長期照顧中心.com.tw",
    "beds": {
      "total": 150,
      "available": 34,
      "occupied": 116,
      "maleAvailable": 7,
      "femaleAvailable": 27,
      "lastUpdated": "2026-05-16T11:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 42000,
        "deposit": 42000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "管路照護",
      "安寧療護",
      "物理治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.688659,
    "longitude": 120.449808,
    "establishedYear": 2020,
    "operatorType": "財團法人"
  },
  {
    "id": "F0153",
    "name": "松鶴福安養護中心",
    "type": "養護中心",
    "city": "雲林縣",
    "district": "市區",
    "address": "雲林縣市區光復路357號",
    "phone": "(05) 2470-8317",
    "website": null,
    "beds": {
      "total": 60,
      "available": 15,
      "occupied": 45,
      "maleAvailable": 4,
      "femaleAvailable": 11,
      "lastUpdated": "2026-05-10T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 53000,
        "deposit": 53000
      },
      {
        "label": "雙人房",
        "monthly": 61000,
        "deposit": 61000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "洗腎服務",
      "傷口照護",
      "社工服務",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.752773,
    "longitude": 120.592137,
    "establishedYear": 2012,
    "operatorType": "私立"
  },
  {
    "id": "F0154",
    "name": "仁愛福安養護中心",
    "type": "養護中心",
    "city": "苗栗縣",
    "district": "市區",
    "address": "苗栗縣市區和平路147號之1",
    "phone": "(037) 3457-1941",
    "website": null,
    "beds": {
      "total": 20,
      "available": 3,
      "occupied": 17,
      "maleAvailable": 3,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-19T16:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 38000,
        "deposit": 38000
      },
      {
        "label": "雙人房",
        "monthly": 46000,
        "deposit": 46000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2024,
    "services": [
      "物理治療",
      "營養諮詢",
      "藥事服務",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.516273,
    "longitude": 120.847101,
    "establishedYear": 1987,
    "operatorType": "私立"
  },
  {
    "id": "F0155",
    "name": "慈暉康寧護理之家",
    "type": "護理之家",
    "city": "臺北市",
    "district": "中山區",
    "address": "臺北市中山區信義路477號之3",
    "phone": "(02) 3509-2124",
    "website": "https://慈暉康寧護理之家.com.tw",
    "beds": {
      "total": 80,
      "available": 32,
      "occupied": 48,
      "maleAvailable": 25,
      "femaleAvailable": 7,
      "lastUpdated": "2026-05-14T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 38000,
        "deposit": 38000
      },
      {
        "label": "雙人房",
        "monthly": 46000,
        "deposit": 46000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2025,
    "services": [
      "呼吸照護",
      "語言治療",
      "社工服務",
      "職能治療",
      "失智照護",
      "物理治療",
      "心理諮商"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.989207,
    "longitude": 121.639089,
    "establishedYear": 2020,
    "operatorType": "私立"
  },
  {
    "id": "F0156",
    "name": "恩主公仁愛護理之家",
    "type": "護理之家",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區民生路347號之1",
    "phone": "(04) 2990-4985",
    "website": "https://恩主公仁愛護理之家.com.tw",
    "beds": {
      "total": 50,
      "available": 0,
      "occupied": 50,
      "maleAvailable": 0,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-16T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 47000,
        "deposit": 47000
      },
      {
        "label": "雙人房",
        "monthly": 55000,
        "deposit": 55000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "物理治療",
      "營養諮詢",
      "職能治療",
      "復健治療",
      "藥事服務",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.041251,
    "longitude": 120.523228,
    "establishedYear": 2001,
    "operatorType": "私立"
  },
  {
    "id": "F0157",
    "name": "萬芳憶家園失智專區",
    "type": "失智專區",
    "city": "桃園市",
    "district": "大溪區",
    "address": "桃園市大溪區光復路183號之1",
    "phone": "(03) 3174-5408",
    "website": "https://萬芳憶家園失智專區.com.tw",
    "beds": {
      "total": 30,
      "available": 3,
      "occupied": 27,
      "maleAvailable": 1,
      "femaleAvailable": 2,
      "lastUpdated": "2026-05-11T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 40000,
        "deposit": 40000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "物理治療",
      "傷口照護",
      "營養諮詢",
      "藥事服務",
      "心理諮商",
      "職能治療",
      "呼吸照護",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.950673,
    "longitude": 121.35059,
    "establishedYear": 2019,
    "operatorType": "社團法人"
  },
  {
    "id": "F0158",
    "name": "市區社區日照中心",
    "type": "日照中心",
    "city": "花蓮縣",
    "district": "市區",
    "address": "花蓮縣市區中華路235號",
    "phone": "(03) 2573-7518",
    "website": "https://市區社區日照中心.com.tw",
    "beds": {
      "total": 150,
      "available": 65,
      "occupied": 85,
      "maleAvailable": 62,
      "femaleAvailable": 3,
      "lastUpdated": "2026-05-17T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 30000,
        "deposit": 30000
      },
      {
        "label": "雙人房",
        "monthly": 38000,
        "deposit": 38000
      },
      {
        "label": "單人房",
        "monthly": 48000,
        "deposit": 48000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "管路照護",
      "復健治療",
      "社工服務",
      "安寧療護",
      "營養諮詢",
      "語言治療",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.987396,
    "longitude": 121.583995,
    "establishedYear": 1998,
    "operatorType": "私立"
  },
  {
    "id": "F0159",
    "name": "彰基慈暉養護中心",
    "type": "養護中心",
    "city": "臺中市",
    "district": "霧峰區",
    "address": "臺中市霧峰區中華路295號之1",
    "phone": "(04) 2702-6995",
    "website": "https://彰基慈暉養護中心.com.tw",
    "beds": {
      "total": 40,
      "available": 10,
      "occupied": 30,
      "maleAvailable": 4,
      "femaleAvailable": 6,
      "lastUpdated": "2026-05-14T11:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 32000,
        "deposit": 32000
      },
      {
        "label": "單人房",
        "monthly": 50000,
        "deposit": 50000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "傷口照護",
      "安寧療護",
      "語言治療",
      "失智照護",
      "物理治療",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.112741,
    "longitude": 120.622782,
    "establishedYear": 1997,
    "operatorType": "私立"
  },
  {
    "id": "F0160",
    "name": "慈恩安寧照護中心",
    "type": "安寧病房",
    "city": "臺南市",
    "district": "佳里區",
    "address": "臺南市佳里區民生路417號之2",
    "phone": "(06) 3475-6172",
    "website": null,
    "beds": {
      "total": 80,
      "available": 23,
      "occupied": 57,
      "maleAvailable": 4,
      "femaleAvailable": 19,
      "lastUpdated": "2026-05-11T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 54000,
        "deposit": 54000
      },
      {
        "label": "雙人房",
        "monthly": 62000,
        "deposit": 62000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "呼吸照護",
      "社工服務",
      "職能治療",
      "復健治療",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.934836,
    "longitude": 120.173135,
    "establishedYear": 2008,
    "operatorType": "財團法人"
  },
  {
    "id": "F0161",
    "name": "主恩護理之家",
    "type": "護理之家",
    "city": "苗栗縣",
    "district": "市區",
    "address": "苗栗縣市區中華路328號之2",
    "phone": "(037) 2357-5663",
    "website": null,
    "beds": {
      "total": 60,
      "available": 2,
      "occupied": 58,
      "maleAvailable": 0,
      "femaleAvailable": 2,
      "lastUpdated": "2026-05-19T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 43000,
        "deposit": 43000
      },
      {
        "label": "雙人房",
        "monthly": 51000,
        "deposit": 51000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "社工服務",
      "營養諮詢",
      "語言治療",
      "藥事服務",
      "洗腎服務",
      "安寧療護",
      "呼吸照護",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.585074,
    "longitude": 120.765176,
    "establishedYear": 1989,
    "operatorType": "私立"
  },
  {
    "id": "F0162",
    "name": "市區慈暉養護中心",
    "type": "養護中心",
    "city": "南投縣",
    "district": "市區",
    "address": "南投縣市區中正路108號之1",
    "phone": "(049) 2743-9535",
    "website": null,
    "beds": {
      "total": 50,
      "available": 9,
      "occupied": 41,
      "maleAvailable": 4,
      "femaleAvailable": 5,
      "lastUpdated": "2026-05-11T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 54000,
        "deposit": 54000
      },
      {
        "label": "雙人房",
        "monthly": 62000,
        "deposit": 62000
      },
      {
        "label": "單人房",
        "monthly": 72000,
        "deposit": 72000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2025,
    "services": [
      "管路照護",
      "心理諮商",
      "復健治療",
      "藥事服務",
      "傷口照護",
      "呼吸照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.98147,
    "longitude": 120.717112,
    "establishedYear": 1986,
    "operatorType": "公立"
  },
  {
    "id": "F0163",
    "name": "慈暉仁愛護理之家",
    "type": "護理之家",
    "city": "臺東縣",
    "district": "市區",
    "address": "臺東縣市區復興路443號之3",
    "phone": "(089) 3510-5655",
    "website": null,
    "beds": {
      "total": 40,
      "available": 25,
      "occupied": 15,
      "maleAvailable": 20,
      "femaleAvailable": 5,
      "lastUpdated": "2026-05-18T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 54000,
        "deposit": 54000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "管路照護",
      "社工服務",
      "心理諮商",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.680625,
    "longitude": 121.122095,
    "establishedYear": 2019,
    "operatorType": "私立"
  },
  {
    "id": "F0164",
    "name": "奇美銀髮日照中心",
    "type": "日照中心",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區復興路147號之3",
    "phone": "(03) 2904-6044",
    "website": "https://奇美銀髮日照中心.com.tw",
    "beds": {
      "total": 120,
      "available": 41,
      "occupied": 79,
      "maleAvailable": 22,
      "femaleAvailable": 19,
      "lastUpdated": "2026-05-17T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 40000,
        "deposit": 40000
      },
      {
        "label": "雙人房",
        "monthly": 48000,
        "deposit": 48000
      },
      {
        "label": "單人房",
        "monthly": 58000,
        "deposit": 58000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "管路照護",
      "呼吸照護",
      "復健治療",
      "語言治療",
      "社工服務"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.806461,
    "longitude": 121.808671,
    "establishedYear": 2012,
    "operatorType": "公立"
  },
  {
    "id": "F0165",
    "name": "新竹日間照顧中心",
    "type": "日照中心",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區光復路414號之2",
    "phone": "(03) 3322-7385",
    "website": null,
    "beds": {
      "total": 80,
      "available": 19,
      "occupied": 61,
      "maleAvailable": 13,
      "femaleAvailable": 6,
      "lastUpdated": "2026-05-18T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 37000,
        "deposit": 37000
      },
      {
        "label": "單人房",
        "monthly": 55000,
        "deposit": 55000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2025,
    "services": [
      "呼吸照護",
      "洗腎服務",
      "安寧療護",
      "物理治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.76233,
    "longitude": 121.013326,
    "establishedYear": 1989,
    "operatorType": "私立"
  },
  {
    "id": "F0166",
    "name": "聖母忘憂園失智照護中心",
    "type": "失智專區",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區民生路47號之1",
    "phone": "(04) 3985-9764",
    "website": null,
    "beds": {
      "total": 100,
      "available": 33,
      "occupied": 67,
      "maleAvailable": 31,
      "femaleAvailable": 2,
      "lastUpdated": "2026-05-13T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 31000,
        "deposit": 31000
      }
    ],
    "rating": "優等",
    "ratingYear": 2025,
    "services": [
      "呼吸照護",
      "心理諮商",
      "管路照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.114431,
    "longitude": 120.578337,
    "establishedYear": 2016,
    "operatorType": "社團法人"
  },
  {
    "id": "F0167",
    "name": "仁愛老人養護中心",
    "type": "養護中心",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區信義路127號",
    "phone": "(03) 3834-5097",
    "website": null,
    "beds": {
      "total": 20,
      "available": 10,
      "occupied": 10,
      "maleAvailable": 6,
      "femaleAvailable": 4,
      "lastUpdated": "2026-05-11T16:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 27000,
        "deposit": 27000
      },
      {
        "label": "雙人房",
        "monthly": 35000,
        "deposit": 35000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2024,
    "services": [
      "洗腎服務",
      "藥事服務",
      "語言治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.715834,
    "longitude": 121.796396,
    "establishedYear": 2004,
    "operatorType": "社團法人"
  },
  {
    "id": "F0168",
    "name": "博愛忘憂園失智照護中心",
    "type": "失智專區",
    "city": "高雄市",
    "district": "大樹區",
    "address": "高雄市大樹區建國路300號",
    "phone": "(07) 2738-1853",
    "website": null,
    "beds": {
      "total": 120,
      "available": 14,
      "occupied": 106,
      "maleAvailable": 1,
      "femaleAvailable": 13,
      "lastUpdated": "2026-05-13T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 33000,
        "deposit": 33000
      },
      {
        "label": "雙人房",
        "monthly": 41000,
        "deposit": 41000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2024,
    "services": [
      "洗腎服務",
      "傷口照護",
      "物理治療",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.598922,
    "longitude": 120.247778,
    "establishedYear": 2015,
    "operatorType": "財團法人"
  },
  {
    "id": "F0169",
    "name": "仁愛安寧照護中心",
    "type": "安寧病房",
    "city": "臺南市",
    "district": "新營區",
    "address": "臺南市新營區復興路413號之3",
    "phone": "(06) 3555-1983",
    "website": "https://仁愛安寧照護中心.com.tw",
    "beds": {
      "total": 40,
      "available": 12,
      "occupied": 28,
      "maleAvailable": 1,
      "femaleAvailable": 11,
      "lastUpdated": "2026-05-10T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 47000,
        "deposit": 47000
      },
      {
        "label": "雙人房",
        "monthly": 55000,
        "deposit": 55000
      },
      {
        "label": "單人房",
        "monthly": 65000,
        "deposit": 65000
      }
    ],
    "rating": "優等",
    "ratingYear": 2025,
    "services": [
      "管路照護",
      "語言治療",
      "社工服務",
      "洗腎服務",
      "心理諮商",
      "營養諮詢",
      "傷口照護",
      "職能治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.076068,
    "longitude": 120.27317,
    "establishedYear": 2001,
    "operatorType": "公立"
  },
  {
    "id": "F0170",
    "name": "松鶴銀髮日照中心",
    "type": "日照中心",
    "city": "花蓮縣",
    "district": "市區",
    "address": "花蓮縣市區復興路233號",
    "phone": "(03) 2959-5510",
    "website": "https://松鶴銀髮日照中心.com.tw",
    "beds": {
      "total": 100,
      "available": 43,
      "occupied": 57,
      "maleAvailable": 36,
      "femaleAvailable": 7,
      "lastUpdated": "2026-05-18T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 31000,
        "deposit": 31000
      },
      {
        "label": "雙人房",
        "monthly": 39000,
        "deposit": 39000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2024,
    "services": [
      "心理諮商",
      "社工服務",
      "管路照護",
      "洗腎服務",
      "藥事服務",
      "語言治療",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.954308,
    "longitude": 121.563136,
    "establishedYear": 2008,
    "operatorType": "公立"
  },
  {
    "id": "F0171",
    "name": "仁愛忘憂園失智照護中心",
    "type": "失智專區",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區信義路99號",
    "phone": "(03) 2315-5638",
    "website": null,
    "beds": {
      "total": 120,
      "available": 31,
      "occupied": 89,
      "maleAvailable": 12,
      "femaleAvailable": 19,
      "lastUpdated": "2026-05-16T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 42000,
        "deposit": 42000
      },
      {
        "label": "雙人房",
        "monthly": 50000,
        "deposit": 50000
      },
      {
        "label": "單人房",
        "monthly": 60000,
        "deposit": 60000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "失智照護",
      "洗腎服務",
      "藥事服務",
      "社工服務",
      "語言治療",
      "復健治療",
      "管路照護",
      "職能治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.863759,
    "longitude": 120.923333,
    "establishedYear": 1999,
    "operatorType": "財團法人"
  },
  {
    "id": "F0172",
    "name": "奇美綜合長照中心",
    "type": "長照中心",
    "city": "桃園市",
    "district": "桃園區",
    "address": "桃園市桃園區中正路52號之1",
    "phone": "(03) 3921-7814",
    "website": "https://奇美綜合長照中心.com.tw",
    "beds": {
      "total": 30,
      "available": 6,
      "occupied": 24,
      "maleAvailable": 6,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-13T11:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 45000,
        "deposit": 45000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2024,
    "services": [
      "復健治療",
      "職能治療",
      "呼吸照護",
      "社工服務",
      "心理諮商",
      "洗腎服務",
      "語言治療",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.065137,
    "longitude": 121.370694,
    "establishedYear": 1996,
    "operatorType": "財團法人"
  },
  {
    "id": "F0173",
    "name": "奇美安寧緩和病房",
    "type": "安寧病房",
    "city": "屏東縣",
    "district": "市區",
    "address": "屏東縣市區大同路423號之2",
    "phone": "(08) 3126-7579",
    "website": "https://奇美安寧緩和病房.com.tw",
    "beds": {
      "total": 200,
      "available": 17,
      "occupied": 183,
      "maleAvailable": 13,
      "femaleAvailable": 4,
      "lastUpdated": "2026-05-19T16:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 53000,
        "deposit": 53000
      },
      {
        "label": "單人房",
        "monthly": 71000,
        "deposit": 71000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "管路照護",
      "社工服務",
      "職能治療",
      "營養諮詢",
      "失智照護",
      "語言治療",
      "藥事服務",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.654475,
    "longitude": 120.530269,
    "establishedYear": 2020,
    "operatorType": "社團法人"
  },
  {
    "id": "F0174",
    "name": "聖母長青安養中心",
    "type": "安養中心",
    "city": "苗栗縣",
    "district": "市區",
    "address": "苗栗縣市區光復路475號之1",
    "phone": "(037) 3823-5945",
    "website": null,
    "beds": {
      "total": 20,
      "available": 3,
      "occupied": 17,
      "maleAvailable": 0,
      "femaleAvailable": 3,
      "lastUpdated": "2026-05-17T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 34000,
        "deposit": 34000
      },
      {
        "label": "雙人房",
        "monthly": 42000,
        "deposit": 42000
      }
    ],
    "rating": "優等",
    "ratingYear": 2024,
    "services": [
      "傷口照護",
      "失智照護",
      "復健治療",
      "呼吸照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.631058,
    "longitude": 120.823803,
    "establishedYear": 2008,
    "operatorType": "公立"
  },
  {
    "id": "F0175",
    "name": "恩主公慈暉養護中心",
    "type": "養護中心",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區建國路20號之3",
    "phone": "(03) 3481-6319",
    "website": null,
    "beds": {
      "total": 30,
      "available": 2,
      "occupied": 28,
      "maleAvailable": 1,
      "femaleAvailable": 1,
      "lastUpdated": "2026-05-10T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 43000,
        "deposit": 43000
      },
      {
        "label": "雙人房",
        "monthly": 51000,
        "deposit": 51000
      },
      {
        "label": "單人房",
        "monthly": 61000,
        "deposit": 61000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "營養諮詢",
      "語言治療",
      "藥事服務",
      "職能治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.855122,
    "longitude": 120.906258,
    "establishedYear": 2012,
    "operatorType": "財團法人"
  },
  {
    "id": "F0176",
    "name": "萬芳長期照顧中心",
    "type": "長照中心",
    "city": "臺中市",
    "district": "大安區",
    "address": "臺中市大安區中華路68號之2",
    "phone": "(04) 3156-3450",
    "website": null,
    "beds": {
      "total": 200,
      "available": 37,
      "occupied": 163,
      "maleAvailable": 3,
      "femaleAvailable": 34,
      "lastUpdated": "2026-05-19T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 34000,
        "deposit": 34000
      },
      {
        "label": "雙人房",
        "monthly": 42000,
        "deposit": 42000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "傷口照護",
      "管路照護",
      "復健治療",
      "物理治療",
      "安寧療護",
      "營養諮詢",
      "洗腎服務",
      "社工服務"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.13711,
    "longitude": 120.719819,
    "establishedYear": 2010,
    "operatorType": "財團法人"
  },
  {
    "id": "F0177",
    "name": "慈濟老人安養中心",
    "type": "安養中心",
    "city": "臺南市",
    "district": "安平區",
    "address": "臺南市安平區復興路177號",
    "phone": "(06) 2504-4970",
    "website": "https://慈濟老人安養中心.com.tw",
    "beds": {
      "total": 100,
      "available": 17,
      "occupied": 83,
      "maleAvailable": 6,
      "femaleAvailable": 11,
      "lastUpdated": "2026-05-12T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 43000,
        "deposit": 43000
      },
      {
        "label": "雙人房",
        "monthly": 51000,
        "deposit": 51000
      },
      {
        "label": "單人房",
        "monthly": 61000,
        "deposit": 61000
      }
    ],
    "rating": "優等",
    "ratingYear": 2025,
    "services": [
      "失智照護",
      "物理治療",
      "職能治療",
      "洗腎服務",
      "藥事服務",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.986766,
    "longitude": 120.202729,
    "establishedYear": 2013,
    "operatorType": "私立"
  },
  {
    "id": "F0178",
    "name": "新竹失智照顧專區",
    "type": "失智專區",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區和平路268號之2",
    "phone": "(03) 3779-5713",
    "website": "https://新竹失智照顧專區.com.tw",
    "beds": {
      "total": 30,
      "available": 17,
      "occupied": 13,
      "maleAvailable": 1,
      "femaleAvailable": 16,
      "lastUpdated": "2026-05-19T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 32000,
        "deposit": 32000
      },
      {
        "label": "雙人房",
        "monthly": 40000,
        "deposit": 40000
      },
      {
        "label": "單人房",
        "monthly": 50000,
        "deposit": 50000
      }
    ],
    "rating": "優等",
    "ratingYear": 2024,
    "services": [
      "藥事服務",
      "洗腎服務",
      "呼吸照護",
      "營養諮詢",
      "物理治療",
      "復健治療",
      "失智照護",
      "心理諮商"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.842402,
    "longitude": 120.9249,
    "establishedYear": 2018,
    "operatorType": "私立"
  },
  {
    "id": "F0179",
    "name": "悠然福安養護中心",
    "type": "養護中心",
    "city": "高雄市",
    "district": "前金區",
    "address": "高雄市前金區復興路249號",
    "phone": "(07) 3352-5445",
    "website": null,
    "beds": {
      "total": 50,
      "available": 31,
      "occupied": 19,
      "maleAvailable": 29,
      "femaleAvailable": 2,
      "lastUpdated": "2026-05-18T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 46000,
        "deposit": 46000
      },
      {
        "label": "雙人房",
        "monthly": 54000,
        "deposit": 54000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "失智照護",
      "洗腎服務",
      "復健治療",
      "呼吸照護",
      "安寧療護",
      "傷口照護",
      "職能治療",
      "物理治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.703258,
    "longitude": 120.236937,
    "establishedYear": 2018,
    "operatorType": "私立"
  },
  {
    "id": "F0180",
    "name": "康寧失智照顧專區",
    "type": "失智專區",
    "city": "花蓮縣",
    "district": "市區",
    "address": "花蓮縣市區中正路374號之3",
    "phone": "(03) 3026-5519",
    "website": "https://康寧失智照顧專區.com.tw",
    "beds": {
      "total": 60,
      "available": 18,
      "occupied": 42,
      "maleAvailable": 11,
      "femaleAvailable": 7,
      "lastUpdated": "2026-05-19T11:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 45000,
        "deposit": 45000
      },
      {
        "label": "單人房",
        "monthly": 63000,
        "deposit": 63000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2025,
    "services": [
      "呼吸照護",
      "安寧療護",
      "復健治療",
      "社工服務",
      "心理諮商",
      "傷口照護",
      "管路照護",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.050548,
    "longitude": 121.626109,
    "establishedYear": 1994,
    "operatorType": "財團法人"
  },
  {
    "id": "F0181",
    "name": "慈濟老人安養中心",
    "type": "安養中心",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區中正路95號之2",
    "phone": "(04) 2282-6062",
    "website": "https://慈濟老人安養中心.com.tw",
    "beds": {
      "total": 49,
      "available": 25,
      "occupied": 24,
      "maleAvailable": 18,
      "femaleAvailable": 7,
      "lastUpdated": "2026-05-12T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 42000,
        "deposit": 42000
      },
      {
        "label": "雙人房",
        "monthly": 50000,
        "deposit": 50000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "管路照護",
      "安寧療護",
      "心理諮商",
      "物理治療",
      "職能治療",
      "語言治療",
      "失智照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.01085,
    "longitude": 120.547274,
    "establishedYear": 2011,
    "operatorType": "社團法人"
  },
  {
    "id": "F0182",
    "name": "成大忘憂園失智照護中心",
    "type": "失智專區",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區和平路434號之3",
    "phone": "(04) 3561-5372",
    "website": "https://成大忘憂園失智照護中心.com.tw",
    "beds": {
      "total": 50,
      "available": 25,
      "occupied": 25,
      "maleAvailable": 24,
      "femaleAvailable": 1,
      "lastUpdated": "2026-05-15T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 31000,
        "deposit": 31000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "傷口照護",
      "職能治療",
      "心理諮商",
      "語言治療",
      "復健治療",
      "失智照護",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.110103,
    "longitude": 120.538256,
    "establishedYear": 1993,
    "operatorType": "私立"
  },
  {
    "id": "F0183",
    "name": "雙和安養中心",
    "type": "安養中心",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區光復路377號之3",
    "phone": "(03) 2418-2083",
    "website": "https://雙和安養中心.com.tw",
    "beds": {
      "total": 50,
      "available": 8,
      "occupied": 42,
      "maleAvailable": 3,
      "femaleAvailable": 5,
      "lastUpdated": "2026-05-16T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 49000,
        "deposit": 49000
      },
      {
        "label": "雙人房",
        "monthly": 57000,
        "deposit": 57000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "心理諮商",
      "職能治療",
      "營養諮詢",
      "失智照護",
      "語言治療",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.792409,
    "longitude": 121.015194,
    "establishedYear": 2013,
    "operatorType": "財團法人"
  },
  {
    "id": "F0184",
    "name": "慈濟社區日照中心",
    "type": "日照中心",
    "city": "新北市",
    "district": "蘆洲區",
    "address": "新北市蘆洲區和平路463號之1",
    "phone": "(02) 2388-5770",
    "website": null,
    "beds": {
      "total": 20,
      "available": 6,
      "occupied": 14,
      "maleAvailable": 3,
      "femaleAvailable": 3,
      "lastUpdated": "2026-05-17T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 41000,
        "deposit": 41000
      },
      {
        "label": "雙人房",
        "monthly": 49000,
        "deposit": 49000
      },
      {
        "label": "單人房",
        "monthly": 59000,
        "deposit": 59000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "藥事服務",
      "呼吸照護",
      "營養諮詢",
      "管路照護",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.984107,
    "longitude": 121.525045,
    "establishedYear": 2022,
    "operatorType": "社團法人"
  },
  {
    "id": "F0185",
    "name": "鹽水區長青安養中心",
    "type": "安養中心",
    "city": "臺南市",
    "district": "鹽水區",
    "address": "臺南市鹽水區復興路44號之3",
    "phone": "(06) 3807-8449",
    "website": "https://鹽水區長青安養中心.com.tw",
    "beds": {
      "total": 20,
      "available": 12,
      "occupied": 8,
      "maleAvailable": 7,
      "femaleAvailable": 5,
      "lastUpdated": "2026-05-18T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 44000,
        "deposit": 44000
      },
      {
        "label": "雙人房",
        "monthly": 52000,
        "deposit": 52000
      },
      {
        "label": "單人房",
        "monthly": 62000,
        "deposit": 62000
      }
    ],
    "rating": "優等",
    "ratingYear": 2024,
    "services": [
      "語言治療",
      "物理治療",
      "心理諮商",
      "管路照護",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.933591,
    "longitude": 120.259996,
    "establishedYear": 2009,
    "operatorType": "私立"
  },
  {
    "id": "F0186",
    "name": "中國銀髮日照中心",
    "type": "日照中心",
    "city": "高雄市",
    "district": "左營區",
    "address": "高雄市左營區中山路235號之3",
    "phone": "(07) 2630-6071",
    "website": "https://中國銀髮日照中心.com.tw",
    "beds": {
      "total": 40,
      "available": 22,
      "occupied": 18,
      "maleAvailable": 4,
      "femaleAvailable": 18,
      "lastUpdated": "2026-05-18T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 30000,
        "deposit": 30000
      },
      {
        "label": "雙人房",
        "monthly": 38000,
        "deposit": 38000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "呼吸照護",
      "物理治療",
      "管路照護",
      "洗腎服務",
      "語言治療",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.547565,
    "longitude": 120.343463,
    "establishedYear": 2022,
    "operatorType": "財團法人"
  },
  {
    "id": "F0187",
    "name": "仁愛安養中心",
    "type": "安養中心",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區中山路56號之3",
    "phone": "(03) 2714-1601",
    "website": "https://仁愛安養中心.com.tw",
    "beds": {
      "total": 49,
      "available": 16,
      "occupied": 33,
      "maleAvailable": 6,
      "femaleAvailable": 10,
      "lastUpdated": "2026-05-12T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 26000,
        "deposit": 26000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "物理治療",
      "職能治療",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.723751,
    "longitude": 121.820262,
    "establishedYear": 2022,
    "operatorType": "私立"
  },
  {
    "id": "F0188",
    "name": "松鶴安寧緩和病房",
    "type": "安寧病房",
    "city": "新北市",
    "district": "中和區",
    "address": "新北市中和區光復路374號",
    "phone": "(02) 2599-8713",
    "website": null,
    "beds": {
      "total": 60,
      "available": 16,
      "occupied": 44,
      "maleAvailable": 2,
      "femaleAvailable": 14,
      "lastUpdated": "2026-05-19T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 49000,
        "deposit": 49000
      },
      {
        "label": "雙人房",
        "monthly": 57000,
        "deposit": 57000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "心理諮商",
      "呼吸照護",
      "失智照護",
      "社工服務",
      "安寧療護",
      "物理治療",
      "傷口照護",
      "語言治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.970448,
    "longitude": 121.38731,
    "establishedYear": 2005,
    "operatorType": "私立"
  },
  {
    "id": "F0189",
    "name": "門諾社區日照中心",
    "type": "日照中心",
    "city": "雲林縣",
    "district": "市區",
    "address": "雲林縣市區民生路410號之3",
    "phone": "(05) 2476-5759",
    "website": null,
    "beds": {
      "total": 120,
      "available": 0,
      "occupied": 120,
      "maleAvailable": 0,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-15T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 41000,
        "deposit": 41000
      },
      {
        "label": "雙人房",
        "monthly": 49000,
        "deposit": 49000
      },
      {
        "label": "單人房",
        "monthly": 59000,
        "deposit": 59000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2024,
    "services": [
      "洗腎服務",
      "復健治療",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.727074,
    "longitude": 120.482868,
    "establishedYear": 1997,
    "operatorType": "財團法人"
  },
  {
    "id": "F0190",
    "name": "松鶴福安養護中心",
    "type": "養護中心",
    "city": "苗栗縣",
    "district": "市區",
    "address": "苗栗縣市區中華路247號之1",
    "phone": "(037) 3483-1477",
    "website": "https://松鶴福安養護中心.com.tw",
    "beds": {
      "total": 120,
      "available": 39,
      "occupied": 81,
      "maleAvailable": 0,
      "femaleAvailable": 39,
      "lastUpdated": "2026-05-18T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 28000,
        "deposit": 28000
      },
      {
        "label": "雙人房",
        "monthly": 36000,
        "deposit": 36000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2025,
    "services": [
      "失智照護",
      "心理諮商",
      "物理治療",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.630586,
    "longitude": 120.869561,
    "establishedYear": 2011,
    "operatorType": "社團法人"
  },
  {
    "id": "F0191",
    "name": "門諾慈暉養護中心",
    "type": "養護中心",
    "city": "新北市",
    "district": "林口區",
    "address": "新北市林口區光復路311號之3",
    "phone": "(02) 3876-6793",
    "website": null,
    "beds": {
      "total": 120,
      "available": 12,
      "occupied": 108,
      "maleAvailable": 0,
      "femaleAvailable": 12,
      "lastUpdated": "2026-05-11T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 31000,
        "deposit": 31000
      },
      {
        "label": "雙人房",
        "monthly": 39000,
        "deposit": 39000
      }
    ],
    "rating": "優等",
    "ratingYear": 2025,
    "services": [
      "呼吸照護",
      "復健治療",
      "失智照護",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.037242,
    "longitude": 121.512785,
    "establishedYear": 2002,
    "operatorType": "財團法人"
  },
  {
    "id": "F0192",
    "name": "聖母慈暉養護中心",
    "type": "養護中心",
    "city": "花蓮縣",
    "district": "市區",
    "address": "花蓮縣市區和平路159號之2",
    "phone": "(03) 3592-4311",
    "website": null,
    "beds": {
      "total": 49,
      "available": 0,
      "occupied": 49,
      "maleAvailable": 0,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-11T16:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 30000,
        "deposit": 30000
      },
      {
        "label": "單人房",
        "monthly": 48000,
        "deposit": 48000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2024,
    "services": [
      "社工服務",
      "復健治療",
      "營養諮詢",
      "心理諮商",
      "管路照護",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.961419,
    "longitude": 121.598356,
    "establishedYear": 1987,
    "operatorType": "財團法人"
  },
  {
    "id": "F0193",
    "name": "松鶴護理之家",
    "type": "護理之家",
    "city": "臺東縣",
    "district": "市區",
    "address": "臺東縣市區信義路344號",
    "phone": "(089) 3569-6119",
    "website": null,
    "beds": {
      "total": 200,
      "available": 112,
      "occupied": 88,
      "maleAvailable": 42,
      "femaleAvailable": 70,
      "lastUpdated": "2026-05-12T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 40000,
        "deposit": 40000
      },
      {
        "label": "雙人房",
        "monthly": 48000,
        "deposit": 48000
      }
    ],
    "rating": "優等",
    "ratingYear": 2024,
    "services": [
      "物理治療",
      "傷口照護",
      "失智照護",
      "藥事服務",
      "心理諮商"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.720851,
    "longitude": 121.150164,
    "establishedYear": 2020,
    "operatorType": "財團法人"
  },
  {
    "id": "F0194",
    "name": "市區社區日照中心",
    "type": "日照中心",
    "city": "基隆市",
    "district": "市區",
    "address": "基隆市市區大同路28號",
    "phone": "(02) 3255-6549",
    "website": null,
    "beds": {
      "total": 40,
      "available": 5,
      "occupied": 35,
      "maleAvailable": 2,
      "femaleAvailable": 3,
      "lastUpdated": "2026-05-12T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 43000,
        "deposit": 43000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "管路照護",
      "復健治療",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.192527,
    "longitude": 121.670073,
    "establishedYear": 2004,
    "operatorType": "私立"
  },
  {
    "id": "F0195",
    "name": "雙和安寧緩和病房",
    "type": "安寧病房",
    "city": "基隆市",
    "district": "市區",
    "address": "基隆市市區復興路201號之1",
    "phone": "(02) 2199-8464",
    "website": "https://雙和安寧緩和病房.com.tw",
    "beds": {
      "total": 150,
      "available": 84,
      "occupied": 66,
      "maleAvailable": 11,
      "femaleAvailable": 73,
      "lastUpdated": "2026-05-15T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 51000,
        "deposit": 51000
      },
      {
        "label": "雙人房",
        "monthly": 59000,
        "deposit": 59000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "語言治療",
      "藥事服務",
      "營養諮詢",
      "心理諮商",
      "傷口照護",
      "職能治療",
      "管路照護",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.191312,
    "longitude": 121.703288,
    "establishedYear": 1989,
    "operatorType": "財團法人"
  },
  {
    "id": "F0196",
    "name": "中國老人安養中心",
    "type": "安養中心",
    "city": "雲林縣",
    "district": "市區",
    "address": "雲林縣市區信義路197號",
    "phone": "(05) 3674-2752",
    "website": null,
    "beds": {
      "total": 50,
      "available": 12,
      "occupied": 38,
      "maleAvailable": 9,
      "femaleAvailable": 3,
      "lastUpdated": "2026-05-19T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 43000,
        "deposit": 43000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "洗腎服務",
      "藥事服務",
      "呼吸照護",
      "社工服務",
      "營養諮詢",
      "安寧療護",
      "物理治療",
      "心理諮商"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.72634,
    "longitude": 120.551672,
    "establishedYear": 2006,
    "operatorType": "財團法人"
  },
  {
    "id": "F0197",
    "name": "國泰失智照顧專區",
    "type": "失智專區",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區中山路47號之1",
    "phone": "(03) 2199-8294",
    "website": "https://國泰失智照顧專區.com.tw",
    "beds": {
      "total": 150,
      "available": 38,
      "occupied": 112,
      "maleAvailable": 7,
      "femaleAvailable": 31,
      "lastUpdated": "2026-05-19T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 44000,
        "deposit": 44000
      },
      {
        "label": "雙人房",
        "monthly": 52000,
        "deposit": 52000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "洗腎服務",
      "職能治療",
      "心理諮商",
      "物理治療",
      "藥事服務",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.776385,
    "longitude": 120.994198,
    "establishedYear": 2013,
    "operatorType": "財團法人"
  },
  {
    "id": "F0198",
    "name": "悠然社區長照中心",
    "type": "長照中心",
    "city": "嘉義市",
    "district": "市區",
    "address": "嘉義市市區復興路57號之2",
    "phone": "(05) 2182-1133",
    "website": "https://悠然社區長照中心.com.tw",
    "beds": {
      "total": 50,
      "available": 15,
      "occupied": 35,
      "maleAvailable": 13,
      "femaleAvailable": 2,
      "lastUpdated": "2026-05-13T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 48000,
        "deposit": 48000
      },
      {
        "label": "雙人房",
        "monthly": 56000,
        "deposit": 56000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "安寧療護",
      "管路照護",
      "呼吸照護",
      "復健治療",
      "失智照護",
      "社工服務",
      "物理治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.400135,
    "longitude": 120.458605,
    "establishedYear": 2009,
    "operatorType": "財團法人"
  },
  {
    "id": "F0199",
    "name": "康寧憶家園失智專區",
    "type": "失智專區",
    "city": "屏東縣",
    "district": "市區",
    "address": "屏東縣市區中正路71號之3",
    "phone": "(08) 2854-3527",
    "website": "https://康寧憶家園失智專區.com.tw",
    "beds": {
      "total": 40,
      "available": 21,
      "occupied": 19,
      "maleAvailable": 17,
      "femaleAvailable": 4,
      "lastUpdated": "2026-05-19T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 37000,
        "deposit": 37000
      },
      {
        "label": "雙人房",
        "monthly": 45000,
        "deposit": 45000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "管路照護",
      "心理諮商",
      "復健治療",
      "洗腎服務",
      "語言治療",
      "藥事服務",
      "營養諮詢",
      "失智照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.664878,
    "longitude": 120.566435,
    "establishedYear": 2012,
    "operatorType": "財團法人"
  },
  {
    "id": "F0200",
    "name": "福安老人養護中心",
    "type": "養護中心",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區中正路73號之2",
    "phone": "(03) 3458-9220",
    "website": null,
    "beds": {
      "total": 80,
      "available": 16,
      "occupied": 64,
      "maleAvailable": 0,
      "femaleAvailable": 16,
      "lastUpdated": "2026-05-11T16:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 43000,
        "deposit": 43000
      },
      {
        "label": "雙人房",
        "monthly": 51000,
        "deposit": 51000
      },
      {
        "label": "單人房",
        "monthly": 61000,
        "deposit": 61000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "職能治療",
      "失智照護",
      "復健治療",
      "語言治療",
      "心理諮商",
      "營養諮詢",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.694106,
    "longitude": 121.750045,
    "establishedYear": 1989,
    "operatorType": "財團法人"
  },
  {
    "id": "F0201",
    "name": "慈濟養護中心",
    "type": "養護中心",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區中山路323號之3",
    "phone": "(04) 2862-6782",
    "website": "https://慈濟養護中心.com.tw",
    "beds": {
      "total": 100,
      "available": 9,
      "occupied": 91,
      "maleAvailable": 8,
      "femaleAvailable": 1,
      "lastUpdated": "2026-05-19T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 54000,
        "deposit": 54000
      },
      {
        "label": "雙人房",
        "monthly": 62000,
        "deposit": 62000
      },
      {
        "label": "單人房",
        "monthly": 72000,
        "deposit": 72000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2025,
    "services": [
      "呼吸照護",
      "管路照護",
      "復健治療",
      "職能治療",
      "心理諮商"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.116315,
    "longitude": 120.552193,
    "establishedYear": 1986,
    "operatorType": "私立"
  },
  {
    "id": "F0202",
    "name": "仁愛社區日照中心",
    "type": "日照中心",
    "city": "桃園市",
    "district": "平鎮區",
    "address": "桃園市平鎮區中華路410號",
    "phone": "(03) 3518-2827",
    "website": null,
    "beds": {
      "total": 50,
      "available": 26,
      "occupied": 24,
      "maleAvailable": 19,
      "femaleAvailable": 7,
      "lastUpdated": "2026-05-11T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 34000,
        "deposit": 34000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "語言治療",
      "管路照護",
      "物理治療",
      "營養諮詢",
      "失智照護",
      "藥事服務",
      "呼吸照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.039204,
    "longitude": 121.254791,
    "establishedYear": 2011,
    "operatorType": "公立"
  },
  {
    "id": "F0203",
    "name": "奇美失智照顧專區",
    "type": "失智專區",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區建國路75號之3",
    "phone": "(03) 2107-3745",
    "website": null,
    "beds": {
      "total": 49,
      "available": 11,
      "occupied": 38,
      "maleAvailable": 0,
      "femaleAvailable": 11,
      "lastUpdated": "2026-05-17T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 46000,
        "deposit": 46000
      },
      {
        "label": "單人房",
        "monthly": 64000,
        "deposit": 64000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "呼吸照護",
      "營養諮詢",
      "語言治療",
      "社工服務",
      "傷口照護",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.833362,
    "longitude": 120.953411,
    "establishedYear": 1987,
    "operatorType": "私立"
  },
  {
    "id": "F0204",
    "name": "成大銀髮日照中心",
    "type": "日照中心",
    "city": "雲林縣",
    "district": "市區",
    "address": "雲林縣市區和平路6號",
    "phone": "(05) 3196-7408",
    "website": "https://成大銀髮日照中心.com.tw",
    "beds": {
      "total": 50,
      "available": 13,
      "occupied": 37,
      "maleAvailable": 4,
      "femaleAvailable": 9,
      "lastUpdated": "2026-05-10T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 33000,
        "deposit": 33000
      },
      {
        "label": "雙人房",
        "monthly": 41000,
        "deposit": 41000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "語言治療",
      "傷口照護",
      "心理諮商",
      "物理治療",
      "職能治療",
      "藥事服務",
      "失智照護",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.737445,
    "longitude": 120.492787,
    "establishedYear": 2013,
    "operatorType": "私立"
  },
  {
    "id": "F0205",
    "name": "博愛長期照顧中心",
    "type": "長照中心",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區光復路412號之1",
    "phone": "(04) 3946-2995",
    "website": "https://博愛長期照顧中心.com.tw",
    "beds": {
      "total": 150,
      "available": 89,
      "occupied": 61,
      "maleAvailable": 7,
      "femaleAvailable": 82,
      "lastUpdated": "2026-05-12T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 44000,
        "deposit": 44000
      },
      {
        "label": "雙人房",
        "monthly": 52000,
        "deposit": 52000
      },
      {
        "label": "單人房",
        "monthly": 62000,
        "deposit": 62000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "洗腎服務",
      "職能治療",
      "管路照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.060153,
    "longitude": 120.584217,
    "establishedYear": 1989,
    "operatorType": "財團法人"
  },
  {
    "id": "F0206",
    "name": "中山忘憂園失智照護中心",
    "type": "失智專區",
    "city": "苗栗縣",
    "district": "市區",
    "address": "苗栗縣市區民生路313號之3",
    "phone": "(037) 2783-7366",
    "website": null,
    "beds": {
      "total": 60,
      "available": 24,
      "occupied": 36,
      "maleAvailable": 5,
      "femaleAvailable": 19,
      "lastUpdated": "2026-05-17T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 50000,
        "deposit": 50000
      },
      {
        "label": "單人房",
        "monthly": 68000,
        "deposit": 68000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "呼吸照護",
      "心理諮商",
      "管路照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.554492,
    "longitude": 120.820675,
    "establishedYear": 2012,
    "operatorType": "私立"
  },
  {
    "id": "F0207",
    "name": "慈暉失智照顧專區",
    "type": "失智專區",
    "city": "臺中市",
    "district": "潭子區",
    "address": "臺中市潭子區信義路245號之3",
    "phone": "(04) 2038-9154",
    "website": null,
    "beds": {
      "total": 20,
      "available": 13,
      "occupied": 7,
      "maleAvailable": 1,
      "femaleAvailable": 12,
      "lastUpdated": "2026-05-11T16:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 43000,
        "deposit": 43000
      },
      {
        "label": "雙人房",
        "monthly": 51000,
        "deposit": 51000
      },
      {
        "label": "單人房",
        "monthly": 61000,
        "deposit": 61000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "復健治療",
      "心理諮商",
      "物理治療",
      "安寧療護",
      "呼吸照護",
      "管路照護",
      "失智照護",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.159942,
    "longitude": 120.676461,
    "establishedYear": 2015,
    "operatorType": "私立"
  },
  {
    "id": "F0208",
    "name": "松鶴憶家園失智專區",
    "type": "失智專區",
    "city": "雲林縣",
    "district": "市區",
    "address": "雲林縣市區建國路357號之3",
    "phone": "(05) 2164-8530",
    "website": "https://松鶴憶家園失智專區.com.tw",
    "beds": {
      "total": 20,
      "available": 4,
      "occupied": 16,
      "maleAvailable": 0,
      "femaleAvailable": 4,
      "lastUpdated": "2026-05-15T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 36000,
        "deposit": 36000
      },
      {
        "label": "雙人房",
        "monthly": 44000,
        "deposit": 44000
      },
      {
        "label": "單人房",
        "monthly": 54000,
        "deposit": 54000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "物理治療",
      "傷口照護",
      "管路照護",
      "社工服務",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.781802,
    "longitude": 120.569717,
    "establishedYear": 2013,
    "operatorType": "財團法人"
  },
  {
    "id": "F0209",
    "name": "慈恩長照服務中心",
    "type": "長照中心",
    "city": "臺南市",
    "district": "東區",
    "address": "臺南市東區大同路61號之1",
    "phone": "(06) 3093-8361",
    "website": "https://慈恩長照服務中心.com.tw",
    "beds": {
      "total": 100,
      "available": 18,
      "occupied": 82,
      "maleAvailable": 2,
      "femaleAvailable": 16,
      "lastUpdated": "2026-05-18T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 50000,
        "deposit": 50000
      },
      {
        "label": "雙人房",
        "monthly": 58000,
        "deposit": 58000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2024,
    "services": [
      "復健治療",
      "失智照護",
      "心理諮商"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.973035,
    "longitude": 120.262362,
    "establishedYear": 1999,
    "operatorType": "社團法人"
  },
  {
    "id": "F0210",
    "name": "奇美安養中心",
    "type": "安養中心",
    "city": "新北市",
    "district": "新莊區",
    "address": "新北市新莊區中正路59號之3",
    "phone": "(02) 3295-1818",
    "website": "https://奇美安養中心.com.tw",
    "beds": {
      "total": 100,
      "available": 62,
      "occupied": 38,
      "maleAvailable": 15,
      "femaleAvailable": 47,
      "lastUpdated": "2026-05-19T11:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 47000,
        "deposit": 47000
      },
      {
        "label": "雙人房",
        "monthly": 55000,
        "deposit": 55000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2024,
    "services": [
      "營養諮詢",
      "職能治療",
      "管路照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.070656,
    "longitude": 121.388233,
    "establishedYear": 2012,
    "operatorType": "私立"
  },
  {
    "id": "F0211",
    "name": "國泰仁愛護理之家",
    "type": "護理之家",
    "city": "嘉義市",
    "district": "市區",
    "address": "嘉義市市區中華路225號之1",
    "phone": "(05) 2093-3841",
    "website": "https://國泰仁愛護理之家.com.tw",
    "beds": {
      "total": 120,
      "available": 63,
      "occupied": 57,
      "maleAvailable": 41,
      "femaleAvailable": 22,
      "lastUpdated": "2026-05-10T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 52000,
        "deposit": 52000
      },
      {
        "label": "雙人房",
        "monthly": 60000,
        "deposit": 60000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "呼吸照護",
      "管路照護",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.426888,
    "longitude": 120.428188,
    "establishedYear": 2009,
    "operatorType": "公立"
  },
  {
    "id": "F0212",
    "name": "慈恩護理之家",
    "type": "護理之家",
    "city": "臺北市",
    "district": "士林區",
    "address": "臺北市士林區中華路313號",
    "phone": "(02) 3420-8798",
    "website": "https://慈恩護理之家.com.tw",
    "beds": {
      "total": 40,
      "available": 25,
      "occupied": 15,
      "maleAvailable": 22,
      "femaleAvailable": 3,
      "lastUpdated": "2026-05-17T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 46000,
        "deposit": 46000
      },
      {
        "label": "雙人房",
        "monthly": 54000,
        "deposit": 54000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "管路照護",
      "物理治療",
      "呼吸照護",
      "社工服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.025067,
    "longitude": 121.523281,
    "establishedYear": 2004,
    "operatorType": "私立"
  },
  {
    "id": "F0213",
    "name": "悠然長期照顧中心",
    "type": "長照中心",
    "city": "臺北市",
    "district": "北投區",
    "address": "臺北市北投區中山路28號之2",
    "phone": "(02) 2449-8605",
    "website": null,
    "beds": {
      "total": 120,
      "available": 68,
      "occupied": 52,
      "maleAvailable": 46,
      "femaleAvailable": 22,
      "lastUpdated": "2026-05-16T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 53000,
        "deposit": 53000
      },
      {
        "label": "雙人房",
        "monthly": 61000,
        "deposit": 61000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "傷口照護",
      "呼吸照護",
      "復健治療",
      "心理諮商",
      "洗腎服務",
      "管路照護",
      "營養諮詢",
      "物理治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.981212,
    "longitude": 121.592223,
    "establishedYear": 2014,
    "operatorType": "私立"
  },
  {
    "id": "F0214",
    "name": "康寧長期照顧中心",
    "type": "長照中心",
    "city": "新北市",
    "district": "深坑區",
    "address": "新北市深坑區大同路457號之1",
    "phone": "(02) 3213-6340",
    "website": null,
    "beds": {
      "total": 100,
      "available": 2,
      "occupied": 98,
      "maleAvailable": 0,
      "femaleAvailable": 2,
      "lastUpdated": "2026-05-19T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 27000,
        "deposit": 27000
      },
      {
        "label": "雙人房",
        "monthly": 35000,
        "deposit": 35000
      },
      {
        "label": "單人房",
        "monthly": 45000,
        "deposit": 45000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "物理治療",
      "失智照護",
      "傷口照護",
      "洗腎服務",
      "藥事服務",
      "語言治療",
      "心理諮商",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.05504,
    "longitude": 121.517182,
    "establishedYear": 1994,
    "operatorType": "私立"
  },
  {
    "id": "F0215",
    "name": "宜蘭老人安養中心",
    "type": "安養中心",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區中華路390號之2",
    "phone": "(03) 2260-1525",
    "website": null,
    "beds": {
      "total": 100,
      "available": 43,
      "occupied": 57,
      "maleAvailable": 40,
      "femaleAvailable": 3,
      "lastUpdated": "2026-05-14T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 36000,
        "deposit": 36000
      },
      {
        "label": "雙人房",
        "monthly": 44000,
        "deposit": 44000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "呼吸照護",
      "管路照護",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.812264,
    "longitude": 121.746373,
    "establishedYear": 1995,
    "operatorType": "財團法人"
  },
  {
    "id": "F0216",
    "name": "中國長青安養中心",
    "type": "安養中心",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區信義路376號",
    "phone": "(03) 3787-5041",
    "website": null,
    "beds": {
      "total": 49,
      "available": 3,
      "occupied": 46,
      "maleAvailable": 3,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-16T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 34000,
        "deposit": 34000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "職能治療",
      "傷口照護",
      "心理諮商",
      "管路照護",
      "語言治療",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.790843,
    "longitude": 120.898076,
    "establishedYear": 2000,
    "operatorType": "私立"
  },
  {
    "id": "F0217",
    "name": "主恩失智照顧專區",
    "type": "失智專區",
    "city": "臺北市",
    "district": "文山區",
    "address": "臺北市文山區大同路95號之2",
    "phone": "(02) 2982-5994",
    "website": "https://主恩失智照顧專區.com.tw",
    "beds": {
      "total": 40,
      "available": 16,
      "occupied": 24,
      "maleAvailable": 9,
      "femaleAvailable": 7,
      "lastUpdated": "2026-05-10T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 32000,
        "deposit": 32000
      },
      {
        "label": "雙人房",
        "monthly": 40000,
        "deposit": 40000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "心理諮商",
      "職能治療",
      "語言治療",
      "藥事服務",
      "復健治療",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.027202,
    "longitude": 121.50718,
    "establishedYear": 2006,
    "operatorType": "財團法人"
  },
  {
    "id": "F0218",
    "name": "慈暉安寧照護中心",
    "type": "安寧病房",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區中華路332號",
    "phone": "(04) 3054-6963",
    "website": "https://慈暉安寧照護中心.com.tw",
    "beds": {
      "total": 200,
      "available": 114,
      "occupied": 86,
      "maleAvailable": 79,
      "femaleAvailable": 35,
      "lastUpdated": "2026-05-13T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 53000,
        "deposit": 53000
      },
      {
        "label": "單人房",
        "monthly": 71000,
        "deposit": 71000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2025,
    "services": [
      "安寧療護",
      "失智照護",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.099061,
    "longitude": 120.520491,
    "establishedYear": 1992,
    "operatorType": "財團法人"
  },
  {
    "id": "F0219",
    "name": "基隆慈暉養護中心",
    "type": "養護中心",
    "city": "基隆市",
    "district": "市區",
    "address": "基隆市市區建國路232號之2",
    "phone": "(02) 2995-9215",
    "website": "https://基隆慈暉養護中心.com.tw",
    "beds": {
      "total": 120,
      "available": 26,
      "occupied": 94,
      "maleAvailable": 8,
      "femaleAvailable": 18,
      "lastUpdated": "2026-05-11T11:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 26000,
        "deposit": 26000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "營養諮詢",
      "語言治療",
      "社工服務"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 25.156529,
    "longitude": 121.747257,
    "establishedYear": 2010,
    "operatorType": "公立"
  },
  {
    "id": "F0220",
    "name": "康寧慈恩護理之家",
    "type": "護理之家",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區民生路428號之2",
    "phone": "(04) 3284-1371",
    "website": null,
    "beds": {
      "total": 30,
      "available": 16,
      "occupied": 14,
      "maleAvailable": 15,
      "femaleAvailable": 1,
      "lastUpdated": "2026-05-15T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 29000,
        "deposit": 29000
      },
      {
        "label": "雙人房",
        "monthly": 37000,
        "deposit": 37000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "社工服務",
      "管路照護",
      "營養諮詢",
      "失智照護",
      "安寧療護",
      "語言治療",
      "復健治療",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.03025,
    "longitude": 120.465526,
    "establishedYear": 2018,
    "operatorType": "公立"
  },
  {
    "id": "F0221",
    "name": "門諾老人養護中心",
    "type": "養護中心",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區中華路83號之1",
    "phone": "(03) 3576-1775",
    "website": null,
    "beds": {
      "total": 50,
      "available": 24,
      "occupied": 26,
      "maleAvailable": 8,
      "femaleAvailable": 16,
      "lastUpdated": "2026-05-15T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 32000,
        "deposit": 32000
      },
      {
        "label": "雙人房",
        "monthly": 40000,
        "deposit": 40000
      },
      {
        "label": "單人房",
        "monthly": 50000,
        "deposit": 50000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "營養諮詢",
      "管路照護",
      "職能治療",
      "藥事服務",
      "社工服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.721639,
    "longitude": 121.828713,
    "establishedYear": 2008,
    "operatorType": "私立"
  },
  {
    "id": "F0222",
    "name": "長青慈暉養護中心",
    "type": "養護中心",
    "city": "新北市",
    "district": "鶯歌區",
    "address": "新北市鶯歌區建國路497號之1",
    "phone": "(02) 3906-9182",
    "website": "https://長青慈暉養護中心.com.tw",
    "beds": {
      "total": 100,
      "available": 47,
      "occupied": 53,
      "maleAvailable": 34,
      "femaleAvailable": 13,
      "lastUpdated": "2026-05-17T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 34000,
        "deposit": 34000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "失智照護",
      "管路照護",
      "復健治療",
      "社工服務",
      "物理治療",
      "心理諮商"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.040559,
    "longitude": 121.425289,
    "establishedYear": 1987,
    "operatorType": "私立"
  },
  {
    "id": "F0223",
    "name": "恩典仁愛護理之家",
    "type": "護理之家",
    "city": "臺中市",
    "district": "大里區",
    "address": "臺中市大里區和平路202號之1",
    "phone": "(04) 2399-9625",
    "website": null,
    "beds": {
      "total": 49,
      "available": 5,
      "occupied": 44,
      "maleAvailable": 2,
      "femaleAvailable": 3,
      "lastUpdated": "2026-05-19T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 28000,
        "deposit": 28000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "傷口照護",
      "復健治療",
      "洗腎服務",
      "社工服務",
      "營養諮詢"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.17633,
    "longitude": 120.74722,
    "establishedYear": 2008,
    "operatorType": "私立"
  },
  {
    "id": "F0224",
    "name": "屏東安養中心",
    "type": "安養中心",
    "city": "屏東縣",
    "district": "市區",
    "address": "屏東縣市區光復路307號",
    "phone": "(08) 2179-4533",
    "website": null,
    "beds": {
      "total": 50,
      "available": 12,
      "occupied": 38,
      "maleAvailable": 5,
      "femaleAvailable": 7,
      "lastUpdated": "2026-05-14T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 35000,
        "deposit": 35000
      },
      {
        "label": "雙人房",
        "monthly": 43000,
        "deposit": 43000
      },
      {
        "label": "單人房",
        "monthly": 53000,
        "deposit": 53000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "語言治療",
      "安寧療護",
      "營養諮詢",
      "呼吸照護",
      "管路照護",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.711577,
    "longitude": 120.474271,
    "establishedYear": 2022,
    "operatorType": "公立"
  },
  {
    "id": "F0225",
    "name": "奇美悠然安養中心",
    "type": "安養中心",
    "city": "桃園市",
    "district": "桃園區",
    "address": "桃園市桃園區民生路14號",
    "phone": "(03) 2280-4264",
    "website": null,
    "beds": {
      "total": 80,
      "available": 43,
      "occupied": 37,
      "maleAvailable": 35,
      "femaleAvailable": 8,
      "lastUpdated": "2026-05-14T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 40000,
        "deposit": 40000
      },
      {
        "label": "雙人房",
        "monthly": 48000,
        "deposit": 48000
      },
      {
        "label": "單人房",
        "monthly": 58000,
        "deposit": 58000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "呼吸照護",
      "社工服務",
      "營養諮詢",
      "復健治療",
      "心理諮商",
      "職能治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.993056,
    "longitude": 121.335377,
    "establishedYear": 2003,
    "operatorType": "財團法人"
  },
  {
    "id": "F0226",
    "name": "松柏康寧護理之家",
    "type": "護理之家",
    "city": "花蓮縣",
    "district": "市區",
    "address": "花蓮縣市區中華路164號之3",
    "phone": "(03) 3158-8144",
    "website": "https://松柏康寧護理之家.com.tw",
    "beds": {
      "total": 50,
      "available": 3,
      "occupied": 47,
      "maleAvailable": 0,
      "femaleAvailable": 3,
      "lastUpdated": "2026-05-12T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 44000,
        "deposit": 44000
      },
      {
        "label": "雙人房",
        "monthly": 52000,
        "deposit": 52000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2024,
    "services": [
      "物理治療",
      "營養諮詢",
      "語言治療",
      "洗腎服務",
      "失智照護",
      "社工服務",
      "復健治療",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.948526,
    "longitude": 121.614065,
    "establishedYear": 2008,
    "operatorType": "財團法人"
  },
  {
    "id": "F0227",
    "name": "松鶴福安養護中心",
    "type": "養護中心",
    "city": "雲林縣",
    "district": "市區",
    "address": "雲林縣市區中華路7號之1",
    "phone": "(05) 2193-3738",
    "website": "https://松鶴福安養護中心.com.tw",
    "beds": {
      "total": 200,
      "available": 115,
      "occupied": 85,
      "maleAvailable": 65,
      "femaleAvailable": 50,
      "lastUpdated": "2026-05-15T15:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 31000,
        "deposit": 31000
      },
      {
        "label": "雙人房",
        "monthly": 39000,
        "deposit": 39000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "心理諮商",
      "物理治療",
      "呼吸照護",
      "語言治療",
      "失智照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.642333,
    "longitude": 120.556807,
    "establishedYear": 1995,
    "operatorType": "私立"
  },
  {
    "id": "F0228",
    "name": "輔大長照服務中心",
    "type": "長照中心",
    "city": "臺南市",
    "district": "西港區",
    "address": "臺南市西港區復興路72號之3",
    "phone": "(06) 3459-2867",
    "website": "https://輔大長照服務中心.com.tw",
    "beds": {
      "total": 120,
      "available": 2,
      "occupied": 118,
      "maleAvailable": 2,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-19T16:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 52000,
        "deposit": 52000
      },
      {
        "label": "雙人房",
        "monthly": 60000,
        "deposit": 60000
      },
      {
        "label": "單人房",
        "monthly": 70000,
        "deposit": 70000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "洗腎服務",
      "管路照護",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.995723,
    "longitude": 120.196852,
    "establishedYear": 2004,
    "operatorType": "私立"
  },
  {
    "id": "F0229",
    "name": "中國長照服務中心",
    "type": "長照中心",
    "city": "臺中市",
    "district": "南屯區",
    "address": "臺中市南屯區中山路241號",
    "phone": "(04) 3414-2830",
    "website": "https://中國長照服務中心.com.tw",
    "beds": {
      "total": 49,
      "available": 14,
      "occupied": 35,
      "maleAvailable": 2,
      "femaleAvailable": 12,
      "lastUpdated": "2026-05-10T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 31000,
        "deposit": 31000
      }
    ],
    "rating": "優等",
    "ratingYear": 2025,
    "services": [
      "藥事服務",
      "安寧療護",
      "復健治療",
      "傷口照護",
      "洗腎服務",
      "語言治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.194889,
    "longitude": 120.676157,
    "establishedYear": 1991,
    "operatorType": "公立"
  },
  {
    "id": "F0230",
    "name": "國泰社區長照中心",
    "type": "長照中心",
    "city": "基隆市",
    "district": "市區",
    "address": "基隆市市區和平路112號之1",
    "phone": "(02) 3187-6698",
    "website": "https://國泰社區長照中心.com.tw",
    "beds": {
      "total": 20,
      "available": 13,
      "occupied": 7,
      "maleAvailable": 2,
      "femaleAvailable": 11,
      "lastUpdated": "2026-05-12T16:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 52000,
        "deposit": 52000
      },
      {
        "label": "雙人房",
        "monthly": 60000,
        "deposit": 60000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "藥事服務",
      "語言治療",
      "職能治療",
      "傷口照護",
      "社工服務",
      "洗腎服務",
      "心理諮商"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 25.179134,
    "longitude": 121.784119,
    "establishedYear": 1991,
    "operatorType": "社團法人"
  },
  {
    "id": "F0231",
    "name": "亞東福安養護中心",
    "type": "養護中心",
    "city": "臺東縣",
    "district": "市區",
    "address": "臺東縣市區信義路391號之2",
    "phone": "(089) 2777-7948",
    "website": "https://亞東福安養護中心.com.tw",
    "beds": {
      "total": 40,
      "available": 13,
      "occupied": 27,
      "maleAvailable": 10,
      "femaleAvailable": 3,
      "lastUpdated": "2026-05-18T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 28000,
        "deposit": 28000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "安寧療護",
      "洗腎服務",
      "失智照護",
      "藥事服務"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.749544,
    "longitude": 121.148156,
    "establishedYear": 1992,
    "operatorType": "私立"
  },
  {
    "id": "F0232",
    "name": "輔大憶家園失智專區",
    "type": "失智專區",
    "city": "宜蘭縣",
    "district": "市區",
    "address": "宜蘭縣市區中正路62號之1",
    "phone": "(03) 3832-8793",
    "website": null,
    "beds": {
      "total": 49,
      "available": 7,
      "occupied": 42,
      "maleAvailable": 4,
      "femaleAvailable": 3,
      "lastUpdated": "2026-05-19T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 53000,
        "deposit": 53000
      },
      {
        "label": "雙人房",
        "monthly": 61000,
        "deposit": 61000
      },
      {
        "label": "單人房",
        "monthly": 71000,
        "deposit": 71000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2024,
    "services": [
      "管路照護",
      "復健治療",
      "物理治療",
      "營養諮詢",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.739419,
    "longitude": 121.756626,
    "establishedYear": 1997,
    "operatorType": "私立"
  },
  {
    "id": "F0233",
    "name": "輔大綜合長照中心",
    "type": "長照中心",
    "city": "嘉義市",
    "district": "市區",
    "address": "嘉義市市區民生路322號之1",
    "phone": "(05) 2819-6834",
    "website": null,
    "beds": {
      "total": 100,
      "available": 32,
      "occupied": 68,
      "maleAvailable": 17,
      "femaleAvailable": 15,
      "lastUpdated": "2026-05-10T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 49000,
        "deposit": 49000
      },
      {
        "label": "雙人房",
        "monthly": 57000,
        "deposit": 57000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "安寧療護",
      "營養諮詢",
      "社工服務",
      "呼吸照護",
      "管路照護",
      "藥事服務",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.41955,
    "longitude": 120.447295,
    "establishedYear": 1996,
    "operatorType": "私立"
  },
  {
    "id": "F0234",
    "name": "彰基福安養護中心",
    "type": "養護中心",
    "city": "南投縣",
    "district": "市區",
    "address": "南投縣市區大同路451號",
    "phone": "(049) 2601-9157",
    "website": null,
    "beds": {
      "total": 30,
      "available": 18,
      "occupied": 12,
      "maleAvailable": 16,
      "femaleAvailable": 2,
      "lastUpdated": "2026-05-15T14:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 50000,
        "deposit": 50000
      },
      {
        "label": "雙人房",
        "monthly": 58000,
        "deposit": 58000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "社工服務",
      "失智照護",
      "心理諮商",
      "語言治療",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.983413,
    "longitude": 120.610056,
    "establishedYear": 1987,
    "operatorType": "私立"
  },
  {
    "id": "F0235",
    "name": "主恩老人安養中心",
    "type": "安養中心",
    "city": "彰化縣",
    "district": "市區",
    "address": "彰化縣市區光復路347號之2",
    "phone": "(04) 3351-9837",
    "website": "https://主恩老人安養中心.com.tw",
    "beds": {
      "total": 50,
      "available": 10,
      "occupied": 40,
      "maleAvailable": 7,
      "femaleAvailable": 3,
      "lastUpdated": "2026-05-14T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 50000,
        "deposit": 50000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "社工服務",
      "管路照護",
      "心理諮商",
      "復健治療",
      "安寧療護",
      "呼吸照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.079151,
    "longitude": 120.617339,
    "establishedYear": 1987,
    "operatorType": "私立"
  },
  {
    "id": "F0236",
    "name": "萬芳安寧照護中心",
    "type": "安寧病房",
    "city": "雲林縣",
    "district": "市區",
    "address": "雲林縣市區中正路445號之2",
    "phone": "(05) 2843-6755",
    "website": null,
    "beds": {
      "total": 200,
      "available": 47,
      "occupied": 153,
      "maleAvailable": 24,
      "femaleAvailable": 23,
      "lastUpdated": "2026-05-12T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 28000,
        "deposit": 28000
      },
      {
        "label": "雙人房",
        "monthly": 36000,
        "deposit": 36000
      },
      {
        "label": "單人房",
        "monthly": 46000,
        "deposit": 46000
      }
    ],
    "rating": "優等",
    "ratingYear": 2025,
    "services": [
      "傷口照護",
      "心理諮商",
      "物理治療",
      "呼吸照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.721805,
    "longitude": 120.609662,
    "establishedYear": 2012,
    "operatorType": "財團法人"
  },
  {
    "id": "F0237",
    "name": "亞東松柏護理之家",
    "type": "護理之家",
    "city": "屏東縣",
    "district": "市區",
    "address": "屏東縣市區中正路431號之1",
    "phone": "(08) 2200-9001",
    "website": null,
    "beds": {
      "total": 150,
      "available": 98,
      "occupied": 52,
      "maleAvailable": 40,
      "femaleAvailable": 58,
      "lastUpdated": "2026-05-10T12:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 37000,
        "deposit": 37000
      },
      {
        "label": "雙人房",
        "monthly": 45000,
        "deposit": 45000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "傷口照護",
      "失智照護",
      "營養諮詢",
      "社工服務",
      "藥事服務",
      "管路照護",
      "呼吸照護",
      "物理治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.750108,
    "longitude": 120.440281,
    "establishedYear": 1990,
    "operatorType": "財團法人"
  },
  {
    "id": "F0238",
    "name": "慈暉養護中心",
    "type": "養護中心",
    "city": "臺中市",
    "district": "沙鹿區",
    "address": "臺中市沙鹿區和平路233號之1",
    "phone": "(04) 3334-5945",
    "website": "https://慈暉養護中心.com.tw",
    "beds": {
      "total": 150,
      "available": 33,
      "occupied": 117,
      "maleAvailable": 30,
      "femaleAvailable": 3,
      "lastUpdated": "2026-05-18T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 38000,
        "deposit": 38000
      },
      {
        "label": "單人房",
        "monthly": 56000,
        "deposit": 56000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2025,
    "services": [
      "安寧療護",
      "物理治療",
      "社工服務",
      "失智照護",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 24.13429,
    "longitude": 120.634202,
    "establishedYear": 2014,
    "operatorType": "私立"
  },
  {
    "id": "F0239",
    "name": "悠然社區日照中心",
    "type": "日照中心",
    "city": "屏東縣",
    "district": "市區",
    "address": "屏東縣市區中華路132號之1",
    "phone": "(08) 3728-8133",
    "website": null,
    "beds": {
      "total": 100,
      "available": 49,
      "occupied": 51,
      "maleAvailable": 15,
      "femaleAvailable": 34,
      "lastUpdated": "2026-05-11T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 29000,
        "deposit": 29000
      },
      {
        "label": "雙人房",
        "monthly": 37000,
        "deposit": 37000
      },
      {
        "label": "單人房",
        "monthly": 47000,
        "deposit": 47000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "物理治療",
      "傷口照護",
      "安寧療護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.63771,
    "longitude": 120.453927,
    "establishedYear": 2004,
    "operatorType": "財團法人"
  },
  {
    "id": "F0240",
    "name": "中山失智照顧專區",
    "type": "失智專區",
    "city": "屏東縣",
    "district": "市區",
    "address": "屏東縣市區復興路309號之2",
    "phone": "(08) 2568-3883",
    "website": "https://中山失智照顧專區.com.tw",
    "beds": {
      "total": 49,
      "available": 23,
      "occupied": 26,
      "maleAvailable": 8,
      "femaleAvailable": 15,
      "lastUpdated": "2026-05-16T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 29000,
        "deposit": 29000
      },
      {
        "label": "單人房",
        "monthly": 47000,
        "deposit": 47000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "語言治療",
      "營養諮詢",
      "復健治療"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.603852,
    "longitude": 120.551441,
    "establishedYear": 1993,
    "operatorType": "私立"
  },
  {
    "id": "F0241",
    "name": "國泰銀髮日照中心",
    "type": "日照中心",
    "city": "臺東縣",
    "district": "市區",
    "address": "臺東縣市區建國路226號之3",
    "phone": "(089) 3583-6134",
    "website": null,
    "beds": {
      "total": 120,
      "available": 48,
      "occupied": 72,
      "maleAvailable": 31,
      "femaleAvailable": 17,
      "lastUpdated": "2026-05-19T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 53000,
        "deposit": 53000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "語言治療",
      "安寧療護",
      "心理諮商",
      "傷口照護",
      "藥事服務",
      "物理治療",
      "管路照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.69209,
    "longitude": 121.099257,
    "establishedYear": 1992,
    "operatorType": "私立"
  },
  {
    "id": "F0242",
    "name": "福安憶家園失智專區",
    "type": "失智專區",
    "city": "屏東縣",
    "district": "市區",
    "address": "屏東縣市區中正路274號之1",
    "phone": "(08) 3321-1570",
    "website": "https://福安憶家園失智專區.com.tw",
    "beds": {
      "total": 40,
      "available": 16,
      "occupied": 24,
      "maleAvailable": 15,
      "femaleAvailable": 1,
      "lastUpdated": "2026-05-16T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 48000,
        "deposit": 48000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2025,
    "services": [
      "藥事服務",
      "復健治療",
      "語言治療",
      "物理治療",
      "傷口照護",
      "呼吸照護",
      "安寧療護",
      "管路照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.697232,
    "longitude": 120.520099,
    "establishedYear": 2001,
    "operatorType": "私立"
  },
  {
    "id": "F0243",
    "name": "中國長照服務中心",
    "type": "長照中心",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區和平路34號之2",
    "phone": "(03) 2561-2312",
    "website": null,
    "beds": {
      "total": 100,
      "available": 27,
      "occupied": 73,
      "maleAvailable": 25,
      "femaleAvailable": 2,
      "lastUpdated": "2026-05-18T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 50000,
        "deposit": 50000
      },
      {
        "label": "雙人房",
        "monthly": 58000,
        "deposit": 58000
      },
      {
        "label": "單人房",
        "monthly": 68000,
        "deposit": 68000
      }
    ],
    "rating": "丙等",
    "ratingYear": 2025,
    "services": [
      "營養諮詢",
      "語言治療",
      "安寧療護",
      "失智照護",
      "藥事服務",
      "洗腎服務"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.855904,
    "longitude": 121.002757,
    "establishedYear": 1988,
    "operatorType": "財團法人"
  },
  {
    "id": "F0244",
    "name": "恩主公老人安養中心",
    "type": "安養中心",
    "city": "高雄市",
    "district": "大樹區",
    "address": "高雄市大樹區中華路352號之2",
    "phone": "(07) 2226-3585",
    "website": "https://恩主公老人安養中心.com.tw",
    "beds": {
      "total": 20,
      "available": 8,
      "occupied": 12,
      "maleAvailable": 3,
      "femaleAvailable": 5,
      "lastUpdated": "2026-05-13T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 45000,
        "deposit": 45000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "藥事服務",
      "物理治療",
      "管路照護",
      "職能治療",
      "安寧療護",
      "失智照護",
      "營養諮詢",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 22.686761,
    "longitude": 120.242362,
    "establishedYear": 2010,
    "operatorType": "公立"
  },
  {
    "id": "F0245",
    "name": "成大仁愛護理之家",
    "type": "護理之家",
    "city": "新竹市",
    "district": "市區",
    "address": "新竹市市區和平路223號之3",
    "phone": "(03) 2345-1815",
    "website": "https://成大仁愛護理之家.com.tw",
    "beds": {
      "total": 200,
      "available": 76,
      "occupied": 124,
      "maleAvailable": 11,
      "femaleAvailable": 65,
      "lastUpdated": "2026-05-17T09:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 40000,
        "deposit": 40000
      },
      {
        "label": "單人房",
        "monthly": 58000,
        "deposit": 58000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "職能治療",
      "呼吸照護",
      "管路照護",
      "洗腎服務",
      "失智照護",
      "語言治療"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.875559,
    "longitude": 120.909776,
    "establishedYear": 1997,
    "operatorType": "社團法人"
  },
  {
    "id": "F0246",
    "name": "耕莘憶家園失智專區",
    "type": "失智專區",
    "city": "苗栗縣",
    "district": "市區",
    "address": "苗栗縣市區復興路299號之3",
    "phone": "(037) 2579-4102",
    "website": null,
    "beds": {
      "total": 40,
      "available": 14,
      "occupied": 26,
      "maleAvailable": 13,
      "femaleAvailable": 1,
      "lastUpdated": "2026-05-17T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 31000,
        "deposit": 31000
      },
      {
        "label": "雙人房",
        "monthly": 39000,
        "deposit": 39000
      },
      {
        "label": "單人房",
        "monthly": 49000,
        "deposit": 49000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2025,
    "services": [
      "藥事服務",
      "管路照護",
      "復健治療",
      "呼吸照護",
      "物理治療",
      "傷口照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 24.582829,
    "longitude": 120.887173,
    "establishedYear": 2010,
    "operatorType": "財團法人"
  },
  {
    "id": "F0247",
    "name": "彰基憶家園失智專區",
    "type": "失智專區",
    "city": "嘉義市",
    "district": "市區",
    "address": "嘉義市市區中華路496號",
    "phone": "(05) 2964-6804",
    "website": "https://彰基憶家園失智專區.com.tw",
    "beds": {
      "total": 30,
      "available": 17,
      "occupied": 13,
      "maleAvailable": 17,
      "femaleAvailable": 0,
      "lastUpdated": "2026-05-14T10:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 26000,
        "deposit": 26000
      },
      {
        "label": "單人房",
        "monthly": 44000,
        "deposit": 44000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2025,
    "services": [
      "藥事服務",
      "職能治療",
      "語言治療",
      "復健治療",
      "物理治療",
      "呼吸照護",
      "安寧療護",
      "管路照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.556404,
    "longitude": 120.476402,
    "establishedYear": 2014,
    "operatorType": "私立"
  },
  {
    "id": "F0248",
    "name": "慈暉長期照顧中心",
    "type": "長照中心",
    "city": "南投縣",
    "district": "市區",
    "address": "南投縣市區信義路392號之1",
    "phone": "(049) 3531-6907",
    "website": "https://慈暉長期照顧中心.com.tw",
    "beds": {
      "total": 60,
      "available": 38,
      "occupied": 22,
      "maleAvailable": 8,
      "femaleAvailable": 30,
      "lastUpdated": "2026-05-17T08:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 41000,
        "deposit": 41000
      },
      {
        "label": "雙人房",
        "monthly": 49000,
        "deposit": 49000
      },
      {
        "label": "單人房",
        "monthly": 59000,
        "deposit": 59000
      }
    ],
    "rating": "未評鑑",
    "ratingYear": 2024,
    "services": [
      "呼吸照護",
      "職能治療",
      "心理諮商",
      "社工服務",
      "失智照護"
    ],
    "acceptsGovernmentSubsidy": false,
    "latitude": 23.900724,
    "longitude": 120.631397,
    "establishedYear": 1999,
    "operatorType": "私立"
  },
  {
    "id": "F0249",
    "name": "亞東綜合長照中心",
    "type": "長照中心",
    "city": "花蓮縣",
    "district": "市區",
    "address": "花蓮縣市區建國路93號之1",
    "phone": "(03) 3148-8949",
    "website": "https://亞東綜合長照中心.com.tw",
    "beds": {
      "total": 80,
      "available": 47,
      "occupied": 33,
      "maleAvailable": 31,
      "femaleAvailable": 16,
      "lastUpdated": "2026-05-14T17:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 26000,
        "deposit": 26000
      },
      {
        "label": "雙人房",
        "monthly": 34000,
        "deposit": 34000
      },
      {
        "label": "單人房",
        "monthly": 44000,
        "deposit": 44000
      }
    ],
    "rating": "乙等",
    "ratingYear": 2024,
    "services": [
      "心理諮商",
      "語言治療",
      "管路照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 23.926785,
    "longitude": 121.535972,
    "establishedYear": 1985,
    "operatorType": "財團法人"
  },
  {
    "id": "F0250",
    "name": "福安康寧護理之家",
    "type": "護理之家",
    "city": "高雄市",
    "district": "岡山區",
    "address": "高雄市岡山區信義路233號之2",
    "phone": "(07) 2249-7458",
    "website": "https://福安康寧護理之家.com.tw",
    "beds": {
      "total": 100,
      "available": 55,
      "occupied": 45,
      "maleAvailable": 21,
      "femaleAvailable": 34,
      "lastUpdated": "2026-05-10T13:00:00Z"
    },
    "fees": [
      {
        "label": "一般房型（4-6人房）",
        "monthly": 25000,
        "deposit": 25000
      },
      {
        "label": "單人房",
        "monthly": 43000,
        "deposit": 43000
      }
    ],
    "rating": "甲等",
    "ratingYear": 2024,
    "services": [
      "心理諮商",
      "失智照護",
      "管路照護"
    ],
    "acceptsGovernmentSubsidy": true,
    "latitude": 22.55162,
    "longitude": 120.294637,
    "establishedYear": 2013,
    "operatorType": "私立"
  }
];
