// Function to handle smooth scrolling
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const scrollToId = this.getAttribute('href');
        const sectionToScrollTo = document.querySelector(scrollToId);
        if (sectionToScrollTo) {
          e.preventDefault();
          sectionToScrollTo.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
  
  // Function to validate the contact form
  function validateContactForm() {
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', function (e) {
        // Basic validation example
        const email = form.querySelector('input[type="email"]');
        const message = form.querySelector('textarea');
        if (!email.value || !message.value) {
          e.preventDefault();
          alert('Please fill out all fields.');
        }
        // Here you could add more validation or an AJAX form submission
      });
    }
  }
  
  // Function to highlight active navigation link based on current page
  function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      if (link.href.includes(`${currentPath}`)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  // Initialize all scripts when DOM content is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    smoothScroll();
    validateContactForm();
    highlightActiveLink();
  });
  