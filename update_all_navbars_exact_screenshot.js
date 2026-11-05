const fs = require('fs');
const path = require('path');

const THEME_BUTTONS = {
  new_folder_1: 'btn btn-danger text-white',
  new_folder_2: 'btn btn-dark text-white',
  new_folder_3: 'btn text-white',
  new_folder_4: 'btn-k5-primary text-white',
  new_folder_5: 'btn-k10-primary text-dark',
  new_folder_6: 'btn-andheri-primary text-white',
  new_folder_7: 'btn-mint-primary text-white',
  new_folder_8: 'btn-eduglobal-primary text-dark',
  new_folder_9: 'btn-edupls-coral text-white'
};

const THEME_NAV_CLASSES = {
  new_folder_1: 'nif-navbar',
  new_folder_2: 'editorial-navbar',
  new_folder_3: 'd3-navbar',
  new_folder_4: 'k5-navbar',
  new_folder_5: 'k10-navbar',
  new_folder_6: 'andheri-navbar',
  new_folder_7: 'mint-navbar',
  new_folder_8: 'eduglobal-navbar',
  new_folder_9: 'edupls-navbar'
};

const pages = [
  'index.html',
  'about-us.html',
  'fashion-design.html',
  'interior-design.html',
  'why-us.html',
  'gallery.html',
  'testimonial.html',
  'blog.html',
  'contact-us.html'
];

