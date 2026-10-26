// Scroll reveal: cards and headings slam in once as they enter the viewport.
// Elements are only hidden after JS runs, so the page works without it.
(function () {
    var targets = document.querySelectorAll(
        '.section-heading, .card, .artist-card, .step, .faq-item, .contact-panel, .map-frame, .content'
    );
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    targets.forEach(function (el, i) {
        el.classList.add('reveal');
        el.style.setProperty('--reveal-delay', (i % 4) * 70 + 'ms');
        observer.observe(el);
    });
})();
