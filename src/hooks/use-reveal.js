import { useEffect } from 'react';

// Fade-up suave nos blocos ao rolar a página. A classe só é adicionada via JS,
// então sem JS (ou com "reduzir movimento") o conteúdo aparece normalmente.
const SELECTOR = [
  'section:not(#home) h2',
  'section:not(#home):not(#portfolio) .grid > *',
  '#about p',
].join(',');

export default function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const els = document.querySelectorAll(SELECTOR);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${(i % 5) * 70}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}
