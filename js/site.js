document.querySelectorAll('[id="y"]').forEach((year) => {
  year.textContent = new Date().getFullYear();
});

(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#site-menu');

  if (!toggle || !menu) {
    return;
  }

  const setOpen = (open) => {
    const openLabel = toggle.dataset.openLabel || 'Abrir menú';
    const closeLabel = toggle.dataset.closeLabel || 'Cerrar menú';
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? closeLabel : openLabel);
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  });
})();

(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = [
    '.hero-main',
    '.hero-bottom',
    '.page-hero > .container',
    '.section-heading',
    '.web-services-heading',
    '.web-service-card',
    '.web-services-cta',
    '.service-card',
    '.case-feature',
    '.project-card',
    '.process-line article',
    '.about-copy',
    '.profile-mini-grid article',
    '.profile-process span',
    '.contact-layout > *',
    '.contact-page-panel',
    '.contact-note-card',
    '.footer-brand',
    '.footer-column',
    '.footer-cta'
  ];

  const items = document.querySelectorAll(revealTargets.join(','));

  if (!reduceMotion && 'IntersectionObserver' in window) {
    document.body.classList.add('motion-ready');
    items.forEach((item, index) => {
      item.classList.add('reveal-item');
      item.style.setProperty('--reveal-delay', `${Math.min(index % 8, 6) * 55}ms`);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    items.forEach((item) => observer.observe(item));
  }

  const hero = document.querySelector('.hero-minimal');
  if (hero && !reduceMotion) {
    hero.addEventListener('pointermove', (event) => {
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3);
      const y = ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3);
      hero.style.setProperty('--pointer-x', x);
      hero.style.setProperty('--pointer-y', y);
    });
  }
})();

(() => {
  document.querySelectorAll('.email-submit-link').forEach((link) => {
    const form = link.closest('form');

    if (!form) {
      return;
    }

    const updateMailto = () => {
      const data = new FormData(form);
      const name = data.get('name') || '';
      const email = data.get('email') || '';
      const projectType = data.get('project_type') || '';
      const message = data.get('message') || '';
      const subject = encodeURIComponent(`Consulta desde UIverse${projectType ? ` · ${projectType}` : ''}`);
      const body = encodeURIComponent(
        [
          `Nombre: ${name}`,
          `Email: ${email}`,
          `Tipo de proyecto: ${projectType}`,
          '',
          String(message)
        ].join('\n')
      );

      link.href = `mailto:pacosansan97@gmail.com?subject=${subject}&body=${body}`;
    };

    form.addEventListener('input', updateMailto);
    form.addEventListener('change', updateMailto);
    link.addEventListener('pointerenter', updateMailto);
    link.addEventListener('focus', updateMailto);
    updateMailto();
  });
})();
