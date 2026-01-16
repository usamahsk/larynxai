document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation & Mobile Menu ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelectorAll('.mobile-menu a');

    function toggleMenu() {
        if (!mobileMenu) return;
        const isOpen = mobileMenu.classList.contains('active');
        if (isOpen) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    if (mobileToggle) mobileToggle.addEventListener('click', toggleMenu);
    if (closeMenu) closeMenu.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // --- Sticky Header Glass Effect ---
    const header = document.querySelector('#navbar');

    window.addEventListener('scroll', () => {
        if (!header) return;
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId) return;

            e.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = header ? header.offsetHeight : 0;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerHeight - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Contact Form Handling (AJAX) ---
    const form = document.querySelector('.styled-form');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;

            // Loading State
            btn.innerText = 'Sending...';
            btn.disabled = true;
            btn.style.opacity = '0.7';

            const formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) {
                        btn.innerText = 'Message Sent!';
                        btn.style.background = '#22c55e'; // Success Green
                        btn.style.color = '#fff';
                        btn.style.boxShadow = '0 0 20px rgba(34, 197, 94, 0.4)';
                        form.reset();

                        setTimeout(() => {
                            btn.innerText = originalText;
                            btn.style.background = '';
                            btn.style.color = '';
                            btn.style.boxShadow = '';
                            btn.disabled = false;
                            btn.style.opacity = '1';
                        }, 4000);
                    } else {
                        // FormSubmit often needs activation first time.
                        alert('Note: This is a demo form. To make it work, please activate the email address on FormSubmit.co.');
                        btn.innerText = 'Try Again';
                        btn.disabled = false;
                        btn.style.opacity = '1';
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    btn.innerText = 'Error';
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.disabled = false;
                    }, 3000);
                });
        });
    }

    // --- Fade In Animation on Scroll ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select major aesthetic elements
    const animatedElements = document.querySelectorAll(
        '.hero-text, .glass-phone, .stat-item, .about-card, .service-card, .founder-container, .result-card, .contact-wrapper, .section-header, .re-feature, .step-card'
    );

    // Inject dynamic styles if not present (although CSS has them, safe to ensure)
    if (!document.getElementById('anim-styles')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'anim-styles';
        styleSheet.innerText = `
            .fade-element {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                will-change: opacity, transform;
            }
            .appear {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(styleSheet);
    }

    animatedElements.forEach((el, index) => {
        el.classList.add('fade-element');
        // Add staggering delays for grid items
        if (el.classList.contains('service-card') || el.classList.contains('result-card') || el.classList.contains('stat-item') || el.classList.contains('re-feature') || el.classList.contains('step-card')) {
            // This simple logic might not be perfect for all grids but adds nice variety
            el.style.transitionDelay = `${(index % 4) * 100}ms`;
        }
        observer.observe(el);
    });
});
