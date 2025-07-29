// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for any anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for fade-in effect
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add parallax effect to header wave
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const headerWave = document.querySelector('.header-wave');
        if (headerWave) {
            headerWave.style.transform = `translateY(${scrolled * 0.5}px)`;
        }

        // Add parallax to footer wave
        const footerWave = document.querySelector('.footer-wave');
        if (footerWave) {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollProgress = scrolled / (documentHeight - windowHeight);
            footerWave.style.transform = `translateY(${-scrollProgress * 50}px)`;
        }
    });

    // Add typing effect to section titles
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Add hover effects to tech badges
    const techBadges = document.querySelectorAll('.tech-badges img');
    techBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-5px) rotate(2deg)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0) rotate(0deg)';
        });
    });

    // Add click effect to social cards
    const socialCards = document.querySelectorAll('.social-card');
    socialCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(88, 166, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

            this.style.position = 'relative';
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add floating animation with mouse interaction
    const floatingElements = document.querySelectorAll('.stat-card, .philosophy-card');
    floatingElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            this.style.transform = '';
        });
    });

    // Add dynamic background particle effect
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = Math.random() * 4 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(88, 166, 255, ${Math.random() * 0.3 + 0.1})`;
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '-1';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = '100vh';
        particle.style.animation = `floatUp ${Math.random() * 3 + 2}s linear infinite`;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 5000);
    }

    // Create particles periodically
    setInterval(createParticle, 1000);

    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '3px';
    progressBar.style.background = 'linear-gradient(90deg, #58a6ff, #f85149)';
    progressBar.style.zIndex = '1000';
    progressBar.style.transition = 'width 0.1s ease';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

    // Add theme toggle functionality
    function createThemeToggle() {
        const toggle = document.createElement('button');
        toggle.innerHTML = '🌙';
        toggle.style.position = 'fixed';
        toggle.style.top = '20px';
        toggle.style.right = '20px';
        toggle.style.width = '50px';
        toggle.style.height = '50px';
        toggle.style.borderRadius = '50%';
        toggle.style.border = 'none';
        toggle.style.background = 'rgba(88, 166, 255, 0.2)';
        toggle.style.color = '#fff';
        toggle.style.fontSize = '20px';
        toggle.style.cursor = 'pointer';
        toggle.style.zIndex = '1000';
        toggle.style.transition = 'all 0.3s ease';
        toggle.style.backdropFilter = 'blur(10px)';
        
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            toggle.innerHTML = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
        });
        
        document.body.appendChild(toggle);
    }

    createThemeToggle();

    // Add loading animation
    const loadingScreen = document.createElement('div');
    loadingScreen.style.position = 'fixed';
    loadingScreen.style.top = '0';
    loadingScreen.style.left = '0';
    loadingScreen.style.width = '100%';
    loadingScreen.style.height = '100%';
    loadingScreen.style.background = 'linear-gradient(135deg, #0d1117, #161b22)';
    loadingScreen.style.display = 'flex';
    loadingScreen.style.justifyContent = 'center';
    loadingScreen.style.alignItems = 'center';
    loadingScreen.style.zIndex = '9999';
    loadingScreen.style.transition = 'opacity 0.5s ease';
    
    const loadingText = document.createElement('div');
    loadingText.innerHTML = 'Loading Digital Universe...';
    loadingText.style.color = '#58a6ff';
    loadingText.style.fontSize = '1.5rem';
    loadingText.style.fontFamily = 'Orbitron, monospace';
    loadingText.style.textAlign = 'center';
    
    loadingScreen.appendChild(loadingText);
    document.body.appendChild(loadingScreen);
    
    // Hide loading screen after content loads
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 1500);
});

// Add CSS animations through JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes floatUp {
        to {
            transform: translateY(-100vh);
            opacity: 0;
        }
    }
    
    /* Light theme styles */
    .light-theme {
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%) !important;
        color: #212529 !important;
    }
    
    .light-theme .section-title {
        color: #495057 !important;
    }
    
    .light-theme .about-item {
        background: rgba(248, 249, 250, 0.8) !important;
        color: #212529 !important;
    }
    
    .light-theme .stat-card,
    .light-theme .social-card,
    .light-theme .philosophy-card {
        background: rgba(255, 255, 255, 0.8) !important;
        color: #212529 !important;
        border-color: rgba(13, 110, 253, 0.2) !important;
    }
`;
document.head.appendChild(style);
