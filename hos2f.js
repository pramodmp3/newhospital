// Init Lucide
lucide.createIcons();

// Register Plugins
gsap.registerPlugin(ScrollTrigger);

// Responsive Lottie
const logoAnim = lottie.loadAnimation({
  container: document.getElementById("lottie-logo"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets9.lottiefiles.com/packages/lf20_5njp3v83.json",
});

const deliveryAnim = lottie.loadAnimation({
  container: document.getElementById("lottie-delivery"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets5.lottiefiles.com/packages/lf20_7m88uxpx.json",
});

// Cinematic Animations
window.addEventListener("load", () => {
  const items = document.querySelectorAll(".reveal-item");

  // Staggered reveal based on visibility
  gsap.to(items, {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#main-footer",
      start: "top 85%",
    },
  });

  // Pulse line animation
  gsap.to(".heartbeat-line path", {
    strokeDasharray: "100, 1000",
    strokeDashoffset: "-1000",
    duration: 5,
    repeat: -1,
    ease: "none",
  });

  // Smooth parallax for orbs
  gsap.to(".glow-orb", {
    y: (i, target) => (i % 2 === 0 ? -60 : 60),
    scrollTrigger: {
      trigger: "footer",
      scrub: 1.5,
    },
  });
});

// Subscribe logic
document.getElementById("btn-subscribe").addEventListener("click", function () {
  const btn = this;
  const input = btn.parentElement.querySelector("input");
  if (input.value.includes("@")) {
    btn.innerHTML = "DONE";
    btn.style.background = "#00ff88";
    input.value = "";
    input.placeholder = "Welcome!";
  } else {
    gsap.to(btn.parentElement, {
      x: 5,
      repeat: 5,
      yoyo: true,
      duration: 0.05,
    });
  }
});

// Safe mouse move (disable on touch for performance)
if (window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    gsap.to(".glow-orb", {
      x: x,
      y: y,
      duration: 1.5,
      ease: "power2.out",
    });
  });
}
