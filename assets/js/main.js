document.addEventListener('DOMContentLoaded', () => {
  // Smooth-ish navigation for relative links (preserve cmd/ctrl clicks)
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return;
    link.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // allow open in new tab
      e.preventDefault();
      document.body.classList.add('page-exit');
      setTimeout(() => { window.location.href = href; }, 150);
    });
  });

  // Add `active` class to links that match current filename
  const currentFile = (window.location.pathname.split('/').pop() || 'home.html').toLowerCase();
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const targetFile = href.split('/').pop().toLowerCase();
    if (targetFile === currentFile) link.classList.add('active');
  });

  // Basic mobile menu toggle: toggles `nav-open` class on body for simple CSS-based menus
  document.querySelectorAll('button').forEach(btn => {
    const icon = btn.querySelector('.material-symbols-outlined');
    if (icon && icon.textContent.trim() === 'menu') {
      btn.addEventListener('click', () => document.body.classList.toggle('nav-open'));
    }
  });
});
