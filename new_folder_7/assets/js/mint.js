/**
 * MINT STYLE JAVASCRIPT - NIF GLOBAL GHATKOPAR
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // 1. Sticky Navbar on Scroll
  const navbar = document.querySelector('.mint-navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // 2. Mentor Card Carousel
  const mentorCardCarouselEl = document.getElementById('mentorCardCarousel');
  if (mentorCardCarouselEl && typeof bootstrap !== 'undefined') {
    new bootstrap.Carousel(mentorCardCarouselEl, {
      interval: 4200,
      ride: 'carousel',
      pause: 'hover',
      wrap: true
    });
  }

  // 3. Official Banners Carousel
  const officialBannersEl = document.getElementById('officialBannersCarousel');
  if (officialBannersEl && typeof bootstrap !== 'undefined') {
    new bootstrap.Carousel(officialBannersEl, {
      interval: 4600,
      ride: 'carousel',
      pause: 'hover',
      wrap: true
    });
  }

  // 4. Form Handlers & Submission Feedback
  const forms = document.querySelectorAll('#globalEnquiryForm, #modalEnquiryForm, #contactPageForm, #courseEnquiryForm');
  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = form.querySelector('[name="name"]') || form.querySelector('#fullName');
      const phoneInput = form.querySelector('[name="phone"]') || form.querySelector('[name="mobile"]') || form.querySelector('#phone');
      const courseSelect = form.querySelector('[name="course"]') || form.querySelector('#course');

      const name = nameInput ? nameInput.value.trim() : 'Prospective Student';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const course = courseSelect ? courseSelect.value : 'Creative Design Program';

      if (!phone) {
        alert('Please enter your valid phone/WhatsApp number.');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Submitting...';
      }

      setTimeout(() => {
        alert(`Thank you, ${name}! Your inquiry for ${course} has been submitted. Our Ghatkopar Admissions Director will connect with you at ${phone} shortly.`);
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        const modalEl = form.closest('.modal');
        if (modalEl && typeof bootstrap !== 'undefined') {
          const modalInstance = bootstrap.Modal.getInstance(modalEl);
          if (modalInstance) modalInstance.hide();
        }
      }, 700);
    });
  });
});

