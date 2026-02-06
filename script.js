document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '12px 0';
            header.style.background = 'rgba(10, 12, 16, 0.95)';
        } else {
            header.style.padding = '20px 0';
            header.style.background = 'rgba(10, 12, 16, 0.8)';
        }
    });

    // Simple GSAP entry for footer
    gsap.from('.footer__col', {
        scrollTrigger: '.footer',
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });
});