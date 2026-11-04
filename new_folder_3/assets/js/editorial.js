/**
 * NIF Global Ghatkopar - Editorial Experience JavaScript
 * High Performance, Micro-Interactions, Form Validation & Portfolio Filter
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // 1. Sticky Navbar Dynamic Shadow & Blur
  const navbar = document.querySelector('.editorial-navbar');
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

  // 2. Mobile Navbar Auto-Collapse on Click
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

  // 3. Highlight Current Route
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // 4. Student Work Portfolio Filter
  const filterButtons = document.querySelectorAll('.portfolio-tab-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item-col');

  if (filterButtons.length && portfolioItems.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.96)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  // 5. Admissions Enquiry Form Handler
  const enquiryForms = document.querySelectorAll('#admissionsEnquiryForm, #heroQuickForm, #modalApplyForm');
  enquiryForms.forEach(form => {
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
      const name = nameInput ? nameInput.value.trim() : 'Candidate';
      const course = courseSelect ? courseSelect.value : 'Design Program';

      // Hide modal if open
      const modalEl = document.getElementById('applyModal');
      if (modalEl) {
        const modalInstance = bootstrap.Modal.getInstance(modalEl);
        if (modalInstance) modalInstance.hide();
      }

      // Elegant confirmation dialog
      alert(`✨ Thank you, ${name}!\n\nYour application for ${course} (2026 Batch) has been received.\n\nOur Senior Admissions Counselor from NIF Global Ghatkopar {Platinum Center} will contact you shortly with the syllabus prospectus and merit scholarship details.`);

      form.reset();
      form.classList.remove('was-validated');
    });
  });

  // 6. Course preselection trigger
  document.querySelectorAll('[data-course-select]').forEach(btn => {
    btn.addEventListener('click', function () {
      const courseName = this.getAttribute('data-course-select');
      const selectElements = document.querySelectorAll('select[name="course"]');
      selectElements.forEach(selectEl => {
        if (courseName) selectEl.value = courseName;
      });
    });
  });

  // 7. Smooth Anchor Scroll
  document.querySelectorAll('a[href^="#"]:not([href="#"]):not([data-bs-toggle])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

