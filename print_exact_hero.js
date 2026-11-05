const fs = require('fs');

const html = fs.readFileSync('old_design/index.html', 'utf8');
const headerEnd = html.indexOf('</header>');
console.log(html.slice(headerEnd, headerEnd + 4000));

