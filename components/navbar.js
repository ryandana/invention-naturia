document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("nav");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerLines = document.querySelectorAll(".hamburger-line");
  let isScrolled = false;
  let isMobileMenuOpen = false;

  // Scroll functionality with responsive sizing
  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    if (scrollY > 50 && !isScrolled) {
      // Small
      navbar.classList.remove("max-w-3xl", "sm:max-w-4xl", "md:max-w-6xl");
      navbar.classList.add("max-w-2xl", "sm:max-w-3xl", "md:max-w-5xl");
      navbar.style.transform = "translateX(-50%) scale(0.95)";
      isScrolled = true;
    } else if (scrollY <= 50 && isScrolled) {
      // Original
      navbar.classList.remove("max-w-2xl", "sm:max-w-3xl", "md:max-w-5xl");
      navbar.classList.add("max-w-3xl", "sm:max-w-4xl", "md:max-w-6xl");
      navbar.style.transform = "translateX(-50%) scale(1)";
      isScrolled = false;
    }
  });

  // Mobile menu toggle
  mobileMenuButton.addEventListener("click", function () {
    isMobileMenuOpen = !isMobileMenuOpen;

    if (isMobileMenuOpen) {
      // Open menu with liquid glass effect
      mobileMenu.classList.remove("opacity-0", "invisible", "scale-95");
      mobileMenu.classList.add("opacity-100", "visible", "scale-100");

      // Animate hamburger to X
      const isMobile = window.innerWidth < 640;
      const translateValue = isMobile ? "3px" : "4px";

      hamburgerLines[0].style.transform = `rotate(45deg) translate(${translateValue}, ${translateValue})`;
      hamburgerLines[1].style.opacity = "0";
      hamburgerLines[1].style.transform = "translateX(10px)";
      hamburgerLines[2].style.transform = `rotate(-45deg) translate(${translateValue}, -${translateValue})`;
    } else {
      // Close menu
      mobileMenu.classList.remove("opacity-100", "visible", "scale-100");
      mobileMenu.classList.add("opacity-0", "invisible", "scale-95");

      // Animate X back to hamburger
      hamburgerLines[0].style.transform = "rotate(0) translate(0, 0)";
      hamburgerLines[1].style.opacity = "1";
      hamburgerLines[1].style.transform = "translateX(0)";
      hamburgerLines[2].style.transform = "rotate(0) translate(0, 0)";
    }
  });

  // Close menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (isMobileMenuOpen) {
        mobileMenuButton.click();
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (isMobileMenuOpen && !navbar.contains(e.target)) {
      mobileMenuButton.click();
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768 && isMobileMenuOpen) {
      mobileMenuButton.click();
    }
  });
});
