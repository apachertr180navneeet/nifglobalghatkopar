const fs = require('fs');

const requiredSections = [
  'Hero Section with Celebrity Mentors (bg-14.webp)',
  'Floating Stats Bar (970+ Students, 94% Success, 97% Satisfaction)',
  'Our Courses (Fashion, Interior, Management)',
  'Official Live Banners Showcase (e62f9c1d, 1ca66eaf, 3-1024x512, img_5)',
  'About Institute (Best Fashion & Interior Institute in Mumbai, 4-grid AP/img_5/img_3/img_4)',
  'Our Partners / Accreditations (Medhavi, Lakme, London, NSDC, Skill India, LST)',
  'Why Choose NIF Global Ghatkopar (3-YEARS-COURSE-First-Year.webp)',
  'Specialized Institutes (School of Management, School of Beauty, New York Institute)',
  'Celebrity Mentors Grid (Ashley Rebello, Manish Malhotra, Ananya Panday, Gauri Khan, Twinkle Khanna)',
  'International Mentors Grid (Neil, Pete, Sarah, Simon, Adrian, Fabio, Joseph, Laura, Chantal)',
  'What Our Students Say (Vanshika, Zoya Khan, Khushi, Mahek, Sanika, Bhavika, Sakshi)',
  'Latest Articles and Blog (3 real articles)',
  'Inspiring Stories / Testimonials (Kavya Patel, Vedant Gaikar, Mitisha, Dhara Shah)',
  'FAQ Section (Accordion with 5 live site FAQs)',
  'Enquiry Form & Modal',
  'Footer (Logo, Quick links, Phones, Address, Hours, Socials)'
];

['new_folder_1', 'new_folder_2', 'new_folder_3'].forEach(dir => {
  const file = dir + '/index.html';
  const html = fs.readFileSync(file, 'utf8');
  console.log(`\n=================== ${dir.toUpperCase()} ===================`);
  console.log('Size:', html.length, 'bytes');
  
  const checks = {
    'bg-14.webp': html.includes('bg-14.webp'),
    '970+ Students': html.includes('970+'),
    'Our Courses': html.includes('Fashion Design') && html.includes('Interior Design'),
    'Official Banners': html.includes('WhatsApp-Image-2025-03-18-at-23.03.18_e62f9c1d'),
    'About 4-grid images': html.includes('AP.webp') || html.includes('img_5.webp'),
    'Partners': html.includes('Medhavi_Skills_University_Logo') || html.includes('Lakme_Fashion_Week'),
    'Why Choose NIF': html.includes('Why Choose NIF Global'),
    'Specialized Institutes': html.includes('School of Management') || html.includes('School of Beauty'),
    'Celebrity Mentors': html.includes('Ashley Rebello') || html.includes('Artboard1.jpg') || html.includes('8.jpg'),
    'International Mentors': html.includes('Neil Holbrook') || html.includes('Pete Avery') || html.includes('Fabio Ciquera'),
    'Student Testimonials': html.includes('Vanshika') || html.includes('ZOYAKHAN'),
    'Blog Articles': html.includes('Choosing-Mumbais-Interior-Design-Institute') || html.includes('How to Choose the Best Interior Design Institute'),
    'Inspiring Stories': html.includes('Kavya Patel') || html.includes('Vedant Gaikar'),
    'FAQs': html.includes('FAQ') || html.includes('scholarships'),
    'Enquiry Form': html.includes('form') && html.includes('enquiry'),
    'Footer': html.includes('Sanghvi Square') && html.includes('8433')
  };

  for (const [k, v] of Object.entries(checks)) {
    console.log(`  [${v ? '✓' : '✗'}] ${k}`);
  }
});
