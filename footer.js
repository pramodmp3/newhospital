/*
        --------------------------------------------------------
        JAVASCRIPT LOGIC (script.js equivalent)
        --------------------------------------------------------
        */

document.addEventListener("DOMContentLoaded", () => {
  // Set current year dynamically for the copyright notice
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Function to handle the newsletter form submission
  window.handleSubscribe = function (event) {
    event.preventDefault();
    const emailInput = document.getElementById("newsletter-email");
    const email = emailInput.value;

    // Display a success message or handle API submission (simulated here)
    const message = `Thank you for subscribing, ${email}! We will be in touch.`;

    // Instead of alert(), we will momentarily change the button text and style.
    const button = event.target.querySelector(".newsletter-btn");
    const originalText = button.textContent;

    button.textContent = "Subscribed!";
    button.style.backgroundColor = "var(--color-primary-blue)";
    button.style.boxShadow = "var(--shadow-glow)";
    button.disabled = true;

    // Reset button state after a short delay
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = "";
      button.style.boxShadow = "";
      button.disabled = false;
      emailInput.value = ""; // Clear the input

      // console.log("Simulated subscription for:", email);
    }, 3000);
  };
});
