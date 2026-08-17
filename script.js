/**
 * =========================================================
 * SURAJ - PROFESSIONAL CLASSICAL DATA ANALYST PORTFOLIO
 * Stack: Pure Vanilla JavaScript (ES6+)
 * Modules:
 *   1. Theme Controller (Light Default & Dark Mode Toggle)
 *   2. Page Preloader (0.9s Intro)
 *   3. Dynamic Copyright Year
 *   4. Custom Cursor System (Desktop)
 *   5. Hero Subtitle Rotator
 *   6. Magnetic Button Physics
 *   7. 3D Tilt Card Interaction
 *   8. Scroll Reveal System
 *   9. Scroll-Linked Timeline Progress Line
 *  10. Sticky Header & Active Navigation Observer
 *  11. Mobile Navigation Drawer
 *  12. Project Category Filtering
 *  13. Accessible Project Modals
 *  14. Web3Forms AJAX Contact Form Submission
 *  15. Toast Notifications & Resume Downloads
 *  16. Back to Top Button
 * =========================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // System & Environment checks
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

  // -------------------------------------------------------
  // 1. THEME CONTROLLER (LIGHT DEFAULT & DARK MODE PERSISTENCE)
  // -------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const rootElement = document.documentElement;

  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('suraj_theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // Default to Light theme as requested
    return 'light';
  };

  const applyTheme = (theme) => {
    rootElement.setAttribute('data-theme', theme);
    localStorage.setItem('suraj_theme', theme);
  };

  // Initialize theme
  const currentTheme = getInitialTheme();
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = rootElement.getAttribute('data-theme') || 'light';
      const newTheme = activeTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
    });
  }

  // -------------------------------------------------------
  // 2. PAGE PRELOADER (MINIMUM 3s INTRO TRANSITION)
  // -------------------------------------------------------
  const preloader = document.getElementById('preloader');
  const preloaderBar = document.getElementById('preloader-bar');
  const loaderMinimumDuration = 3000;
  const loaderStartTime = performance.now();
  let loaderFinished = false;

  if (preloader) {
    document.body.classList.add('loading');

    if (prefersReducedMotion) {
      preloader.style.display = 'none';
      document.body.classList.remove('loading');
    } else {
      const finishLoader = () => {
        if (loaderFinished) return;
        loaderFinished = true;

        preloader.classList.add('fade-out');
        document.body.classList.remove('loading');

        setTimeout(() => {
          preloader.style.display = 'none';
        }, 700);
      };

      const startLoaderSequence = () => {
        if (loaderFinished) return;

        if (preloaderBar) {
          preloaderBar.style.width = '100%';
        }

        const elapsed = performance.now() - loaderStartTime;
        const remaining = Math.max(0, loaderMinimumDuration - elapsed);

        setTimeout(finishLoader, remaining);
      };

      setTimeout(() => {
        if (preloaderBar) preloaderBar.style.width = '26%';
      }, 180);

      setTimeout(() => {
        if (preloaderBar) preloaderBar.style.width = '58%';
      }, 720);

      setTimeout(() => {
        if (preloaderBar) preloaderBar.style.width = '100%';
      }, 1500);

      window.addEventListener('load', startLoaderSequence, { once: true });

      setTimeout(() => {
        if (!document.readyState || document.readyState === 'complete') {
          startLoaderSequence();
        }
      }, 1200);

      setTimeout(() => {
        if (!loaderFinished) {
          startLoaderSequence();
        }
      }, 3500);
    }
  }

  // -------------------------------------------------------
  // 3. DYNAMIC COPYRIGHT YEAR
  // -------------------------------------------------------
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // -------------------------------------------------------
  // 4. DESKTOP CUSTOM CURSOR SYSTEM
  // -------------------------------------------------------
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');
  const cursorLabel = document.getElementById('cursor-label');

  if (!isTouchDevice && !prefersReducedMotion && cursorDot && cursorRing) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isCursorActive = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isCursorActive) {
        document.body.classList.add('cursor-active');
        isCursorActive = true;
      }

      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }, { passive: true });

    const renderRing = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(renderRing);
    };
    renderRing();

    // Hover transformations for buttons & links
    const interactiveElements = document.querySelectorAll('a, button, .filter-tab, .skill-card-editorial, .channel-card');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover-btn');
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover-btn');
      });
    });

    // Hover transformations for projects
    const projectCards = document.querySelectorAll('.project-entry');
    projectCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover-card');
        if (cursorLabel) cursorLabel.textContent = 'EXPLORE';
      });
      card.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover-card');
        if (cursorLabel) cursorLabel.textContent = '';
      });
    });
  }

  // -------------------------------------------------------
  // 5. HERO SUBTITLE ROTATOR (ANALYTICAL ATTRIBUTES)
  // -------------------------------------------------------
  const subtitleRotator = document.getElementById('subtitle-rotator');
  if (subtitleRotator && !prefersReducedMotion) {
    const descriptors = [
      'Data Analyst',
      'Analytical Problem Solver',
      'SQL & BI Specialist',
      'Data Insights Architect'
    ];
    let descIdx = 0;

    setInterval(() => {
      subtitleRotator.classList.add('fade-out');
      setTimeout(() => {
        descIdx = (descIdx + 1) % descriptors.length;
        subtitleRotator.textContent = descriptors[descIdx];
        subtitleRotator.classList.remove('fade-out');
        subtitleRotator.classList.add('fade-in');
        setTimeout(() => subtitleRotator.classList.remove('fade-in'), 250);
      }, 250);
    }, 3800);
  }

  // -------------------------------------------------------
  // 6. MAGNETIC BUTTON PHYSICS
  // -------------------------------------------------------
  const magneticButtons = document.querySelectorAll('[data-magnetic]');

  if (!isTouchDevice && !prefersReducedMotion && magneticButtons.length) {
    magneticButtons.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate3d(${x * 0.18}px, ${y * 0.18}px, 0)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate3d(0, 0, 0)';
      });
    });
  }

  // -------------------------------------------------------
  // 7. 3D GYROSCOPE TILT CARD INTERACTION
  // -------------------------------------------------------
  const tiltCards = document.querySelectorAll('[data-tilt]');

  if (!isTouchDevice && !prefersReducedMotion && tiltCards.length) {
    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -3.5;
        const rotateY = ((x - centerX) / centerX) * 3.5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }

  // -------------------------------------------------------
  // 8. SCROLL REVEAL SYSTEM
  // -------------------------------------------------------
  const revealElements = document.querySelectorAll('[data-reveal], .editorial-section-header');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('revealed'));
  }

  // -------------------------------------------------------
  // 9. SCROLL-LINKED TIMELINE PROGRESS LINE
  // -------------------------------------------------------
  const experienceTimeline = document.getElementById('experience-timeline');
  const experienceProgressBar = document.getElementById('experience-progress-bar');

  if (experienceTimeline && experienceProgressBar) {
    const updateTimelineProgress = () => {
      const rect = experienceTimeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.7 && rect.bottom >= 0) {
        const totalHeight = rect.height;
        const visibleTop = windowHeight * 0.7 - rect.top;
        const progress = Math.min(Math.max((visibleTop / totalHeight) * 100, 0), 100);
        experienceProgressBar.style.height = `${progress}%`;
      }
    };

    window.addEventListener('scroll', updateTimelineProgress, { passive: true });
    updateTimelineProgress();
  }

  // -------------------------------------------------------
  // 10. STICKY HEADER & ACTIVE NAVIGATION TRACKING
  // -------------------------------------------------------
  const header = document.getElementById('site-header');
  const heroScrollIndicator = document.getElementById('hero-scroll-indicator');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const handleHeaderScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
      if (heroScrollIndicator) heroScrollIndicator.classList.add('scrolled-out');
    } else {
      header.classList.remove('scrolled');
      if (heroScrollIndicator) heroScrollIndicator.classList.remove('scrolled-out');
    }
  };
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });

  sections.forEach((section) => navObserver.observe(section));

  // -------------------------------------------------------
  // 11. MOBILE DRAWER NAVIGATION
  // -------------------------------------------------------
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const siteNav = document.getElementById('site-nav');

  if (mobileNavToggle && siteNav) {
    const toggleMobileMenu = (open) => {
      const shouldOpen = typeof open === 'boolean' ? open : !siteNav.classList.contains('is-open');
      mobileNavToggle.classList.toggle('is-active', shouldOpen);
      mobileNavToggle.setAttribute('aria-expanded', shouldOpen);
      siteNav.classList.toggle('is-open', shouldOpen);
      document.body.style.overflow = shouldOpen ? 'hidden' : '';
    };

    mobileNavToggle.addEventListener('click', () => toggleMobileMenu());

    siteNav.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        if (siteNav.classList.contains('is-open')) {
          toggleMobileMenu(false);
        }
      });
    });

    document.addEventListener('click', (e) => {
      const clickInsideMenu = siteNav.contains(e.target);
      const clickOnToggle = mobileNavToggle.contains(e.target);
      if (!clickInsideMenu && !clickOnToggle && siteNav.classList.contains('is-open')) {
        toggleMobileMenu(false);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && siteNav.classList.contains('is-open')) {
        toggleMobileMenu(false);
      }
    });
  }

  // -------------------------------------------------------
  // 12. PROJECT CATEGORY FILTERING
  // -------------------------------------------------------
  const filterButtons = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-entry');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedFilter = button.getAttribute('data-filter');

      filterButtons.forEach((btn) => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      projectCards.forEach((card) => {
        const categories = card.getAttribute('data-category').split(' ');
        if (selectedFilter === 'all' || categories.includes(selectedFilter)) {
          card.classList.remove('is-hidden');
          card.classList.add('revealed');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  // -------------------------------------------------------
  // 13. ACCESSIBLE PROJECT MODALS
  // -------------------------------------------------------
  const modalOpenButtons = document.querySelectorAll('[data-modal]');
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  let previouslyFocusedElement = null;

  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    previouslyFocusedElement = document.activeElement;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';

    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.focus();
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';

    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  };

  modalOpenButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = button.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  modalOverlays.forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });

    const closeElements = modal.querySelectorAll('.modal-close-btn, .modal-close-action');
    closeElements.forEach((el) => {
      el.addEventListener('click', () => closeModal(modal));
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal-overlay:not([hidden])');
      if (activeModal) {
        closeModal(activeModal);
      }
    }
  });

  // -------------------------------------------------------
  // 14. TOAST NOTIFICATION SYSTEM
  // -------------------------------------------------------
  const toastContainer = document.getElementById('toast-container');

  const showToast = (message, type = 'info', duration = 4000) => {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.setAttribute('role', 'alert');

    const iconSpan = document.createElement('span');
    iconSpan.textContent = type === 'success' ? '✓' : 'ℹ';
    
    const textSpan = document.createElement('span');
    textSpan.textContent = message;

    toast.appendChild(iconSpan);
    toast.appendChild(textSpan);
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  };

  // Resume Download Notification
  const resumeDownloadButtons = document.querySelectorAll('.btn-download-resume');
  resumeDownloadButtons.forEach((button) => {
    button.addEventListener('click', () => {
      showToast('Downloading Suraj_Resume.pdf...', 'info', 3000);
    });
  });

  // -------------------------------------------------------
  // 15. WEB3FORMS AJAX SUBMISSION HANDLER
  // -------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (contactForm && submitBtn && formStatus) {
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validateField = (input, errorElement, validationFn, errorMessage) => {
      const value = input.value.trim();
      const isValid = validationFn(value);

      if (!isValid) {
        input.classList.add('is-invalid');
        errorElement.textContent = errorMessage;
        return false;
      } else {
        input.classList.remove('is-invalid');
        errorElement.textContent = '';
        return true;
      }
    };

    nameInput.addEventListener('blur', () => {
      validateField(nameInput, nameError, (v) => v.length >= 2, 'Please enter your name.');
    });

    emailInput.addEventListener('blur', () => {
      validateField(emailInput, emailError, (v) => isValidEmail(v), 'Please enter a valid email address.');
    });

    messageInput.addEventListener('blur', () => {
      validateField(messageInput, messageError, (v) => v.length >= 10, 'Message must be at least 10 characters.');
    });

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const isNameValid = validateField(nameInput, nameError, (v) => v.length >= 2, 'Please enter your name.');
      const isEmailValid = validateField(emailInput, emailError, (v) => isValidEmail(v), 'Please enter a valid email address.');
      const isMessageValid = validateField(messageInput, messageError, (v) => v.length >= 10, 'Message must be at least 10 characters.');

      if (!isNameValid || !isEmailValid || !isMessageValid) {
        showToast('Please fill out all required fields properly.', 'info', 3000);
        return;
      }

      // Enter Loading State
      submitBtn.disabled = true;
      submitBtn.classList.add('loading');
      const btnText = submitBtn.querySelector('.btn-text');
      if (btnText) btnText.textContent = 'Sending...';

      formStatus.style.display = 'none';
      formStatus.className = 'form-status';

      const formData = new FormData(contactForm);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        const result = await response.json();

        if (response.status === 200 && result.success) {
          formStatus.className = 'form-status success';
          formStatus.textContent = 'Thank you. Your message has been sent successfully.';
          contactForm.reset();
          showToast('Message sent successfully!', 'success', 5000);
        } else {
          formStatus.className = 'form-status error';
          formStatus.textContent = result.message || 'Something went wrong while sending your message. Please try again.';
          showToast('Failed to send message. Please retry.', 'info', 4000);
        }
      } catch (error) {
        console.error('Web3Forms Error:', error);
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Something went wrong while sending your message. Please try again.';
        showToast('Network error. Please try again.', 'info', 4000);
      } finally {
        // Reset submit button state
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        if (btnText) btnText.innerHTML = 'Send Message &rarr;';
      }
    });
  }

  // -------------------------------------------------------
  // 16. BACK TO TOP BUTTON
  // -------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }
});
