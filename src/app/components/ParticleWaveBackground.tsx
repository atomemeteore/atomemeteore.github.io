import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  glow: number;
};

function isDarkTheme() {
  return document.documentElement.classList.contains('dark');
}

function createParticles(width: number, height: number): Particle[] {
  const count = Math.round(Math.min(110, Math.max(45, (width * height) / 18000)));
  const particles: Particle[] = [];

  for (let i = 0; i < count; i++) {
    const towardRight = Math.random() ** 0.65;
    particles.push({
      x: width * (0.15 + towardRight * 0.85),
      y: height * Math.random() * 0.92,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: 1 + Math.random() * 1.8,
      glow: Math.random() * 0.7,
    });
  }

  return particles;
}

export function ParticleWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationId = 0;
    let dark = isDarkTheme();
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = createParticles(width, height);
    };

    const colors = () =>
      dark
        ? { node: '180, 230, 255', line: '120, 200, 230' }
        : { node: '30, 90, 140', line: '50, 110, 160' };

    const draw = () => {
      if (document.hidden) {
        return;
      }

      ctx.clearRect(0, 0, width, height);
      const { node, line } = colors();
      const maxDistance = Math.min(160, Math.max(90, width * 0.12));

      if (!reduceMotion) {
        for (const particle of particles) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < -20) particle.x = width + 20;
          if (particle.x > width + 20) particle.x = -20;
          if (particle.y < -20) particle.y = height + 20;
          if (particle.y > height + 20) particle.y = -20;
        }
      }

      ctx.lineWidth = 0.7;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          if (distance > maxDistance) {
            continue;
          }

          const alpha = (1 - distance / maxDistance) * (dark ? 0.28 : 0.18);
          ctx.strokeStyle = `rgba(${line}, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const particle of particles) {
        const alpha = dark ? 0.45 + particle.glow * 0.45 : 0.35 + particle.glow * 0.3;
        ctx.fillStyle = `rgba(${node}, ${alpha})`;
        ctx.shadowColor = `rgba(${node}, ${dark ? 0.7 : 0.25})`;
        ctx.shadowBlur = dark ? 8 + particle.glow * 10 : 2;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      if (!reduceMotion) {
        animationId = window.requestAnimationFrame(draw);
      }
    };

    resize();
    animationId = window.requestAnimationFrame(draw);

    const onResize = () => {
      resize();
      if (reduceMotion) {
        draw();
      }
    };

    const observer = new MutationObserver(() => {
      dark = isDarkTheme();
      if (reduceMotion) {
        draw();
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    window.addEventListener('resize', onResize);

    const onVisibility = () => {
      if (document.hidden || reduceMotion) {
        window.cancelAnimationFrame(animationId);
        return;
      }
      animationId = window.requestAnimationFrame(draw);
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-wave-canvas"
      aria-hidden="true"
    />
  );
}
