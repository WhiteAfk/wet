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
    
    console.log('✓ Page initialized');
});

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