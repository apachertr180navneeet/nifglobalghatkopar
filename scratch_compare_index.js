const fs = require('fs');

['new_folder_1/index.html', 'new_folder_2/index.html', 'new_folder_3/index.html'].forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  console.log('=== ' + f + ' ===');
  const headings = [...html.matchAll(/<h[23][^>]*>(.*?)<\/h[23]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(h => h.length > 0);
  console.log('Headings:', headings);
});
