import { useEffect, useRef } from "react";

const HiddenMe = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
  const canvas = canvasRef.current;
  const container = containerRef.current;
  const ctx = canvas.getContext("2d");

  const resizeCanvas = () => {
    const rect = container.getBoundingClientRect();

    // Match canvas EXACTLY to container
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Reset + refill dust
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "#020617";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  // Initial setup
  resizeCanvas();

  // Observe size changes (IMPORTANT)
  const resizeObserver = new ResizeObserver(() => {
    resizeCanvas();
  });

  resizeObserver.observe(container);

  const draw = (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const brushSize = 80;

    ctx.globalCompositeOperation = "destination-out";

    const gradient = ctx.createRadialGradient(x, y, 20, x, y, brushSize);
    gradient.addColorStop(0, "rgba(0,0,0,1)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, Math.PI * 2);
    ctx.fill();
  };

  canvas.addEventListener("mousemove", draw);

  return () => {
    canvas.removeEventListener("mousemove", draw);
    resizeObserver.disconnect();
  };
}, []);

  return (
    <section className="bg-[#0f172a] px-6 py-20 flex justify-center">
      
      {/* Smaller container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-md mx-auto"
      >
        {/* Image (scaled down, no cropping) */}
        <img
          ref={imgRef}
          src="./public/anime-me.png"
          alt="hidden"
          className="w-full h-auto rounded-2xl"
        />

        {/* Dust Layer */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 rounded-2xl cursor-none"
        />
      </div>

    </section>
  );
};

export default HiddenMe;