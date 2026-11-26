import { useEffect, useRef, useState } from 'react';

// Cursor personalizado: ponto que acompanha o mouse + anel que segue com um leve atraso.
// Sobre algo clicável, o anel cresce e preenche. Só ativa em mouse/trackpad (pointer: fine).
// O mix-blend-mode "difference" faz o cursor aparecer tanto no fundo escuro quanto no amarelo.
const CLICKABLE = 'a, button, select, label, summary, [role="button"], [onclick]';
const TEXT_INPUT = 'input, textarea, [contenteditable="true"]';

const CustomCursor = () => {
  const dot = useRef(null);
  const ring = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setEnabled(fine.matches);
    update();
    fine.addEventListener('change', update);
    return () => fine.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.documentElement.classList.add('has-custom-cursor');

    let x = -100, y = -100, rx = -100, ry = -100, raf;
    const d = dot.current, r = ring.current;

    const onMove = (e) => {
      x = e.clientX; y = e.clientY;
      d.style.translate = `${x}px ${y}px`;
      const t = e.target instanceof Element ? e.target : null;
      const overText = t?.closest(TEXT_INPUT);
      const overLink = !overText && t?.closest(CLICKABLE);
      r.classList.toggle('is-hover', !!overLink);
      d.classList.toggle('is-hover', !!overLink);
      const hidden = !!overText;
      d.classList.toggle('is-hidden', hidden);
      r.classList.toggle('is-hidden', hidden);
    };
    const tick = () => {
      rx += (x - rx) * (reduce ? 1 : 0.2);
      ry += (y - ry) * (reduce ? 1 : 0.2);
      r.style.translate = `${rx}px ${ry}px`;
      raf = requestAnimationFrame(tick);
    };
    const hide = () => { d.classList.add('is-hidden'); r.classList.add('is-hidden'); };
    const show = () => { d.classList.remove('is-hidden'); r.classList.remove('is-hidden'); };
    const down = () => r.classList.add('is-down');
    const up = () => r.classList.remove('is-down');

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', hide);
    document.addEventListener('mouseenter', show);
    window.addEventListener('blur', hide); // ex.: mouse entrou no player do Vimeo
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', hide);
      document.removeEventListener('mouseenter', show);
      window.removeEventListener('blur', hide);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
