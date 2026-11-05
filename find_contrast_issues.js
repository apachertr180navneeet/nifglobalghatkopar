const fs = require('fs');
const path = require('path');

const folders = ['new_folder_1', 'new_folder_2', 'new_folder_3', 'new_folder_4', 'new_folder_5', 'new_folder_6', 'new_folder_7', 'new_folder_8', 'new_folder_9'];

const issues = [];

folders.forEach(dir => {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
  files.forEach(f => {
    const c = fs.readFileSync(path.join(dir, f), 'utf8');
    
    // Check for CTA Banner heading
    if (c.includes('Admissions Open For 2026 Academic Batch')) {
      issues.push(`${dir}/${f}: CTA Banner heading needs text-white`);
    }

    // Check footer headings
    // Check hero captions
    // Check dark cards
  });
});

console.log('Identified files needing contrast fix:', issues.length);
issues.slice(0, 15).forEach(i => console.log(' - ' + i));
