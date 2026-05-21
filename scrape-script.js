/**
 * data.gov.tw 資料集匯出腳本
 * 
 * 使用方法：
 * 1. 打開 https://data.gov.tw
 * 2. 搜尋你想下載的關鍵字（例如：護理之家、長照機構）
 * 3. 按 F12 打開開發者工具 → 切到 Console 頁籤
 * 4. 貼上這段程式碼，按 Enter 執行
 * 5. 會自動下載一個 JSON 檔案
 * 
 * 可修改下方的 SEARCH_QUERIES 陣列來搜尋不同關鍵字
 */

const SEARCH_QUERIES = [
  '護理之家',
  '長照機構',
  '老人福利機構',
  '長期照顧',
  '安養機構',
];

async function scrapeDataGov() {
  const allResults = [];
  
  for (const query of SEARCH_QUERIES) {
    console.log(`🔍 搜尋: ${query}`);
    
    // 使用 data.gov.tw 的 Nuxt API (__NUXT__ state 裡的 fetch)
    const response = await fetch(
      `https://data.gov.tw/datasets/search?q=${encodeURIComponent(query)}`,
      { headers: { 'Accept': 'text/html' } }
    );
    const html = await response.text();
    
    // 從 HTML 中提取 __NUXT__ 資料
    const nuxtMatch = html.match(/<script type="application\/json"[^>]*id="__NUXT_DATA__"[^>]*>(.*?)<\/script>/);
    if (!nuxtMatch) {
      console.log(`  ❌ 找不到資料`);
      continue;
    }
    
    // 如果找不到 __NUXT_DATA__，試試看攔截 fetch 請求
    console.log(`  📄 頁面已載入 (${html.length} bytes)`);
    
    // 直接從頁面的 Nuxt payload 提取
    const jsonScripts = html.match(/<script type="application\/json"[^>]*>(.*?)<\/script>/g);
    if (jsonScripts) {
      for (const script of jsonScripts) {
        const content = script.replace(/<[^>]*>/g, '');
        try {
          const data = JSON.parse(content);
          console.log(`  ✅ JSON 資料: ${content.length} bytes`);
          
          // 搜尋資料集中的關鍵資訊
          const str = JSON.stringify(data);
          const hasDownload = str.includes('download') || str.includes('.csv');
          const hasName = str.includes('機構') || str.includes('護理') || str.includes('長照');
          console.log(`     含下載連結: ${hasDownload}, 含機構名稱: ${hasName}`);
        } catch(e) {
          // skip
        }
      }
    }
  }
  
  console.log('\n⚠️ 如果上面顯示找不到資料，代表 data.gov.tw 的搜尋結果是動態載入的。');
  console.log('請改用以下方法：');
  console.log('1. 在頁面上手動搜尋');
  console.log('2. 看到結果後，在 Console 輸入: copyNuxtData()');
}

// 備用方案：直接從已載入的頁面提取 Nuxt data
function copyNuxtData() {
  if (window.__NUXT__) {
    const data = JSON.stringify(window.__NUXT__, null, 2);
    const blob = new Blob([data], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `data-gov-tw-${Date.now()}.json`;
    a.click();
    console.log('✅ 已下載 __NUXT__ 資料');
  } else {
    console.log('❌ 沒有 __NUXT__ 資料。請先在頁面上搜尋，等結果出現後再執行。');
    
    // 嘗試攔截 network 請求
    console.log('🔍 請在 Network 頁籤中尋找包含 "search" 或 "dataset" 的 XHR 請求');
    console.log('   找到後複製 Response 內容給我');
  }
}

scrapeDataGov();
