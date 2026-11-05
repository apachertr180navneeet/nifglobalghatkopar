const fs = require('fs');

const css = fs.readFileSync('old_design/site_style.css', 'utf8');
const idx = css.indexOf('2d124ba1');
if (idx !== -1) {
  console.log(css.slice(idx, idx + 2000));
}

