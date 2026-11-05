const fs = require('fs');
const path = require('path');

function searchDir(dir, pattern) {
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      searchDir(full, pattern);
    } else if (item.endsWith('.css') || item.endsWith('.html') || item.endsWith('.json')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes(pattern)) {
        console.log(`Found "${pattern}" in: ${full}`);
        const idx = content.indexOf(pattern);
        console.log(content.slice(Math.max(0, idx - 100), idx + 250));
      }
    }
  }
}

searchDir('old_design', '92c9ea8');
searchDir('old_design', 'BEST INTERIOR INTERIOR DESIGN INSTITUTE');

