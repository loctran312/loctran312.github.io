// Theme toggle functionality
(function() {
  const body = document.body;
  const toggleBtn = document.getElementById('themeToggle');
  const label = document.getElementById('themeLabel');
  const icon = document.getElementById('themeIcon');

  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme) {
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      label.textContent = 'Dark';
      icon.textContent = '🌙';
    } else {
      label.textContent = 'Light';
      icon.textContent = '☀️';
    }
  }

  const initial = stored || (prefersDark ? 'dark' : 'dark');
  applyTheme(initial);

  toggleBtn.addEventListener('click', function() {
    const current = body.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
})();