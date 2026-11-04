const fs = require('fs');
const glob = require('path');

['new_folder_1', 'new_folder_2', 'new_folder_3'].forEach(folder => {
  console.log('=== Folder: ' + folder + ' ===');
  const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));
  let totalImgs = 0;
  const uniqueImgs = new Set();
  files.forEach(f => {
    const html = fs.readFileSync(folder + '/' + f, 'utf8');
    const imgs = [...html.matchAll(/(?:src|data-src)=["']([^"']+\.(?:webp|jpg|png|svg))["']/gi)].map(m => m[1]);
    totalImgs += imgs.length;
    imgs.forEach(i => uniqueImgs.add(i));
  });
  console.log(`Files: ${files.length}, Total <img> references: ${totalImgs}, Unique images: ${uniqueImgs.size}`);
  console.log('Sample images used:', [...uniqueImgs].slice(0, 10));
});
