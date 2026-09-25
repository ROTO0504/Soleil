import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const media = gsap.matchMedia();

// Everything is visible without JavaScript. Reduced-motion users get the static design.
media.add('(prefers-reduced-motion: no-preference)', () => {
  const intro = gsap.timeline({ defaults: { ease: 'power2.out' } });
  intro.from('.hero-line', { y: 10, opacity: 0, duration: 1, stagger: .15, clearProps: 'transform,opacity' })
    .from('.hero-enter', { y: 6, opacity: 0, duration: .8, stagger: .08, clearProps: 'transform,opacity' }, .3);

  gsap.utils.toArray<HTMLElement>('.section-heading, .about-body, .section-top, .lesson-card, .lesson-process, .foundation-grid article, .price-row:not(.table-head), .faq-list, .contact-inner').forEach(element => {
    // Skip elements above the current position when restoring a deep link.
    if (element.getBoundingClientRect().top < window.innerHeight * .9) return;
    gsap.from(element, {
      y: 24, opacity: 0, duration: .65, ease: 'power2.out',
      scrollTrigger: { trigger: element, start: 'top 96%', once: true },
      clearProps: 'transform,opacity',
    });
  });

});

// Refresh after fonts/layout settle; matchMedia automatically reverts on preference changes.
document.fonts.ready.then(() => ScrollTrigger.refresh());
if (import.meta.hot) import.meta.hot.dispose(() => media.revert());
