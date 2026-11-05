const fs = require('fs');

const THEME_ACCENTS = {
  'new_folder_1/assets/css/new_style.css': { text: '#111827', accent: '#E31E24' },
  'new_folder_2/assets/css/editorial.css': { text: '#111111', accent: '#D4AF37' },
  'new_folder_3/assets/css/design3.css': { text: '#0F172A', accent: '#E11D48' },
  'new_folder_4/assets/css/kitchor5.css': { text: '#2A2521', accent: '#C59B27' },
  'new_folder_5/assets/css/kitchor10.css': { text: '#1E293B', accent: '#F0A500' },
  'new_folder_6/assets/css/nifandheri.css': { text: '#0F172A', accent: '#D71920' },
  'new_folder_7/assets/css/mint.css': { text: '#1E293B', accent: '#10B981' },
  'new_folder_8/assets/css/eduglobal.css': { text: '#0A1C33', accent: '#EAA41A' },
  'new_folder_9/assets/css/edupls.css': { text: '#1E293B', accent: '#4F46E5' }
};

Object.entries(THEME_ACCENTS).forEach(([cssFile, colors]) => {
  if (!fs.existsSync(cssFile)) return;

  const rule = `

/* ==========================================================
   UNIFIED HEADER NAVIGATION HOVER & ACTIVE STATE (EXACT SCREENSHOT)
   ========================================================== */
.navbar-nav .nav-link {
  color: ${colors.text} !important;
  font-weight: 700 !important;
  transition: all 0.2s ease !important;
}
.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
  color: ${colors.accent} !important;
}
`;

  fs.appendFileSync(cssFile, rule, 'utf8');
  console.log(`[✓] Injected active/hover nav link styles into ${cssFile}`);
});
