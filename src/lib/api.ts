import type { Facility, SearchFilters, SortBy } from '@/types';

// Mock API: simulate fetching from n8n backend
const DELAY = 300;

export async function fetchFacilities(
  filters: SearchFilters = {},
  sortBy: SortBy = 'availability',
  query: string = ''
): Promise<Facility[]> {
  // Dynamic import to avoid bundling the large data file into initial chunk
  const { facilities } = await import('@/data/facilities');

  await new Promise(r => setTimeout(r, DELAY));

  let result = [...facilities];

  // Filter
  if (filters.city) result = result.filter(f => f.city === filters.city);
  if (filters.type) result = result.filter(f => f.type === filters.type);
  if (filters.minBeds) result = result.filter(f => f.beds.available >= filters.minBeds!);
  if (filters.maxFee) {
    result = result.filter(f => {
      const minFee = Math.min(...f.fees.map(x => x.monthly));
      return minFee <= filters.maxFee!;
    });
  }
  if (filters.rating) result = result.filter(f => f.rating === filters.rating);
  if (filters.services?.length) {
    result = result.filter(f =>
      filters.services!.every(s => f.services.includes(s))
    );
  }
  if (filters.subsidy) result = result.filter(f => f.acceptsGovernmentSubsidy);

  // LTC 3.0 features filter
  if (filters.ltc3Features?.length) {
    result = result.filter(f =>
      filters.ltc3Features!.every(ltc => f.ltc3Features?.includes(ltc) ?? false)
    );
  }

  // Search
  if (query.trim()) {
    const q = query.trim().toLowerCase();
    result = result.filter(f =>
      f.name.toLowerCase().includes(q) ||
      f.district.includes(q) ||
      f.address.includes(q) ||
      f.services.some(s => s.includes(q))
    );
  }

  // Sort
  switch (sortBy) {
    case 'availability':
      result.sort((a, b) => b.beds.available - a.beds.available);
      break;
    case 'fee_asc':
      result.sort((a, b) => Math.min(...a.fees.map(x => x.monthly)) - Math.min(...b.fees.map(x => x.monthly)));
      break;
    case 'fee_desc':
      result.sort((a, b) => Math.min(...b.fees.map(x => x.monthly)) - Math.min(...a.fees.map(x => x.monthly)));
      break;
    case 'rating': {
      const rank: Record<string, number> = { '優等': 5, '甲等': 4, '乙等': 3, '丙等': 2, '丁等': 1, '未評鑑': 0 };
      result.sort((a, b) => (rank[b.rating] || 0) - (rank[a.rating] || 0));
      break;
    }
    case 'name':
      result.sort((a, b) => a.name.localeCompare(b.name, 'zh-TW'));
      break;
  }

  return result;
}

export async function fetchFacilityById(id: string): Promise<Facility | null> {
  const { facilities } = await import('@/data/facilities');
  await new Promise(r => setTimeout(r, 100));
  return facilities.find(f => f.id === id) || null;
}
