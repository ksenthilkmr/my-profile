import React, { useEffect, useRef } from 'react';

interface AsciiPhotoProps {
  src?: string;
  alt?: string;
  className?: string;
}

export function AsciiPhoto({
  src = '/a.jpg',
  alt = 'Senthil Kumar ASCII Portrait',
  className = ''
}: AsciiPhotoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animFrameId: number;
    let isLoaded = false;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;

    // Spec parameters:
    const cellSize = 9;
    const contrastVal = 158; // Contrast multiplier scale
    const animSpeedIntensity = 100;
    const animIntensity = 60;

    // Contrast factor calculation
    const factor = (259 * (contrastVal + 255)) / (255 * (259 - contrastVal));

    const offscreenCanvas = document.createElement('canvas');
    const offscreenCtx = offscreenCanvas.getContext('2d', { willReadFrequently: true });

    img.onload = () => {
      isLoaded = true;
      resizeAndRender();
    };

    const renderFrame = (time: number) => {
      if (!isLoaded || !ctx || !offscreenCtx) return;

      const width = offscreenCanvas.width;
      const height = offscreenCanvas.height;

      if (width === 0 || height === 0) return;

      const displayW = canvas.width / (window.devicePixelRatio || 1);
      const displayH = canvas.height / (window.devicePixelRatio || 1);

      // Reset transform & clear
      ctx.save();
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      ctx.fillStyle = '#060606';
      ctx.fillRect(0, 0, displayW, displayH);

      // Get sampled pixel data
      const imgData = offscreenCtx.getImageData(0, 0, width, height);
      const data = imgData.data;
      const cols = Math.floor(displayW / cellSize);
      const rows = Math.floor(displayH / cellSize);

      const t = (time * 0.001 * animSpeedIntensity) / 35;

      // Bayer matrix 4x4
      const bayer4x4 = [
        [0, 8, 2, 10],
        [12, 4, 14, 6],
        [3, 11, 1, 9],
        [15, 7, 13, 5]
      ];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const sampleX = Math.min(Math.floor((c + 0.5) * cellSize), width - 1);
          const sampleY = Math.min(Math.floor((r + 0.5) * cellSize), height - 1);
          const idx = (sampleY * width + sampleX) * 4;

          const red = data[idx];
          const green = data[idx + 1];
          const blue = data[idx + 2];

          // Compute Luminance
          let lum = 0.299 * red + 0.587 * green + 0.114 * blue;

          // Apply Contrast adjustment (158)
          lum = Math.min(255, Math.max(0, factor * (lum - 128) + 128));

          // Apply Shimmer Animation phase shift
          const shimmer = Math.sin(c * 0.18 + r * 0.18 + t) * 30 * (animIntensity / 100);
          const animatedLum = Math.min(255, Math.max(0, lum + shimmer));

          const bayerVal = (bayer4x4[r % 4][c % 4] / 16) * 255;
          const normalizedVal = animatedLum / 255;

          const cx = c * cellSize + cellSize / 2;
          const cy = r * cellSize + cellSize / 2;

          if (animatedLum > bayerVal * 0.3) {
            const radius = (cellSize / 2.1) * Math.pow(normalizedVal, 0.7);

            // Vibrant tone rendering with high contrast highlights
            const toneR = Math.min(255, Math.max(160, red + 60));
            const toneG = Math.min(255, Math.max(170, green + 60));
            const toneB = Math.min(255, Math.max(180, blue + 60));

            ctx.fillStyle = `rgb(${toneR}, ${toneG}, ${toneB})`;
            ctx.beginPath();
            ctx.arc(cx, cy, Math.max(1.2, radius), 0, Math.PI * 2);
            ctx.fill();
          } else if (animatedLum > 35) {
            ctx.fillStyle = 'rgba(180, 180, 180, 0.35)';
            ctx.fillRect(cx - 0.75, cy - 0.75, 1.5, 1.5);
          }
        }
      }

      ctx.restore();
      animFrameId = requestAnimationFrame(renderFrame);
    };

    const resizeAndRender = () => {
      if (!container || !canvas || !img.width) return;

      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      const w = Math.floor(rect.width);
      const h = Math.floor(rect.height || 450);

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      // Offscreen canvas matching display size
      offscreenCanvas.width = w;
      offscreenCanvas.height = h;

      if (offscreenCtx) {
        const imgAspect = img.width / img.height;
        const containerAspect = w / h;
        let drawW = w;
        let drawH = h;
        let offsetX = 0;
        let offsetY = 0;

        if (containerAspect > imgAspect) {
          drawH = w / imgAspect;
          offsetY = (h - drawH) / 2;
        } else {
          drawW = h * imgAspect;
          offsetX = (w - drawW) / 2;
        }

        offscreenCtx.fillStyle = '#060606';
        offscreenCtx.fillRect(0, 0, w, h);
        offscreenCtx.drawImage(img, offsetX, offsetY, drawW, drawH);
      }

      if (animFrameId) cancelAnimationFrame(animFrameId);
      animFrameId = requestAnimationFrame(renderFrame);
    };

    const resizeObserver = new ResizeObserver(() => {
      resizeAndRender();
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [src]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[28rem] overflow-hidden rounded-panel bg-[#060606] shadow-xl ${className}`}
    >
      <canvas
        ref={canvasRef}
        aria-label={alt}
        className="block w-full h-full object-cover rounded-panel"
      />
      <div className="absolute inset-0 pointer-events-none rounded-panel ring-1 ring-white/10" />
    </div>
  );
}
