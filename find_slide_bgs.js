const fs = require('fs');

const classes = ['92c9ea8', 'c86e4a0', 'c62c466', '0b0c377'];
classes.forEach(cls => {
  console.log('Searching for ' + cls);
  // Search in old_design/assets/css
  const cssFiles = fs.readdirSync('old_design/assets/css').filter(f => f.endsWith('.css'));
  cssFiles.forEach(cf => {
    const content = fs.readFileSync('old_design/assets/css/' + cf, 'utf8');
    const idx = content.indexOf(cls);
    if (idx !== -1) {
      console.log(`Found in ${cf}:`);
      console.log(content.slice(Math.max(0, idx - 50), idx + 250));
    }
  });

  // Search in old_design/index.html
  const html = fs.readFileSync('old_design/index.html', 'utf8');
  const idx = html.indexOf(cls);
  if (idx !== -1) {
    console.log(`Found in index.html:`);
    console.log(html.slice(Math.max(0, idx - 100), idx + 300));
  }
});

