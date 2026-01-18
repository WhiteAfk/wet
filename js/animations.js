// ============================================
// ANIMATIONS & INTERACTIONS
// ============================================

const ANIMATION_DELAY = 50; // ms per element
const SCROLL_THRESHOLD = 0.1; // 10% visibility to trigger

/**
 * Initialize page animations on load
 */
function initPageAnimations() {
    const elements = document.querySelectorAll(
        'h1, h2, h3, p, a, button, .card, .post-card, img, input, textarea, .icon'
    );
    
    elements.forEach((el, idx) => {
        el.classList.add('slide-up');
        el.style.animationDelay = `${idx * ANIMATION_DELAY}ms`;
    });
}

/**
 * Intersection Observer for lazy animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: SCROLL_THRESHOLD,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.card, .post-card, .skill-card, .contact-card').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Add hover effects to interactive elements
 */
function initHoverEffects() {
    const interactiveEls = document.querySelectorAll('a, button, .card, .post-card, .contact-card');
    
    interactiveEls.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        el.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/**
 * Copy to clipboard functionality
 */
function initCopyButtons() {
    document.querySelectorAll('.copy-btn, .copy-button').forEach(btn => {
        btn.addEventListener('click', async function(e) {
            e.preventDefault();
            
            // Find the text to copy
            const text = this.dataset.copy || this.previousElementSibling?.textContent;
            
            if (!text) return;
            
            try {
                await navigator.clipboard.writeText(text);
                
                // Show success feedback
                const originalText = this.innerHTML;
                this.classList.add('copied');
                this.innerHTML = '✓ Copied!';
                
                setTimeout(() => {
                    this.classList.remove('copied');
                    this.innerHTML = originalText;
                }, 2000);
            } catch (err) {
                console.error('Copy failed:', err);
            }
        });
    });
}

/**
 * Smooth scroll behavior
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/**
 * Add keyboard shortcuts
 */
function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K: Focus search (if exists)
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('input[type="search"]');
            if (searchInput) searchInput.focus();
        }
    });
}

/**
 * Throttle function for performance
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Handle mobile menu toggle (if exists)
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
}

/**
 * Initialize everything on page load
 */
document.addEventListener('DOMContentLoaded', function() {
    initPageAnimations();
    initScrollAnimations();
    initHoverEffects();
    initCopyButtons();
    initSmoothScroll();
    initKeyboardShortcuts();
    initMobileMenu();
    initTetFireworks();
    initClickEffect();
    
    console.log('✓ Page initialized');
});

/**
 * Tet Lunar New Year Fireworks Effect
 */
function initTetFireworks() {
    const canvas = document.createElement('canvas');
    canvas.id = 'tet-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '9999';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = (Math.random() - 0.5) * 8;
            this.vy = (Math.random() - 0.5) * 8 - 2;
            this.life = 1;
            this.decay = Math.random() * 0.015 + 0.015;
            this.size = Math.random() * 3 + 2;
            
            // Random colors: red, gold, yellow (Tet colors)
            const colors = ['#FF1744', '#FFD700', '#FFC107', '#FF6F00'];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += 0.2; // gravity
            this.life -= this.decay;
        }

        draw(ctx) {
            ctx.globalAlpha = this.life;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function createFireworks(x, y) {
        for (let i = 0; i < 15; i++) {
            particles.push(new Particle(x, y));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;

        particles = particles.filter(p => p.life > 0);
        particles.forEach(p => {
            p.update();
            p.draw(ctx);
        });

        if (particles.length > 0) {
            requestAnimationFrame(animate);
        }
    }

    // Click to create fireworks
    document.addEventListener('click', (e) => {
        createFireworks(e.clientX, e.clientY);
        animate();
    });

    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

/**
 * Click ripple effect for all pages
 */
function initClickEffect() {
    document.addEventListener('click', (e) => {
        // Create ripple
        const ripple = document.createElement('span');
        ripple.style.position = 'fixed';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'radial-gradient(circle, rgba(79,70,229,0.6) 0%, rgba(79,70,229,0) 70%)';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '10000';
        ripple.style.animation = 'ripple-burst 0.6s ease-out';
        ripple.style.transform = 'translate(-50%, -50%)';
        
        document.body.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
}

/**
 * Optimize on visibility change
 */
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('Page hidden - reducing animations');
    } else {
        console.log('Page visible');
    }
});