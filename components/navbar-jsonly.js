// JS untuk navbarnya
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("nav");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerLines = document.querySelectorAll(".hamburger-line");
  let isMobileMenuOpen = false;

  // Mobile menu
  mobileMenuButton.addEventListener("click", function () {
    isMobileMenuOpen = !isMobileMenuOpen;

    if (isMobileMenuOpen) {
      // Open menu with liquid glass effect
      mobileMenu.classList.remove("opacity-0", "invisible", "scale-95");
      mobileMenu.classList.add("opacity-100", "visible", "scale-100");

      // Animate hamburger to X
      const isMobile = window.innerWidth < 640;
      const translateValue = isMobile ? "4px" : "5px";

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