function buildExactNavbar(folder, pageName) {
  const btnClass = THEME_BUTTONS[folder];
  const navClass = THEME_NAV_CLASSES[folder];

  const isA = (key) => {
    if (key === 'index' && pageName === 'index.html') return 'active';
    if (key === 'courses' && (pageName === 'fashion-design.html' || pageName === 'interior-design.html')) return 'active';
    if (key === 'about' && pageName === 'about-us.html') return 'active';
    if (key === 'why' && pageName === 'why-us.html') return 'active';
    if (key === 'gallery' && pageName === 'gallery.html') return 'active';
    if (key === 'testimonial' && pageName === 'testimonial.html') return 'active';
    if (key === 'blog' && pageName === 'blog.html') return 'active';
    if (key === 'contact' && pageName === 'contact-us.html') return 'active';
    return '';
  };

  return `<!-- ================= EXACT SCREENSHOT UNIFIED MAIN NAVIGATION ================= -->
  <nav class="navbar navbar-expand-xl ${navClass} sticky-top shadow-sm py-2 bg-white">
    <div class="container">
      <a class="navbar-brand py-0 me-3" href="index.html">
        <img src="assets/images/Logo.webp" alt="NIF Global Ghatkopar Logo" style="height: 48px; width: auto;" class="img-fluid">
      </a>
      
      <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#nifNavContent" aria-controls="nifNavContent" aria-expanded="false" aria-label="Toggle Navigation">
        <i class="bi bi-list fs-1 text-dark"></i>
      </button>

      <div class="collapse navbar-collapse" id="nifNavContent">
        <ul class="navbar-nav mx-auto mb-2 mb-xl-0 align-items-xl-center text-center gap-1 gap-xxl-2">
          
          <!-- 1. HOME -->
          <li class="nav-item">
            <a class="nav-link text-uppercase fw-bold px-2 py-1 ${isA('index')}" href="index.html" style="font-size: 0.86rem; letter-spacing: 0.5px; min-height: 42px; display: flex; align-items: center; justify-content: center;">HOME</a>
          </li>

          <!-- 2. COURSES ▾ -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-uppercase fw-bold px-2 py-1 ${isA('courses')}" href="#" id="coursesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="font-size: 0.86rem; letter-spacing: 0.5px; min-height: 42px; display: flex; align-items: center; justify-content: center;">
              COURSES
            </a>
            <ul class="dropdown-menu border-0 shadow-lg rounded-3 py-2" aria-labelledby="coursesDropdown">
              <li><a class="dropdown-item py-2 fw-semibold" href="fashion-design.html"><i class="bi bi-scissors me-2 text-danger"></i> Fashion Design</a></li>
              <li><a class="dropdown-item py-2 fw-semibold" href="interior-design.html"><i class="bi bi-house-door me-2 text-danger"></i> Interior Design</a></li>
            </ul>
          </li>

          <!-- 3. ABOUT US (Stacked) -->
          <li class="nav-item">
            <a class="nav-link text-uppercase fw-bold px-2 py-1 ${isA('about')}" href="about-us.html" style="font-size: 0.84rem; letter-spacing: 0.5px; line-height: 1.15; min-height: 42px; display: flex; flex-direction: column; justify-content: center; text-align: center;">
              <span>ABOUT</span>
              <span>US</span>
            </a>
          </li>

          <!-- 4. WHY US (Stacked) -->
          <li class="nav-item">
            <a class="nav-link text-uppercase fw-bold px-2 py-1 ${isA('why')}" href="why-us.html" style="font-size: 0.84rem; letter-spacing: 0.5px; line-height: 1.15; min-height: 42px; display: flex; flex-direction: column; justify-content: center; text-align: center;">
              <span>WHY</span>
              <span>US</span>
            </a>
          </li>

          <!-- 5. STUDENT WORK (Stacked) -->
          <li class="nav-item">
            <a class="nav-link text-uppercase fw-bold px-2 py-1 ${isA('gallery')}" href="gallery.html" style="font-size: 0.84rem; letter-spacing: 0.5px; line-height: 1.15; min-height: 42px; display: flex; flex-direction: column; justify-content: center; text-align: center;">
              <span>STUDENT</span>
              <span>WORK</span>
            </a>
          </li>

          <!-- 6. MENTORS & VOICES (Stacked) -->
          <li class="nav-item">
            <a class="nav-link text-uppercase fw-bold px-2 py-1 ${isA('testimonial')}" href="testimonial.html" style="font-size: 0.84rem; letter-spacing: 0.5px; line-height: 1.15; min-height: 42px; display: flex; flex-direction: column; justify-content: center; text-align: center;">
              <span>MENTORS &amp;</span>
              <span>VOICES</span>
            </a>
          </li>

          <!-- 7. BLOG -->
          <li class="nav-item">
            <a class="nav-link text-uppercase fw-bold px-2 py-1 ${isA('blog')}" href="blog.html" style="font-size: 0.86rem; letter-spacing: 0.5px; min-height: 42px; display: flex; align-items: center; justify-content: center;">BLOG</a>
          </li>

          <!-- 8. CONTACT -->
          <li class="nav-item">
            <a class="nav-link text-uppercase fw-bold px-2 py-1 ${isA('contact')}" href="contact-us.html" style="font-size: 0.86rem; letter-spacing: 0.5px; min-height: 42px; display: flex; align-items: center; justify-content: center;">CONTACT</a>
          </li>

        </ul>

        <!-- Right Side: Two-Line Pill Button + PDF Badge -->
        <div class="d-flex align-items-center justify-content-center gap-2 mt-3 mt-xl-0 ms-xl-2">
          <a href="#applyModal" data-bs-toggle="modal" class="${btnClass} d-inline-flex align-items-center rounded-pill py-2 px-3 text-start shadow-sm" style="text-decoration: none; border-radius: 50px !important;">
            <i class="bi bi-mortarboard-fill fs-5 me-2"></i>
            <span class="text-uppercase fw-bold lh-1" style="font-size: 0.78rem; letter-spacing: 0.5px;">APPLY 2026<br>BATCH</span>
          </a>
          <a href="assets/images/pdf-1.webp" download class="ms-1 d-none d-lg-inline-block" title="Download Brochure">
            <img src="assets/images/pdf-1.webp" alt="Download Brochure" style="height: 38px;">
          </a>
        </div>

      </div>
    </div>
  </nav>`;
}

let count = 0;
const folders = Object.keys(THEME_BUTTONS);

folders.forEach(dir => {
  pages.forEach(p => {
    const filePath = path.join(dir, p);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    const navStart = content.indexOf('<nav');
    const navEnd = content.indexOf('</nav>');

    if (navStart !== -1 && navEnd !== -1) {
      const before = content.substring(0, navStart);
      const after = content.substring(navEnd + 6);
      const newNavbar = buildExactNavbar(dir, p);

      content = before + newNavbar + after;
      fs.writeFileSync(filePath, content, 'utf8');
      count++;
    }
  });
  console.log(`[✓] Updated exact screenshot navbar in ${dir}`);
});

console.log(`Total files updated: ${count}`);
