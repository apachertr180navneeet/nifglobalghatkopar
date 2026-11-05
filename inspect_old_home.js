const fs = require('fs');
const html = fs.readFileSync('old_design/index.html', 'utf8');

// Find all top-level parent containers: class="elementor-element elementor-element-xxxx e-flex e-con-boxed e-con e-parent"
const parentRegex = /<div[^>]*class="[^"]*e-parent[^"]*"[^>]*data-id="([^"]*)"[^>]*>([\s\S]*?)(?=(?:<div[^>]*class="[^"]*e-parent[^"]*"[^>]*data-id=|$))/gi;
const matches = [...html.matchAll(parentRegex)];

console.log('Total e-parents found:', matches.length);
matches.forEach((m, idx) => {
  const id = m[1];
  const inner = m[2];
  // extract headings inside
  const heads = [...inner.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)].map(h => h[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '));
  // extract images inside
  const images = [...inner.matchAll(/<img[^>]+src="([^">]+)"/gi)].map(img => img[1].split('/').pop());
  // first 100 characters of text
  const text = inner.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().substring(0, 150);
  console.log(`\n--- SECTION ${idx + 1} (id=${id}) ---`);
  console.log('Headings:', heads);
  console.log('Images:', images);
  console.log('Text preview:', text);
});
