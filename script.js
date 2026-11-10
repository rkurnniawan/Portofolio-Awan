document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Terima kasih! Pesan Anda berhasil dikirim.');
      contactForm.reset();
    });
  }
});