// navbar.js
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (currentPage === linkPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active'); // Hapus class jika tidak aktif
    }
  });
});