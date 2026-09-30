import gsap from 'gsap';

/** Called inside a GSAP context; only the pointer listeners need manual cleanup. */
export function typographicDepth(element: HTMLElement, intensity = 1, rotate = true) {
  const planes = Array.from(element.querySelectorAll<HTMLElement>('[data-depth]')).map(target => {
    const weight = Number(target.dataset.depth);
    const role = target.dataset.depthRole;
    const range = role === 'number' ? [-18, -12, -2, -4] : role === 'title' ? [12, 8, 2, 3] : role === 'description' ? [-5, -4, 0, 0] : [8 * weight, 5 * weight, 2 * weight, 2 * weight];
    const options = { duration: 0.6, ease: 'power3.out' };
    return { range, x: gsap.quickTo(target, 'x', options), y: gsap.quickTo(target, 'y', options), rx: gsap.quickTo(target, 'rotationX', options), ry: gsap.quickTo(target, 'rotationY', options) };
  });
  const reset = () => planes.forEach(p => { p.x(0); p.y(0); p.rx(0); p.ry(0); });
  const move = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse') return;
    const rect = element.getBoundingClientRect();
    const x = gsap.utils.clamp(-1, 1, (event.clientX - rect.left) / rect.width * 2 - 1);
    const y = gsap.utils.clamp(-1, 1, (event.clientY - rect.top) / rect.height * 2 - 1);
    planes.forEach(p => { p.x(x * p.range[0] * intensity); p.y(y * p.range[1] * intensity); p.rx(rotate ? -y * p.range[2] : 0); p.ry(rotate ? x * p.range[3] : 0); });
  };
  element.addEventListener('pointermove', move, { passive: true });
  element.addEventListener('pointerleave', reset);
  element.addEventListener('pointercancel', reset);
  return () => { element.removeEventListener('pointermove', move); element.removeEventListener('pointerleave', reset); element.removeEventListener('pointercancel', reset); };
}
