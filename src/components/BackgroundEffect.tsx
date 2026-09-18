"use client";

import { useEffect, useRef } from "react";

export function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // --- SNIPPETS Y SÍMBOLOS DE CÓDIGO/SISTEMAS ---
    const codeBlocks = [
      "def pipeline(data):",
      "model.forward(x)",
      "tensor.to(device)",
      "async fetch_stream()",
      "0x7F8B4C -> ACK",
      "STATUS: 200 OK",
      "embed(v) => R^d",
      "weights.optimize()",
      "loss.backward()",
      "kubectl get pods",
      "docker.deploy()",
      "git push origin main",
      "{ status: 'active' }",
      "p-value < 0.05",
      "ReLU(Wx + b)",
      "sys.connect('cloud')",
    ];

    // Generar etiquetas de código fijas en el plano
    const codeNodes = Array.from({ length: 18 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      text: codeBlocks[Math.floor(Math.random() * codeBlocks.length)],
      opacity: Math.random() * 0.35 + 0.15,
      speed: Math.random() * 0.15 + 0.05,
    }));

    // --- NODOS CIBERNÉTICOS Y RED NEURONAL ---
    const nodeCount = Math.floor((width * height) / 22000);
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 1,
    }));

    // Pulso electromagnético que recorre la pantalla
    let pulseY = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Suavizado de movimiento de mouse
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      // 1. DIBUJAR GRILLA DE FONDO (ESTILO CYBER-GRID)
      const gridSize = 60;
      ctx.strokeStyle = "rgba(59, 130, 246, 0.03)";
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. DIBUJAR BLOQUES DE CÓDIGO FLOTANTES EN POSICIONES TECH
      ctx.font = '11px "Fira Code", "JetBrains Mono", monospace';
      codeNodes.forEach((node) => {
        node.y -= node.speed;
        if (node.y < -20) node.y = height + 20;

        // Sensibilidad al pasar el cursor cerca del código
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let alpha = node.opacity;

        if (dist < 150) {
          alpha = Math.min(0.85, alpha + (1 - dist / 150) * 0.5);
        }

        ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`; // Cyan/Azul claro
        ctx.fillText(`> ${node.text}`, node.x, node.y);
      });

      // 3. NODOS DE CONEXIÓN NEURONAL CON DETECTORES DE CURSOR
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 102, 241, 0.4)";
        ctx.fill();

        // Líneas entre nodos
        for (let j = i + 1; j < nodes.length; j++) {
          const node2 = nodes[j];
          const dx = node.x - node2.x;
          const dy = node.y - node2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - dist / 120) * 0.15})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      });

      // 4. ESCÁNER / PULSO DE DATOS VERTICAL
      pulseY += 1.2;
      if (pulseY > height) pulseY = 0;

      const pulseGradient = ctx.createLinearGradient(0, pulseY - 40, 0, pulseY);
      pulseGradient.addColorStop(0, "rgba(59, 130, 246, 0)");
      pulseGradient.addColorStop(1, "rgba(59, 130, 246, 0.08)");

      ctx.fillStyle = pulseGradient;
      ctx.fillRect(0, pulseY - 40, width, 40);

      // 5. LUZ RADIAL INTERACTIVA DE ALTA PRECISIÓN (CURSOR)
      const glowGradient = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        350,
      );
      glowGradient.addColorStop(0, "rgba(56, 189, 248, 0.09)");
      glowGradient.addColorStop(0.5, "rgba(99, 102, 241, 0.03)");
      glowGradient.addColorStop(1, "transparent");

      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
