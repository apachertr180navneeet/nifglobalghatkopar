const fs = require('fs');
const path = require('path');

const folders = [
  'new_folder_1',
  'new_folder_2',
  'new_folder_3',
  'new_folder_4',
  'new_folder_5',
  'new_folder_6',
  'new_folder_7',
  'new_folder_8',
  'new_folder_9'
];

folders.forEach(dir => {
  const file = path.join(dir, 'index.html');
  if (!fs.existsSync(file)) return;

  let html = fs.readFileSync(file, 'utf8');

  // Find the CTA Banner and make text 100% bright white with explicit inline styling
  const oldCtaRegex = /<h4[^>]*>\s*Admissions Open For 2026 Academic Batch!?\s*<\/h4>\s*<p[^>]*>\s*Early bird merit scholarships[\s\S]*?<\/p>/gi;

  const newCta = `<h4 class="fw-bold mb-1" style="color: #ffffff !important; font-size: 1.45rem; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">Admissions Open For 2026 Academic Batch!</h4>
            <p class="mb-0" style="color: #ffffff !important; opacity: 0.95; font-size: 1rem; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">Early bird merit scholarships &amp; flexible zero-cost EMI installment options available.</p>`;

  if (oldCtaRegex.test(html)) {
    html = html.replace(oldCtaRegex, newCta);
    fs.writeFileSync(file, html, 'utf8');
    console.log(`[✓] Fixed CTA banner text visibility in ${dir}/index.html`);
  } else {
    console.log(`[!] Regex did not match in ${dir}/index.html`);
  }
});
