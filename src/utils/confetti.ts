import confetti from 'canvas-confetti';

export const fireBirthdayConfetti = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
  };

  const colors = ['#E8B4B8', '#D4A5A5', '#FAF7F2', '#6B2D3E', '#D4AF37', '#F5E6E8'];

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
      colors,
    });
  }

  // Multi-stage fireworks cascade
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

export const fireHeartBurst = (x: number = 0.5, y: number = 0.5) => {
  confetti({
    particleCount: 40,
    spread: 70,
    origin: { x, y },
    colors: ['#E8B4B8', '#D4A5A5', '#9B3950', '#FAF7F2'],
    shapes: ['circle'],
    scalar: 1.1,
    zIndex: 9999,
  });
};
