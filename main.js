
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', 'dark');
};

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if(e.matches) {
    document.documentElement.setAttribute('data-theme', "dark");
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
});