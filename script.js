// Function to handle smooth scrolling
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const scrollToId = this.getAttribute("href");
      const sectionToScrollTo = document.querySelector(scrollToId);
      if (sectionToScrollTo) {
        e.preventDefault();
        sectionToScrollTo.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// Function to highlight active navigation link based on current page
function highlightActiveLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    if (link.href.includes(`${currentPath}`)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Improved form submission handling function
function validateContactForm() {
  const form = document.querySelector("#contactForm");
  const confirmationMessage = document.getElementById("confirmationMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Gather form data for demonstration
    const formData = {
      name: form.querySelector("#name").value,
      email: form.querySelector("#email").value,
      message: form.querySelector("#message").value,
    };

    console.log("Form data submitted:", formData); // Simulate form submission

    // Clear the form fields immediately after submission
    form.reset();

    // Display a thank you message
    confirmationMessage.style.display = "block";
    setTimeout(() => {
      confirmationMessage.style.display = "none"; // Hide message after a few seconds
    }, 5000);
  });
}

// Initialize all scripts when DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  smoothScroll();
  highlightActiveLink();
  validateContactForm();
});
