const hamburger = document.getElementById("hamburger");
const mobileOverlay = document.getElementById("mobileOverlay");
const toggleButtons = document.querySelectorAll(".toggle-btn");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  const isActive = mobileOverlay.classList.toggle("active");

  // Hamburger animation
  const spans = hamburger.querySelectorAll("span");
  if (isActive) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 6px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translate(5px, -6px)";
  } else {
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  }
});

// Toggle mobile dropdowns (Accordions)
toggleButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const dropdown = this.nextElementSibling;
    const icon = this.querySelector(".chevron-icon");

    // Close other open dropdowns (Optional accordion behavior)
    // document.querySelectorAll('.mobile-dropdown').forEach(d => {
    //     if(d !== dropdown) d.classList.remove('active');
    // });

    dropdown.classList.toggle("active");
    icon.style.transform = dropdown.classList.contains("active")
      ? "rotate(180deg)"
      : "rotate(0deg)";
  });
});

// Close mobile menu on window resize if it goes back to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    mobileOverlay.classList.remove("active");
    const spans = hamburger.querySelectorAll("span");
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  }
});
