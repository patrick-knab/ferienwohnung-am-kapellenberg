// Initialize Lucide Icons
lucide.createIcons();

// Header Scroll Effect with Glassmorphism transition
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Advanced Reveal Animations with Staggering
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add a slight delay for elements that enter the viewport at the same time
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('active');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach((el, index) => {
  // Stagger elements that are likely in the same row
  if (!el.dataset.delay) {
    el.dataset.delay = (index % 3) * 150;
  }
  revealObserver.observe(el);
});

// Precise Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - (headerHeight - 10);

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Update URL hash without jump
      history.pushState(null, null, href);
    }
  });
});

// Premium Lightbox for Gallery
const galleryItems = document.querySelectorAll('.gallery-item');
if (galleryItems.length > 0) {
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.style.cssText = `
        position: fixed;
        z-index: 2000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(18, 33, 24, 0.98);
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    `;

  const lightboxImg = document.createElement('img');
  lightboxImg.style.cssText = `
        max-width: 90%;
        max-height: 80%;
        border-radius: 8px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        transform: scale(0.9);
        transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    `;

  lightbox.appendChild(lightboxImg);
  document.body.appendChild(lightbox);

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
      setTimeout(() => {
        lightboxImg.style.transform = 'scale(1)';
      }, 10);
    });
  });

  lightbox.addEventListener('click', () => {
    lightboxImg.style.transform = 'scale(0.9)';
    setTimeout(() => {
      lightbox.style.display = 'none';
    }, 300);
  });
}

// Multi-language Support
const langBtns = document.querySelectorAll('.lang-btn');
const setLanguage = (lang) => {
  document.body.className = document.body.className.replace(/lang-\w+/, '');
  document.body.classList.add(`lang-${lang}`);
  localStorage.setItem('preferredLang', lang);

  langBtns.forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Re-trigger Lucide to handle any new icons in the switched content
  lucide.createIcons();
};

const savedLang = localStorage.getItem('preferredLang') || 'de';
setLanguage(savedLang);

langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
  });
});
