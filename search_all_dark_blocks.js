const fs = require('fs');
const path = require('path');

const folders = ['new_folder_1', 'new_folder_2', 'new_folder_3', 'new_folder_4', 'new_folder_5', 'new_folder_6', 'new_folder_7', 'new_folder_8', 'new_folder_9'];

const results = [];

folders.forEach(dir => {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
  files.forEach(f => {
    const c = fs.readFileSync(path.join(dir, f), 'utf8');
    const matches = c.match(/<div[^>]+style=["'][^"']*background:[^"']*linear-gradient[^"']*["'][^>]*>/gi) || [];
    matches.forEach(m => {
      results.push(`${dir}/${f}: ${m}`);
    });
  });
});

console.log('Total gradient containers found:', results.length);
results.forEach(r => console.log(r));
