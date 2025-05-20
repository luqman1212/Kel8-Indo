// Hamburger Menu Toggle
document.getElementById('hamburger-btn').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        }
        document.getElementById('mobile-menu').classList.remove('active');
    });
});