// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            document.querySelector('nav ul').classList.remove('active');
        }
    });
});

// Team link interaction
document.getElementById('team-link').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Website ini dibuat oleh kelompok TKP (Teknik Konstruksi Perumahan) (Tim Kreatif Pembuat Website)');
});