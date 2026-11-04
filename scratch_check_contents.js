const fs = require('fs');

['new_folder_1', 'new_folder_2'].forEach(folder => {
  console.log('=============================');
  console.log('CHECKING FOLDER: ' + folder);
  ['why-us.html', 'fashion-design.html', 'interior-design.html', 'gallery.html', 'testimonial.html', 'blog.html'].forEach(page => {
    const p = folder + '/' + page;
    const html = fs.readFileSync(p, 'utf8');
    const hasOriginalBlogImg = html.includes('Choosing-Mumbais-Interior-Design-Institute.png');
    const hasVanshika = html.includes('VANSHIKA-1.webp');
    const hasCourseImg = html.includes('One-Year-Foundation-Program');
    const hasWhyUsIcons = html.includes('fashion-week01.webp');
    console.log(`- ${page}: length=${html.length}, hasBlogImg=${hasOriginalBlogImg}, hasVanshika=${hasVanshika}, hasCourseImg=${hasCourseImg}, hasWhyUsIcons=${hasWhyUsIcons}`);
  });
});
