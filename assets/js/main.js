window.addEventListener('load', (event) => {
  const opener = document.getElementById('nav-opener')
  opener.addEventListener('click', (event) => {
    const list = document.getElementById('nav-list');
    list.style.display = list.style.display == 'block' ? 'none' : 'block';
  });
});
