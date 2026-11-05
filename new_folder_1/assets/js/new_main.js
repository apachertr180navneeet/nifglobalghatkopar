/**
 * NIF Global Ghatkopar - Interactive Masterclass JavaScript
 * Optimized for Mobile Responsiveness, Form Handling & Smooth UX
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // 1. Sticky Navbar on scroll
  const navbar = document.querySelector('.nif-navbar');
  if (navbar) {
    const checkScroll = () => {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  }

  // 2. Mobile Menu Handling: Auto-collapse on link click
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');
  if (navbarCollapse && navLinks.length) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      });
    });
  }

  // 3. Highlight active nav link based on current pathname
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else if (href && !href.startsWith('#')) {
      link.classList.remove('active');
    }
  });

  // 4. Admission Enquiry Form Validation & Submission
  const forms = document.querySelectorAll('#heroEnquiryForm, #modalApplyForm, #enquiryForm');
  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
      }

      form.classList.add('was-validated');

      const nameInput = form.querySelector('[name="name"]');
      const courseSelect = form.querySelector('[name="course"]');
      const name = nameInput ? nameInput.value.trim() : 'Aspiring Designer';
      const course = courseSelect ? courseSelect.value : 'Design Program';

      // Hide modal if open
      const modalEl = document.getElementById('applyModal');
      if (modalEl) {
        const modalInstance = bootstrap.Modal.getInstance(modalEl);
        if (modalInstance) modalInstance.hide();
      }

      // Display user-friendly celebration confirmation
      alert(`🎉 Thank you, ${name}!\n\nYour application for the ${course} (2026 Batch) has been received successfully.\n\nOur Senior Admissions Counselor from NIF Global Ghatkopar will contact you via WhatsApp / Call within 24 hours with syllabus details and scholarship options.`);
      
      form.reset();
      form.classList.remove('was-validated');
    });
  });

  // 5. Course pre-selection in modal
  document.querySelectorAll('[data-course-select]').forEach(btn => {
    btn.addEventListener('click', function() {
      const courseName = this.getAttribute('data-course-select');
      const selectEl = document.querySelector('#modalApplyForm select[name="course"]');
      if (selectEl && courseName) {
        selectEl.value = courseName;
      }
    });
  });

  // 6. Smooth Scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]:not([href="#"]):not([data-bs-toggle])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 75;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 7. Hero Carousel & Mode Toggler
  const nifHeroLeftCarouselEl = document.getElementById('nifHeroLeftCarousel');
  const nifHeroPrev = document.getElementById('nifHeroPrev');
  const nifHeroNext = document.getElementById('nifHeroNext');

  if (nifHeroLeftCarouselEl && typeof bootstrap !== 'undefined') {
    const nifHeroCarousel = new bootstrap.Carousel(nifHeroLeftCarouselEl, {
      interval: 5000,
      ride: 'carousel',
      pause: 'hover',
      wrap: true
    });

    if (nifHeroPrev) {
      nifHeroPrev.addEventListener('click', function (e) {
        e.preventDefault();
        nifHeroCarousel.prev();
      });
    }
    if (nifHeroNext) {
      nifHeroNext.addEventListener('click', function (e) {
        e.preventDefault();
        nifHeroCarousel.next();
      });
    }
  }

  // View Mode Toggler (Course Slider vs Full Official Banners)
  const btnNifSplitHero = document.getElementById('btnNifSplitHero');
  const btnNifFullBanner = document.getElementById('btnNifFullBanner');
  const nifSplitHeroView = document.getElementById('nifSplitHeroView');
  const nifFullBannerView = document.getElementById('nifFullBannerView');

  if (btnNifSplitHero && btnNifFullBanner && nifSplitHeroView && nifFullBannerView) {
    btnNifSplitHero.addEventListener('click', function () {
      btnNifSplitHero.classList.add('active');
      btnNifFullBanner.classList.remove('active');
      nifSplitHeroView.classList.remove('d-none');
      nifFullBannerView.classList.add('d-none');
    });

    btnNifFullBanner.addEventListener('click', function () {
      btnNifFullBanner.classList.add('active');
      btnNifSplitHero.classList.remove('active');
      nifFullBannerView.classList.remove('d-none');
      nifSplitHeroView.classList.add('d-none');

      const nifFullBannerCarouselEl = document.getElementById('nifFullBannerCarousel');
      if (nifFullBannerCarouselEl && typeof bootstrap !== 'undefined') {
        new bootstrap.Carousel(nifFullBannerCarouselEl, {
          interval: 4500,
          ride: 'carousel',
          pause: 'hover',
          wrap: true
        });
      }
    });
  }
});
