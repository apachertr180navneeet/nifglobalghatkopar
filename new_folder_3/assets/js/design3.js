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
  const admissionForms = document.querySelectorAll('#d3AdmissionForm, #globalEnquiryForm, #modalEnquiryForm');
  admissionForms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const courseInput = form.querySelector('[name="course"]') || form.querySelector('#d3CourseSelect');
      const nameInput = form.querySelector('[name="name"]') || form.querySelector('#d3StudentName');
      const mobileInput = form.querySelector('[name="mobile"]') || form.querySelector('#d3StudentMobile');

      const course = courseInput ? courseInput.value : '';
      const name = nameInput ? nameInput.value : '';
      const mobile = mobileInput ? mobileInput.value : '';

      if (!name || !mobile) {
        alert('Please fill out your name and mobile number before submitting.');
        return;
      }

      alert('Thank you, ' + name + '! Your enquiry' + (course ? ' for ' + course : '') + ' has been received. Our admissions team at Ghatkopar will contact you at ' + mobile + ' shortly.');
      form.reset();
    });
  });

  // 3. Mentor Hero Carousel (media_1793849778293_16d8a738.jpg)
  const mentorCardCarouselEl = document.getElementById('mentorCardCarousel');
  if (mentorCardCarouselEl && typeof bootstrap !== 'undefined') {
    new bootstrap.Carousel(mentorCardCarouselEl, {
      interval: 4000,
      ride: 'carousel',
      pause: 'hover',
      wrap: true
    });
  }

  // Hero Carousel Controls & Autoplay
  const heroCarouselEl = document.getElementById('heroCarousel');
  const heroPrev = document.getElementById('heroPrev');
  const heroNext = document.getElementById('heroNext');

  if (heroCarouselEl && typeof bootstrap !== 'undefined') {
    const heroCarousel = new bootstrap.Carousel(heroCarouselEl, {
      interval: 5000,
      ride: 'carousel',
      pause: 'hover',
      wrap: true
    });

    if (heroPrev) {
      heroPrev.addEventListener('click', function (e) {
        e.preventDefault();
        heroCarousel.prev();
      });
    }
    if (heroNext) {
      heroNext.addEventListener('click', function (e) {
        e.preventDefault();
        heroCarousel.next();
      });
    }
  }

  // 4. Hero View Mode Toggler (Interactive Split vs Full Banners)
  const btnSplitHero = document.getElementById('btnSplitHero');
  const btnFullBanner = document.getElementById('btnFullBanner');
  const viewSplitHero = document.getElementById('viewSplitHero');
  const viewFullBanner = document.getElementById('viewFullBanner');

  if (btnSplitHero && btnFullBanner && viewSplitHero && viewFullBanner) {
    btnSplitHero.addEventListener('click', function () {
      btnSplitHero.classList.add('active');
      btnFullBanner.classList.remove('active');
      viewSplitHero.classList.remove('d-none');
      viewFullBanner.classList.add('d-none');
    });

    btnFullBanner.addEventListener('click', function () {
      btnFullBanner.classList.add('active');
      btnSplitHero.classList.remove('active');
      viewFullBanner.classList.remove('d-none');
      viewSplitHero.classList.add('d-none');

      const fullBannerCarouselEl = document.getElementById('fullBannerCarousel');
      if (fullBannerCarouselEl && typeof bootstrap !== 'undefined') {
        new bootstrap.Carousel(fullBannerCarouselEl, {
          interval: 4500,
          ride: 'carousel',
          pause: 'hover',
          wrap: true
        });
      }
    });
  }
});

