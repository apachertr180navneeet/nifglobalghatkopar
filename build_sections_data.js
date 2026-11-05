const fs = require('fs');
const html = fs.readFileSync('old_design/index.html', 'utf8');

// Let's create an extractor helper
function getSection(startStr, endStr) {
  const start = html.indexOf(startStr);
  if (start === -1) return null;
  if (!endStr) return html.substring(start, start + 3000);
  const end = html.indexOf(endStr, start);
  if (end === -1) return html.substring(start, start + 3000);
  return html.substring(start, end);
}

// 1. Courses Section
console.log('--- 1. COURSES ---');
console.log(getSection('Our Courses', 'WhatsApp-Image-2025-03-18-at-23.03.18_e62f9c1d'));

// 2. About section
console.log('--- 2. ABOUT ---');
console.log(getSection('Best Fashion &amp; Interior Design Institute in Mumbai', 'Our Partners'));

// 3. Why Choose section
console.log('--- 3. WHY CHOOSE ---');
console.log(getSection('Why Choose NIF Global, Ghatkopar?', 'NIF Global’s Institutes'));

// 4. Institutes section
console.log('--- 4. INSTITUTES ---');
console.log(getSection('NIF Global’s Institutes', 'CELEBRITY MENTORS'));

// 5. Mentors
console.log('--- 5. CELEBRITY MENTORS ---');
console.log(getSection('CELEBRITY MENTORS', 'NIF INTERNATIONAL MENTORS'));

console.log('--- 6. INTERNATIONAL MENTORS ---');
console.log(getSection('NIF INTERNATIONAL MENTORS', 'What Our Students Say'));

// 7. Student reviews
console.log('--- 7. WHAT OUR STUDENTS SAY ---');
console.log(getSection('What Our Students Say', 'Latest Articles and Blog'));

// 8. Blogs
console.log('--- 8. BLOGS ---');
console.log(getSection('Latest Articles and Blog', 'Inspiring Stories'));

// 9. Inspiring stories
console.log('--- 9. INSPIRING STORIES ---');
console.log(getSection('Inspiring Stories', 'FAQ\'S'));

// 10. FAQs
console.log('--- 10. FAQS ---');
console.log(getSection('FAQ\'S', 'Enquire Now'));
