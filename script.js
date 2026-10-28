// Mobile navigation: toggle the compact menu and close it after a selection.
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

// Reveal sections as they enter the viewport. The CSS supports reduced-motion users.
const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

// Front-end form feedback. Replace this with your email service/API endpoint to receive submissions.
const form = document.querySelector('#contact-form');
const formMessage = document.querySelector('#form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  formMessage.textContent = 'Thanks — your message is ready to send.';
  form.reset();
});
