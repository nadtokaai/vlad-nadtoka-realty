/* ===========================
   JS — Vlad Nadtoka Realty
   =========================== */

// Navigation scroll effect
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

// Mobile navigation
const hamburger = document.querySelector('.nav-hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileOverlay = document.querySelector('.mobile-nav-overlay');
const mobileClose = document.querySelector('.mobile-nav-close');
const mobileLinks = document.querySelectorAll('.mobile-nav a');

function openMobileNav() {
  mobileNav.classList.add('open');
  mobileOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  mobileNav.classList.remove('open');
  mobileOverlay.classList.remove('open');
  document.body.style.overflow = '';
  // Let transition finish before hiding, or hide immediately
  setTimeout(() => {
    if (!mobileNav.classList.contains('open')) {
      mobileNav.style.display = 'none';
    }
    if (!mobileOverlay.classList.contains('open')) {
      mobileOverlay.style.display = 'none';
    }
  }, 300);
}

if (hamburger) {
  hamburger.addEventListener('click', () => {
    mobileNav.style.display = 'block';
    mobileOverlay.style.display = 'block';
    openMobileNav();
  });
}

if (mobileClose) {
  mobileClose.addEventListener('click', () => {
    closeMobileNav();
    // Immediately hide on close
    mobileNav.style.display = 'none';
    mobileOverlay.style.display = 'none';
  });
}

if (mobileOverlay) {
  mobileOverlay.addEventListener('click', () => {
    closeMobileNav();
    mobileNav.style.display = 'none';
    mobileOverlay.style.display = 'none';
  });
}

mobileLinks.forEach(link => {
  link.addEventListener('click', closeMobileNav);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll animations (Intersection Observer)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => {
  observer.observe(el);
});

// Contact form handling
const contactForm = document.querySelector('#contact-form');
const formSuccess = document.querySelector('.form-success');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));

    // Validate
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const goals = document.querySelector('#goals');
    let hasError = false;

    if (!name.value.trim()) {
      name.closest('.form-group').classList.add('error');
      hasError = true;
    }

    if (!email.value.trim() || !isValidEmail(email.value)) {
      email.closest('.form-group').classList.add('error');
      hasError = true;
    }

    if (!goals.value.trim()) {
      goals.closest('.form-group').classList.add('error');
      hasError = true;
    }

    if (hasError) return;

    // Simulate form submission (show success)
    formSuccess.classList.add('show');
    contactForm.reset();

    // Hide success after 5 seconds
    setTimeout(() => {
      formSuccess.classList.remove('show');
    }, 5000);
  });
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Active nav link highlighting
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});
