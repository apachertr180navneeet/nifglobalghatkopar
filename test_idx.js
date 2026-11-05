const fs = require('fs');

const html = fs.readFileSync('old_design/index.html', 'utf8');
console.log('mainStart:', html.indexOf('<main'));
console.log('coursesStart:', html.indexOf('Our Courses'));
console.log('Length of index.html:', html.length);

