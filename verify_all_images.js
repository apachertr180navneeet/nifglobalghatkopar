const fs = require('fs');

const requiredImages = [
  'Logo.webp',
  'pdf-1.webp',
  'bg-14.webp',
  'Gauri-khan.png.webp',
  'Manish-Malhotra-Celebrity-min.png.webp',
  'Ananya-Panday-Celebrity-min.png.webp',
  'Twinkle-khanna.png.webp',
  'fashion-design-banner.webp',
  'banner-6.webp',
  'WhatsApp-Image-2026-03-10-at-12.52.16-PM.jpeg',
  'WhatsApp-Image-2025-03-18-at-23.03.18_e62f9c1d-1024x512.webp',
  'WhatsApp-Image-2025-03-18-at-23.03.18_1ca66eaf-1024x512.webp',
  '3-1024x512.webp',
  'img_5.jpg',
  'AP.webp',
  'img_5.webp',
  'img_3.webp',
  'img_4.webp',
  'Medhavi_Skills_University_Logo.webp',
  'Lakme_Fashion_Week_2021.svg.webp',
  'd90179_324d49a29b2c4945b3d93d6dc1d291famv2.webp',
  '1-1.webp',
  '1683634127NSDC-1.webp',
  'download.webp',
  'LST.webp',
  'pixi.webp',
  '3-YEARS-COURSE-First-Year.webp',
  'WhatsApp-Image-2025-03-19-at-00.06.54.webp',
  'WhatsApp-Image-2025-03-19-at-00.06.54-1.webp',
  'WhatsApp-Image-2025-03-19-at-00.06.54-2.webp',
  '8.jpg',
  'Artboard1.jpg',
  '14.png',
  '13.png',
  '12.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  'students-3.png.webp',
  'VANSHIKA-1.webp',
  'ZOYAKHAN.webp',
  'khushiparekh.webp',
  'MAHEKJADHAV.webp',
  'SANIKARANE.webp',
  'bhavikagehani.webp',
  'SAKSHIBADALA.webp',
  'Choosing-Mumbais-Interior-Design-Institute.png',
  'blog-Images-04.png',
  'Blog-Images-03.png',
  'kavyapatel.webp',
  'vedantgaikar.webp',
  'mitisha.webp',
  'dharashah.webp',
  'White-Logo0.webp'
];

['new_folder_1', 'new_folder_2', 'new_folder_3'].forEach(dir => {
  let missing = [];
  requiredImages.forEach(img => {
    if (!fs.existsSync(`${dir}/assets/images/${img}`)) {
      missing.push(img);
    }
  });
  console.log(`${dir}: Total required ${requiredImages.length}, Missing: ${missing.length}`);
  if (missing.length > 0) console.log('  Missing list:', missing);
});
