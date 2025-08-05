document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('nav');
    let isScrolled = false;

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        if (scrollY > 50 && !isScrolled) {
            navbar.classList.remove('max-w-6xl');
            navbar.classList.add('max-w-5xl');
            isScrolled = true;
        } else if (scrollY <= 50 && isScrolled) {
            navbar.classList.remove('max-w-5xl');
            navbar.classList.add('max-w-6xl');
            isScrolled = false;
        }
    });
});