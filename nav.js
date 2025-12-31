/*
        --------------------------------------------------------
        JAVASCRIPT LOGIC (script.js equivalent)
        --------------------------------------------------------
        */

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const dropdownToggles = document.querySelectorAll(".mobile-dropdown-toggle");
  const allNavLinks = document.querySelectorAll(".nav-link");

  // --- 1. Mobile Menu (Hamburger) Toggle Functionality ---
  mobileMenuToggle.addEventListener("click", () => {
    const isMenuOpen = mobileMenu.classList.toggle("open");

    // Animate hamburger icon to close (X)
    if (isMenuOpen) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-xmark");
      mobileMenuToggle.setAttribute("aria-expanded", "true");
      // Optional: Add staggered item animation (CSS handles this, but we can ensure correct order if needed)
    } else {
      menuIcon.classList.remove("fa-xmark");
      menuIcon.classList.add("fa-bars");
      mobileMenuToggle.setAttribute("aria-expanded", "false");

      // Close any open mobile dropdowns when the main menu closes
      dropdownToggles.forEach((toggle) => {
        const targetId = toggle.getAttribute("data-target");
        const targetDropdown = document.getElementById(targetId);
        if (targetDropdown.classList.contains("open")) {
          targetDropdown.classList.remove("open");
          toggle.querySelector("i").classList.remove("fa-minus");
          toggle.querySelector("i").classList.add("fa-plus");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }
  });

  // --- 2. Mobile Dropdown Toggle Functionality (+ / - icons) ---
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent accidental navigation
      event.stopPropagation(); // Stop click from propagating

      const targetId = toggle.getAttribute("data-target");
      const targetDropdown = document.getElementById(targetId);
      const icon = toggle.querySelector("i");

      const isOpening = !targetDropdown.classList.contains("open");

      // Close all other open mobile dropdowns first
      document
        .querySelectorAll(".mobile-dropdown.open")
        .forEach((openDropdown) => {
          if (openDropdown !== targetDropdown) {
            openDropdown.classList.remove("open");
            // Find and update the corresponding toggle icon
            document
              .querySelector(`[data-target="${openDropdown.id}"]`)
              .querySelector("i")
              .classList.replace("fa-minus", "fa-plus");
            document
              .querySelector(`[data-target="${openDropdown.id}"]`)
              .setAttribute("aria-expanded", "false");
          }
        });

      // Toggle the current dropdown
      targetDropdown.classList.toggle("open");

      // Toggle the icon
      if (isOpening) {
        icon.classList.replace("fa-plus", "fa-minus");
        toggle.setAttribute("aria-expanded", "true");
        // Calculate actual height for smooth slide animation (optional, CSS max-height is often sufficient)
        // targetDropdown.style.maxHeight = targetDropdown.scrollHeight + "px";
      } else {
        icon.classList.replace("fa-minus", "fa-plus");
        toggle.setAttribute("aria-expanded", "false");
        // targetDropdown.style.maxHeight = '0';
      }
    });
  });

  // --- 3. Prevent Dropdown from Toggling on Click in Desktop Mode ---
  // On desktop, the dropdown links must navigate, but the parent link should too.
  // On mobile, the anchor text navigates, and the + icon toggles the dropdown.
  allNavLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Check if it's a mobile link or a link within a dropdown
      const isMobileOrDropdownLink =
        link.closest(".mobile-nav-menu") || link.closest(".dropdown");

      if (isMobileOrDropdownLink && mobileMenu.classList.contains("open")) {
        // Close the mobile menu after clicking a link
        mobileMenuToggle.click();
      }
      // For demonstration, we prevent default navigation to show the URL change in the immersive preview.
      // event.preventDefault();
      // console.log("Navigating to:", event.currentTarget.getAttribute('href'));
    });
  });
});
