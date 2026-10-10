import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let isPaused = false;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Set dimensions
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // 70 small amber & white stars
    const starCount = 70;
    const colors = ["#FF8A1F", "#FFB347", "#FFE4B5", "#FFFFFF"];
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2 + 0.6, // 0.6 to 1.8px
      color: colors[Math.floor(Math.random() * colors.length)],
      baseOpacity: Math.random() * 0.5 + 0.2, // 0.2 to 0.7
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.15, // Slow drift
      vy: (Math.random() - 0.5) * 0.15,
    }));

    // Visibility change handler (pause when tab is hidden)
    const handleVisibility = () => {
      isPaused = document.hidden;
      if (!isPaused && !prefersReducedMotion) {
        lastTime = performance.now();
        render(lastTime);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    let lastTime = performance.now();

    const render = (currentTime) => {
      if (isPaused) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!prefersReducedMotion) {
          // Slow drift
          star.x += star.vx;
          star.y += star.vy;

          // Wrap edges
          if (star.x < 0) star.x = canvas.width;
          if (star.x > canvas.width) star.x = 0;
          if (star.y < 0) star.y = canvas.height;
          if (star.y > canvas.height) star.y = 0;
        }

        // Gentle twinkle
        const alpha = prefersReducedMotion
          ? star.baseOpacity
          : Math.min(
              0.7,
              Math.max(
                0.2,
                star.baseOpacity +
                  Math.sin(currentTime * star.twinkleSpeed + star.twinkleOffset) *
                    0.25
              )
            );

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = alpha;
        ctx.shadowBlur = star.radius * 2;
        ctx.shadowColor = star.color;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render(0);
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none w-full h-full"
      style={{ background: "transparent" }}
    />
  );
}
