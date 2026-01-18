/* ============================================
   MAIN.JS - UNIFIED JAVASCRIPT
   ============================================ */

// Copy to Clipboard Function
function copyToClipboard(text, type) {
    navigator.clipboard.writeText(text).then(() => {
        const notification = document.querySelector('.copy-notification');
        if (notification) {
            notification.classList.add('show');
            notification.querySelector('span').textContent = `✅ Đã sao chép ${type}!`;
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 2000);
        }
    }).catch(err => {
        console.error('Copy error:', err);
        alert('Không thể sao chép. Vui lòng thử lại!');
    });
}

// Generate QR Code for Bank Transfer
function generateQR() {
    const amount = document.getElementById('amount')?.value.trim().replace(/[,.]/g, '') || '';
    const addInfo = document.getElementById('addInfo')?.value.trim() || '';
    const accountName = document.getElementById('accountName')?.value || '';
    const qrImage = document.getElementById('qrImage');
    const btn = document.getElementById('generateBtn');

    if (!amount || isNaN(amount) || amount <= 0) {
        alert('Vui lòng nhập số tiền hợp lệ');
        document.getElementById('amount')?.focus();
        return;
    }

    if (btn) btn.disabled = true;
    if (qrImage) qrImage.style.opacity = '0.5';

    const newImage = new Image();
    
    newImage.onload = function() {
        if (qrImage) {
            qrImage.src = this.src;
            qrImage.style.opacity = '1';
            qrImage.style.display = 'block';
            qrImage.style.animation = 'fadeIn 0.5s ease-out forwards';
        }
        if (btn) {
            btn.disabled = false;
            btn.style.opacity = '1';
        }
    };
    
    newImage.onerror = function() {
        alert('Có lỗi xảy ra khi tạo mã QR. Vui lòng thử lại!');
        if (qrImage) qrImage.style.display = 'none';
        if (btn) {
            btn.disabled = false;
            btn.style.opacity = '1';
        }
    };
    
    newImage.src = `https://img.vietqr.io/image/MBBank-5088882345-qr_only.png?amount=${amount}&addInfo=${encodeURIComponent(addInfo)}&accountName=${encodeURIComponent(accountName)}`;
}

// Redirect to QR Result Page
function redirectToQR() {
    const amount = document.getElementById('amount')?.value.trim().replace(/[,.]/g, '') || '';
    const addInfo = document.getElementById('addInfo')?.value.trim() || 'Ung ho wET';

    if (!amount || isNaN(amount) || amount <= 0) {
        alert('Vui lòng nhập số tiền hợp lệ');
        document.getElementById('amount')?.focus();
        return;
    }

    console.log('Redirecting to QR - amount:', amount, 'info:', addInfo);

    // Redirect to qr-result page with parameters
    const params = new URLSearchParams({
        amount: amount,
        addInfo: addInfo
    });
    
    const redirectUrl = `qr-result.html?${params.toString()}`;
    console.log('Redirect URL:', redirectUrl);
    
    window.location.href = redirectUrl;
}

// Format Number Input
function formatNumberInput(input) {
    if (!input) return;
    input.addEventListener('input', function(e) {
        let value = this.value.replace(/\D/g, '');
        if (value) {
            value = parseInt(value).toLocaleString('vi-VN');
            this.value = value;
        }
    });
}

// Enter Key Handler
function setupEnterKey(amountId, infoId) {
    const amountInput = document.getElementById(amountId);
    const infoInput = document.getElementById(infoId);

    if (amountInput) {
        amountInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                infoInput?.focus();
            }
        });
    }

    if (infoInput) {
        infoInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                generateQR();
            }
        });
    }
}

// Initialize Payment Page
function initPaymentPage() {
    formatNumberInput(document.getElementById('amount'));
    setupEnterKey('amount', 'addInfo');

    // Setup keyboard access for strong elements and copy buttons
    document.querySelectorAll('[onclick*="copyToClipboard"]').forEach(el => {
        el.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                this.click();
            }
        });
    });
}

// Smooth Scroll Animation
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initPaymentPage();
    setupSmoothScroll();

    // Add animation to elements on scroll
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.info-card, .form-card').forEach(el => {
            observer.observe(el);
        });
    }
});

// Fallback for older browsers
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}
