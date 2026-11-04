/**
 * NIF Global Ghatkopar - Design 3 Scripts
 */
document.addEventListener('DOMContentLoaded', function () {
  // 1. Mobile Menu Toggler
  const toggleBtn = document.getElementById('d3NavToggle');
  const navCollapse = document.getElementById('d3NavContent');
  if (toggleBtn && navCollapse) {
    toggleBtn.addEventListener('click', function () {
      navCollapse.classList.toggle('show');
    });
  }

  // 2. Admission Form Handler
  const admissionForm = document.getElementById('d3AdmissionForm');
  if (admissionForm) {
    admissionForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const course = document.getElementById('d3CourseSelect').value;
      const name = document.getElementById('d3StudentName').value;
      const mobile = document.getElementById('d3StudentMobile').value;

      if (!course || !name || !mobile) {
        alert('Please fill out all fields before submitting.');
        return;
      }

      alert('Thank you, ' + name + '! Your enquiry for ' + course + ' has been received. Our admissions team at Ghatkopar will contact you at ' + mobile + ' shortly.');
      admissionForm.reset();
    });
  }

  // 3. Carousel Controls
  const prevBtn = document.getElementById('heroPrev');
  const nextBtn = document.getElementById('heroNext');
  const heroImg = document.getElementById('heroMainImg');
  const heroImages = [
    'assets/images/design3/hero_model.jpg',
    'assets/images/Ananya-Panday-Celebrity-min.png.webp',
    'assets/images/aboutus-1.webp'
  ];
  let curIndex = 0;

  if (heroImg && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', function () {
      curIndex = (curIndex + 1) % heroImages.length;
      heroImg.src = heroImages[curIndex];
    });
    prevBtn.addEventListener('click', function () {
      curIndex = (curIndex - 1 + heroImages.length) % heroImages.length;
      heroImg.src = heroImages[curIndex];
    });
  }
});
