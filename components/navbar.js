// navbar-component
document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
    <nav
      id="navbar"
      class="fixed top-2 sm:top-3 md:top-4 left-1/2 z-50 w-[95%] sm:w-[90%] md:w-full max-w-3xl sm:max-w-4xl md:max-w-6xl px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/20 backdrop-blur-xl shadow-2xl shadow-black/10 rounded-2xl sm:rounded-xl md:rounded-xl border border-white/30 transition-all duration-600 ease-in-out animate-navbarEntrance"
      style="
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        transform: translateX(-50%);
      "
    >
      <!-- Desktop & Mobile Header -->
      <div class="flex items-center justify-between w-full">
        <a href="../index.html" class="flex items-center gap-x-1 text-base sm:text-lg md:text-xl font-bold text-gray-800">
        <img src="../public/img/logo.png" class="w-10 h-10"></img>
          Naturia
        </a>
        <!-- Desktop Menu -->
        <ul
          class="hidden md:flex items-center gap-2 text-gray-800 font-medium text-sm lg:text-base"
        >
          <li>
            <a
              href="../index.html"
              class="px-3 py-2 rounded-lg hover:bg-white/20 hover:text-green-600 transition-all duration-300"
              >Home</a
            >
          </li>
          <li>
            <a
              href="./education.html"
              class="px-3 py-2 rounded-lg hover:bg-white/20 hover:text-green-600 transition-all duration-300"
              >Education</a
            >
          </li>
          <li>
            <a
              href="./community.html"
              class="px-3 py-2 rounded-lg hover:bg-white/20 hover:text-green-600 transition-all duration-300"
              >Community</a
            >
          </li>
          <li>
            <a
              href="./challenge.html"
              class="px-3 py-2 rounded-lg hover:bg-white/20 hover:text-green-600 transition-all duration-300"
              >Challenge</a
            >
          </li>
          <li class="flex items-center gap-2">
            <a
              href="./marketplace.html"
              class="px-3 py-2 rounded-lg hover:bg-white/20 hover:text-green-600 transition-all duration-300"
              ><img src='../public/svg/cart.svg'></img></a
            >
          <div class="flex gap-x-2 items-center">
            <a href="./profile.html">
              <img
                src="../public/img/pfp.jpeg"
                class="w-10 h-10 lg:w-10 lg:h-10 rounded-full transition-transform duration-300 ring-2 ring-white/30"
                alt="pfp"
              />
              </a>
              <div class="ml-2 flex gap-x-1 items-center">
              <p class="font-semibold text-[1.1rem] animated-text">171</p>
                <img class="w-8 h-8" src="../public/img/point.png"></img>
              </div>
            </div>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button
          id="mobile-menu-button"
          class="md:hidden relative w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 flex flex-col justify-center items-center group"
          aria-label="Toggle menu"
        >
          <span
            class="hamburger-line w-4 sm:w-5 md:w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ease-in-out transform"
          ></span>
          <span
            class="hamburger-line w-4 sm:w-5 md:w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ease-in-out transform mt-1 sm:mt-1.5"
          ></span>
          <span
            class="hamburger-line w-4 sm:w-5 md:w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ease-in-out transform mt-1 sm:mt-1.5"
          ></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        id="mobile-menu"
        class="md:hidden absolute top-full left-0 right-0 mt-1 sm:mt-2 bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-black/20 opacity-0 invisible transform scale-95 transition-all duration-500 ease-out origin-top overflow-hidden"
        style="backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px)"
      >
        <!-- Liquid glass shimmer effect -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-60"
        ></div>
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-shimmer"
        ></div>

        <ul
          class="relative flex flex-col p-4 sm:p-6 space-y-1 text-gray-800 font-medium text-sm sm:text-base"
        >
          <li>
            <a
              href="../index.html"
              class="block py-3 px-4 rounded-xl hover:bg-white/20 hover:text-green-600 transition-all duration-300 backdrop-blur-sm"
              >Home</a
            >
          </li>
          <li>
            <a
              href="./education.html"
              class="block py-3 px-4 rounded-xl hover:bg-white/20 hover:text-green-600 transition-all duration-300 backdrop-blur-sm"
              >Education</a
            >
          </li>
          <li>
            <a
              href="./community.html"
              class="block py-3 px-4 rounded-xl hover:bg-white/20 hover:text-green-600 transition-all duration-300 backdrop-blur-sm"
              >Community</a
            >
          </li>
          <li>
            <a
              href="./challenge.html"
              class="block py-3 px-4 rounded-xl hover:bg-white/20 hover:text-green-600 transition-all duration-300 backdrop-blur-sm"
              >Challenge</a
            >
          </li>
          <li>
            <a
              href="./marketplace.html"
              class="block py-3 px-4 rounded-xl hover:bg-white/20 hover:text-green-600 transition-all duration-300 backdrop-blur-sm"
              >Marketplace</a
            >
          </li>

          <!-- Glass separator -->
          <li class="my-2">
            <div
              class="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
            ></div>
          </li>
          <li class="flex justify-between">
            <a
              href="../pages/profile.html"
              class="flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/20 hover:text-green-600 transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              <div class="relative">
                <img
                  src="../public/img/pfp.jpeg"
                  class="w-10 h-10 sm:w-12 sm:h-12 rounded-full ring-2 ring-white/40 shadow-lg"
                  alt="pfp"
                />
                <div
                  class="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"
                ></div>
              </div>
              <div class="flex flex-col">
                <span class="font-semibold text-sm sm:text-base">Profile</span>
                <span class="text-xs opacity-70">View your account</span>
              </div>
            </a>
            <div class="ml-2 flex gap-x-1 items-center">
              <p class="font-semibold text-[1.1rem] animated-text">171</p>
              <img class="w-8 h-8" src="../public/img/point.png" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  `
  );
});

// JS untuk navbarnya
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("nav");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerLines = document.querySelectorAll(".hamburger-line");
  let isScrolled = false;
  let isMobileMenuOpen = false;

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

  // Mobile menu
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
