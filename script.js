/* ===================================================
   Madhu Milan Tea - Interactive Features & Animations
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Create and Attach Back-To-Top Button Dynamically
    const backBtn = document.createElement('div');
    backBtn.id = 'backToTop';
    backBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(backBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backBtn.classList.add('show');
        } else {
            backBtn.classList.remove('show');
        }
    });

    backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 2. Scroll-Triggered Reveal Animations for Sections
    const revealElements = document.querySelectorAll('section, .product-card, .about-card, .feature-box');
    
    revealElements.forEach(el => el.classList.add('reveal'));

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on page load

    // 3. Navbar Shrink / Glassmorphism Shadow on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
            header.style.boxShadow = '0 10px 25px rgba(0,0,0,0.8)';
        } else {
            header.style.padding = '0';
            header.style.boxShadow = 'none';
        }
    });

    // 4. Toast Notification when clicking Order buttons
    const orderButtons = document.querySelectorAll('a[href*="wa.me"]');
    orderButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Redirecting user to WhatsApp for inquiry...');
        });
    });
});
