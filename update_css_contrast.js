const fs = require('fs');
const path = require('path');

const cssTargets = [
  'new_folder_1/assets/css/new_style.css',
  'new_folder_2/assets/css/editorial.css',
  'new_folder_3/assets/css/design3.css',
  'new_folder_4/assets/css/kitchor5.css',
  'new_folder_5/assets/css/kitchor10.css',
  'new_folder_6/assets/css/nifandheri.css',
  'new_folder_7/assets/css/mint.css',
  'new_folder_8/assets/css/eduglobal.css',
  'new_folder_9/assets/css/edupls.css'
];

const rule = `

/* Universal High Contrast Protection for Text in Dark Containers */
.text-white,
.text-white h1,
.text-white h2,
.text-white h3,
.text-white h4,
.text-white h5,
.text-white h6,
.text-white p,
.text-white span {
  color: #FFFFFF !important;
}
`;

cssTargets.forEach(target => {
  if (fs.existsSync(target)) {
    fs.appendFileSync(target, rule, 'utf8');
    console.log(`[✓] Appended contrast rule to ${target}`);
  }
});
