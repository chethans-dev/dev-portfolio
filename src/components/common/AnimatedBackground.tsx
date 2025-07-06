"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const isPhotographyPage = pathname.startsWith('/photography');

    document.documentElement.classList.toggle('photography-theme', isPhotographyPage);
    document.documentElement.classList.toggle('dark', !isPhotographyPage);

    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.style.backgroundColor = isPhotographyPage ? 'hsl(0 0% 98%)' : 'hsl(220 20% 10%)';
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let networkParticles: NetworkParticle[] = [];
    let bokehParticles: BokehParticle[] = [];

    const mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        mouse.x = event.touches[0].clientX;
        mouse.y = event.touches[0].clientY;
      }
    };

    const handleMouseOut = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('touchend', handleMouseOut);


    // --- Network Animation (Main Site) ---
    const networkParticleFillColor = 'hsl(270 70% 65%)';
    const networkLineBaseHue = '270';
    const networkLineBaseSat = '70%';
    const networkLineBaseLightness = 85;
    const interactionRadiusNetwork = 120;

    class NetworkParticle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      baseX: number;
      baseY: number;

      constructor(x: number, y: number, size: number, speedX: number, speedY: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.baseX = this.x;
        this.baseY = this.y;
      }

      update() {
        if (!canvas) return;

        // Mouse interaction
        if (mouse.x !== undefined && mouse.y !== undefined) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < interactionRadiusNetwork) {
            const force = (interactionRadiusNetwork - distance) / interactionRadiusNetwork;
            this.x -= (dx / distance) * force * 2.5;
            this.y -= (dy / distance) * force * 2.5;
          } else {
             // Return to base position
            if (this.x !== this.baseX) {
                const dxReturn = this.x - this.baseX;
                this.x -= dxReturn / 20;
            }
            if (this.y !== this.baseY) {
                const dyReturn = this.y - this.baseY;
                this.y -= dyReturn / 20;
            }
          }
        }
        
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.01;

        // Wall collision
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = networkParticleFillColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    function initNetwork() {
      if (!canvas) return;
      networkParticles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 18000);
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 1.8 + 0.8;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const speedX = (Math.random() * 0.5 - 0.25);
        const speedY = (Math.random() * 0.5 - 0.25);
        networkParticles.push(new NetworkParticle(x, y, size, speedX, speedY));
      }
    }

    function connectNetwork() {
      if (!ctx) return;
      let opacityValue = 1;
      for (let a = 0; a < networkParticles.length; a++) {
        for (let b = a; b < networkParticles.length; b++) {
          const distance = Math.sqrt(
            (networkParticles[a].x - networkParticles[b].x) ** 2 +
            (networkParticles[a].y - networkParticles[b].y) ** 2
          );

          if (distance < 120) {
            opacityValue = 1 - (distance / 120);
            ctx.strokeStyle = `hsla(${networkLineBaseHue}, ${networkLineBaseSat}, ${networkLineBaseLightness}%, ${opacityValue.toFixed(2)})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(networkParticles[a].x, networkParticles[a].y);
            ctx.lineTo(networkParticles[b].x, networkParticles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animateNetwork() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const particle of networkParticles) {
        particle.update();
        particle.draw();
      }
      connectNetwork();
      animationFrameId = requestAnimationFrame(animateNetwork);
    }
    
    // --- Bokeh Animation (Photography Page) ---
    const interactionRadiusBokeh = 150;

    class BokehParticle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;

        constructor(x: number, y: number, size: number, speedX: number, speedY: number, color: string) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.speedX = speedX;
            this.speedY = speedY;
            this.color = color;
        }

        update() {
            if (!canvas) return;
            
            // Mouse interaction
            if (mouse.x !== undefined && mouse.y !== undefined) {
              const dx = mouse.x - this.x;
              const dy = mouse.y - this.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < interactionRadiusBokeh) {
                const force = (interactionRadiusBokeh - distance) / interactionRadiusBokeh;
                this.x -= (dx / distance) * force * 1.5;
                this.y -= (dy / distance) * force * 1.5;
              }
            }

            this.x += this.speedX;
            this.y += this.speedY;

            // Screen wrapping
            if (this.x > canvas.width + this.size) this.x = -this.size;
            if (this.x < -this.size) this.x = canvas.width + this.size;
            if (this.y > canvas.height + this.size) this.y = -this.size;
            if (this.y < -this.size) this.y = canvas.height + this.size;
        }

        draw() {
            if (!ctx) return;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function initBokeh() {
        if (!canvas) return;
        bokehParticles = [];
        const colors = [
            'hsla(240, 5%, 80%, 0.3)',
            'hsla(240, 5%, 70%, 0.3)',
            'hsla(240, 5%, 60%, 0.3)'
        ];
        const numberOfParticles = Math.floor((canvas.width * canvas.height) / 30000);
        for (let i = 0; i < numberOfParticles; i++) {
            const size = Math.random() * 40 + 10;
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const speedX = (Math.random() * 0.4 - 0.2);
            const speedY = (Math.random() * 0.4 - 0.2);
            const color = colors[Math.floor(Math.random() * colors.length)];
            bokehParticles.push(new BokehParticle(x, y, size, speedX, speedY, color));
        }
    }
    
    function animateBokeh() {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const particle of bokehParticles) {
            particle.update();
            particle.draw();
        }
        animationFrameId = requestAnimationFrame(animateBokeh);
    }

    // --- Main Logic ---
    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (isPhotographyPage) {
        initBokeh();
      } else {
        initNetwork();
      }
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    if (isPhotographyPage) {
      animateBokeh();
    } else {
      animateNetwork();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('touchend', handleMouseOut);
    };
  }, [pathname]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
    />
  );
}
