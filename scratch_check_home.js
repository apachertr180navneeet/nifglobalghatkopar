const fs = require('fs');

const html = fs.readFileSync('old_design/index.html', 'utf8');

// All headings
const headings = [...html.matchAll(/<h[1234][^>]*>(.*?)<\/h[1234]>/gi)]
  .map(m => m[1].replace(/<[^>]+>/g, '').trim())
  .filter(t => t.length > 0 && !['QUICK LINKS', 'OUR PHONES', 'WORKING HOURS', 'OUR ADDRESS'].includes(t));
console.log('Homepage Headings:', headings);

// All images
const imgs = [...html.matchAll(/data-src=["']([^"']+\.(?:webp|jpg|png))["']/gi)].map(m => m[1]);
console.log('Homepage Images count:', imgs.length);
console.log('Unique Images:', [...new Set(imgs)]);
