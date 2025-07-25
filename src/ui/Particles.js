'use client'
import { useEffect, useRef } from "react";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";

const defaultColors = ["#ffffff", "#ffffff", "#ffffff"];

const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex.split("").map((c) => c + c).join("");
  }
  const int = parseInt(hex, 16);
  const r = ((int >> 16) & 255) / 255;
  const g = ((int >> 8) & 255) / 255;
  const b = (int & 255) / 255;
  return [r, g, b];
};

const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;
  
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;
  
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vRandom = random;
    vColor = color;
    
    vec3 pos = position * uSpread;
    pos.z *= 10.0;
    
    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
    
    vec4 mvPos = viewMatrix * mPos;
    gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  
  uniform float uTime;
  uniform float uAlphaParticles;
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    
    if(uAlphaParticles < 0.5) {
      if(d > 0.5) {
        discard;
      }
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
    } else {
      float circle = smoothstep(0.5, 0.4, d) * 0.8;
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
    }
  }
`;

const Particles = ({
  particleCount = 150,
  particleColors = defaultColors,
  className,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    try {
      // More compatible renderer settings
      const renderer = new Renderer({
        depth: false,
        alpha: true,
        antialias: true,
        powerPreference: "default",
        preserveDrawingBuffer: false
      });

      const gl = renderer.gl;

      // Check if WebGL is properly initialized
      if (!gl) {
        console.error('WebGL not supported');
        return;
      }

      console.log('WebGL context created:', gl.getParameter(gl.VERSION));

      // Set canvas style for better compatibility
      gl.canvas.style.width = '100%';
      gl.canvas.style.height = '100%';
      gl.canvas.style.display = 'block';

      container.appendChild(gl.canvas);
      gl.clearColor(0, 0, 0, 0);

      const camera = new Camera(gl, { fov: 15 });
      camera.position.set(0, 0, 18);

      const resize = () => {
        const width = container.clientWidth;
        const height = container.clientHeight;

        if (width > 0 && height > 0) {
          renderer.setSize(width, height);
          camera.perspective({ aspect: width / height });
        }
      };

      window.addEventListener("resize", resize, false);
      setTimeout(() => resize(), 100);

      const count = particleCount;
      const positions = new Float32Array(count * 3);
      const randoms = new Float32Array(count * 4);
      const colors = new Float32Array(count * 3);
      const palette = particleColors && particleColors.length > 0 ? particleColors : defaultColors;

      for (let i = 0; i < count; i++) {
        let x, y, z, len;
        do {
          x = Math.random() * 2 - 1;
          y = Math.random() * 2 - 1;
          z = Math.random() * 2 - 1;
          len = x * x + y * y + z * z;
        } while (len > 1 || len === 0);
        const r = Math.cbrt(Math.random());
        positions.set([x * r, y * r, z * r], i * 3);
        randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
        const col = hexToRgb(palette[Math.floor(Math.random() * palette.length)]);
        colors.set(col, i * 3);
      }

      const geometry = new Geometry(gl, {
        position: { size: 3, data: positions },
        random: { size: 4, data: randoms },
        color: { size: 3, data: colors },
      });

      const program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
          uTime: { value: 0 },
          uSpread: { value: 8 },
          uBaseSize: { value: 60 },
          uSizeRandomness: { value: 0.5 },
          uAlphaParticles: { value: 1 },
        },
        transparent: true,
        depthTest: false,
      });

      const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

      let animationFrameId;
      let lastTime = performance.now();
      let elapsed = 0;

      const update = (t) => {
        animationFrameId = requestAnimationFrame(update);
        const delta = t - lastTime;
        lastTime = t;
        elapsed += delta * 0.3;

        program.uniforms.uTime.value = elapsed * 0.001;

        // Fixed gentle rotation
        particles.rotation.x = Math.sin(elapsed * 0.0001) * 0.05;
        particles.rotation.y = Math.cos(elapsed * 0.0002) * 0.08;
        particles.rotation.z += 0.005;

        renderer.render({ scene: particles, camera });
      };

      animationFrameId = requestAnimationFrame(update);

      return () => {
        window.removeEventListener("resize", resize);
        cancelAnimationFrame(animationFrameId);
        if (container.contains(gl.canvas)) {
          container.removeChild(gl.canvas);
        }
      };
    } catch (error) {
      console.error('Particles WebGL Error:', error);
      // Fallback: show a simple message or alternative effect
      container.innerHTML = '<div style="color: white; padding: 20px;">WebGL not supported in this browser</div>';
    }
  }, [particleCount, particleColors]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full ${className}`}
    />
  );
};

export default Particles;
