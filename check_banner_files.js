const fs = require('fs');

const files = fs.readdirSync('old_design/assets/images');
const matching = files.filter(f => /^(?:1|2|3|s4|banner)/i.test(f));
console.log('Matching files in old_design/assets/images:', matching);

// Check if 1.webp, 2.webp, 3.webp, s4.webp exist or what their names are
['1.webp', '2.webp', '3.webp', 's4.webp', 'fashion-design-banner.webp', 'banner-6.webp'].forEach(f => {
  console.log(`${f} exists?`, fs.existsSync('old_design/assets/images/' + f));
});

