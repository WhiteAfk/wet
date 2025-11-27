document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('page-transition');

    document.querySelectorAll('h1, h2, h3, p, a, button, .card, .post-card, img, input, textarea, select, i, .icon').forEach((element, index) => {
        element.classList.add('fade-in');
        element.style.animationDelay = `${index * 100}ms`;
    });
});