// Local inline icons. No icon library is fetched from a third-party server.
const iconPaths = {
  'arrow-left': '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
  'phone': '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .8 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.9.7 2.9.8a2 2 0 0 1 1.6 1.9Z"/>',
  'smartphone': '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
  'mail': '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  'map-pin': '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/>',
  'wifi': '<path d="M5 12.6a10 10 0 0 1 14 0"/><path d="M8.5 16.1a5 5 0 0 1 7 0"/><path d="M12 20h.01"/>',
  'car-front': '<path d="m5 17-1 4"/><path d="m19 17 1 4"/><path d="M5 17h14l-1.2-8.3A2 2 0 0 0 15.8 7H8.2a2 2 0 0 0-2 1.7Z"/><path d="M6 13h.01M18 13h.01"/>',
  'utensils': '<path d="M3 2v7c0 1.1.9 2 2 2h2V2"/><path d="M5 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v5h5"/><path d="M16 22v-7"/>',
  'mountain-snow': '<path d="m8 3 4 6 4-6"/><path d="m3 21 9-15 9 15Z"/><path d="m9 16 3-3 3 3"/>',
  'circle-check': '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/>',
  'check': '<path d="m5 12 4 4L19 6"/>',
  'sparkles': '<path d="m12 3-1 5-5 1 5 1 1 5 1-5 5-1-5-1Z"/>',
  'coffee': '<path d="M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z"/><path d="M16 10h2a2 2 0 0 1 0 4h-2M6 2v3M10 2v3M14 2v3"/>',
  'map': '<path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3Z"/><path d="M9 3v15M15 6v15"/>',
  'calendar-check': '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M9 16l2 2 4-4"/>',
  'utensils-crosses': '<path d="m3 2 6 6M9 2 3 8M3 8l6 6M9 8l-6 6M15 3v18M15 3l5 5"/>',
  'cooking-pot': '<path d="M4 10h16v5a8 8 0 0 1-16 0Z"/><path d="M8 6h8M12 6V3M2 12h2M20 12h2"/>',
  'flower-2': '<circle cx="12" cy="12" r="2"/><path d="M12 2c3 3 3 5 0 8-3-3-3-5 0-8ZM22 12c-3 3-5 3-8 0 3-3 5-3 8 0ZM12 22c-3-3-3-5 0-8 3 3 3 5 0 8ZM2 12c3-3 5-3 8 0-3 3-5 3-8 0Z"/>',
  'gift': '<rect x="3" y="8" width="18" height="13" rx="1"/><path d="M12 8v13M2 8h20M12 8H7a3 3 0 1 1 3-4c0 2-2 4-2 4M12 8h5a3 3 0 1 0-3-4c0 2 2 4 2 4"/>',
  'heart': '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.6a5.5 5.5 0 0 0-.1-7.8Z"/>',
  'waves': '<path d="M2 12c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 18c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/>',
  'shopping-bag': '<path d="M6 8h12l-1 13H7Z"/><path d="M9 8a3 3 0 0 1 6 0"/>'
};
document.querySelectorAll('[data-lucide]').forEach((element) => {
  const path = iconPaths[element.dataset.lucide] || iconPaths.check;
  element.setAttribute('aria-hidden', 'true');
  element.innerHTML = `<svg viewBox="0 0 24 24" focusable="false">${path}</svg>`;
});

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
  langBtns.forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

};

// The language choice is intentionally not stored in cookies or local storage.
setLanguage('de');

langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
  });
});

// Third-party tour maps are requested only after an explicit click.
document.querySelectorAll('[data-external-script]').forEach((placeholder) => {
  const button = placeholder.querySelector('[data-load-external]');
  button?.addEventListener('click', () => {
    const script = document.createElement('script');
    script.src = placeholder.dataset.externalScript;
    script.async = true;
    placeholder.replaceChildren(script);
  });
});

// A mailto link opens the visitor's configured mail app; copying is a reliable fallback.
document.querySelectorAll('[data-copy-email]').forEach((button) => {
  button.addEventListener('click', async () => {
    const email = button.dataset.copyEmail;
    const status = button.parentElement?.querySelector('[data-copy-status]');
    const english = document.body.classList.contains('lang-en');
    try {
      await navigator.clipboard.writeText(email);
      status.textContent = english ? 'Email address copied.' : 'E-Mail-Adresse wurde kopiert.';
    } catch {
      status.textContent = english ? `Please copy this email address: ${email}` : `Bitte kopieren Sie diese E-Mail-Adresse: ${email}`;
    }
  });
});
