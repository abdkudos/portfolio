'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, PerspectiveCamera } from '@react-three/drei';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

interface Face {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const FACES_DATA: Face[] = [
  {
    id: 'front',
    title: 'Design Systems',
    description: 'Building scalable and consistent design systems that empower teams to create beautiful interfaces at scale.',
    icon: '✨',
  },
  {
    id: 'top',
    title: 'Performance',
    description: 'Optimizing web applications for speed, efficiency, and exceptional user experience across all devices.',
    icon: '⚡',
  },
  {
    id: 'right',
    title: 'Innovation',
    description: 'Exploring cutting-edge technologies and pushing the boundaries of what\'s possible on the web.',
    icon: '🚀',
  },
];

interface CubicleBoxProps {
  scrollProgress: number;
  isDark: boolean;
}

function CubicleBox({ scrollProgress, isDark }: CubicleBoxProps) {
  const groupRef = useRef<THREE.Group>(null);
  const facesRef = useRef<THREE.Mesh[]>([]);
  const scaleRef = useRef([1, 1, 1]);

  const bgColor = isDark ? '#0f172a' : '#f8fafc';
  const faceColor = isDark ? '#1e293b' : '#f1f5f9';
  const textColor = isDark ? '#e2e8f0' : '#1e293b';
  const borderColor = isDark ? '#334155' : '#cbd5e1';

  // Map scroll progress to rotation (0-1 maps to 0-2π)
  const rotationY = scrollProgress * Math.PI * 2;

  // Calculate stretch effect based on scroll progress
  const stretchFactor = Math.abs(Math.sin(scrollProgress * Math.PI * 2));
  const currentFaceIndex = Math.floor(scrollProgress * 3) % 3;

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotationY;
    }

    // Apply stretching to transitioning faces with smoother animation
    facesRef.current.forEach((mesh, idx) => {
      if (mesh) {
        // Calculate which faces are transitioning
        const progress = (scrollProgress * 3) % 1;
        const isTransitioning = Math.abs(progress - 0.5) < 0.3;
        
        if (idx === currentFaceIndex && isTransitioning) {
          const stretch = 1 + Math.sin(progress * Math.PI) * 0.12;
          mesh.scale.y = stretch;
        } else {
          mesh.scale.y = 1;
        }
      }
    });
  });

  const boxWidth = 3;
  const boxHeight = 2.5;
  const boxDepth = 1.5;

  return (
    <group ref={groupRef}>
      {/* Front Face */}
      <mesh
        position={[0, 0, boxDepth / 2]}
        ref={(el) => {
          if (el) facesRef.current[0] = el;
        }}
      >
        <planeGeometry args={[boxWidth, boxHeight]} />
        <meshStandardMaterial color={faceColor} side={THREE.FrontSide} />
        {/* Border */}
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={5}
              array={new Float32Array([
                -boxWidth / 2, -boxHeight / 2, 0,
                boxWidth / 2, -boxHeight / 2, 0,
                boxWidth / 2, boxHeight / 2, 0,
                -boxWidth / 2, boxHeight / 2, 0,
                -boxWidth / 2, -boxHeight / 2, 0,
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color={borderColor} />
        </lineSegments>
        <Html position={[0, 0, 0.05]} scale={0.004} distanceFactor={1}>
          <div className="w-96 text-center pointer-events-auto">
            <div className="text-6xl mb-4">{FACES_DATA[0].icon}</div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: textColor }}>
              {FACES_DATA[0].title}
            </h3>
            <p className="text-sm opacity-75" style={{ color: textColor }}>
              {FACES_DATA[0].description}
            </p>
          </div>
        </Html>
      </mesh>

      {/* Top Face */}
      <mesh
        position={[0, boxHeight / 2, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        ref={(el) => {
          if (el) facesRef.current[1] = el;
        }}
      >
        <planeGeometry args={[boxWidth, boxDepth]} />
        <meshStandardMaterial color={faceColor} side={THREE.FrontSide} />
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={5}
              array={new Float32Array([
                -boxWidth / 2, -boxDepth / 2, 0,
                boxWidth / 2, -boxDepth / 2, 0,
                boxWidth / 2, boxDepth / 2, 0,
                -boxWidth / 2, boxDepth / 2, 0,
                -boxWidth / 2, -boxDepth / 2, 0,
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color={borderColor} />
        </lineSegments>
        <Html position={[0, 0, 0.05]} scale={0.004} distanceFactor={1}>
          <div className="w-96 text-center pointer-events-auto">
            <div className="text-6xl mb-4">{FACES_DATA[1].icon}</div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: textColor }}>
              {FACES_DATA[1].title}
            </h3>
            <p className="text-sm opacity-75" style={{ color: textColor }}>
              {FACES_DATA[1].description}
            </p>
          </div>
        </Html>
      </mesh>

      {/* Right Face */}
      <mesh
        position={[boxWidth / 2, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        ref={(el) => {
          if (el) facesRef.current[2] = el;
        }}
      >
        <planeGeometry args={[boxDepth, boxHeight]} />
        <meshStandardMaterial color={faceColor} side={THREE.FrontSide} />
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={5}
              array={new Float32Array([
                -boxDepth / 2, -boxHeight / 2, 0,
                boxDepth / 2, -boxHeight / 2, 0,
                boxDepth / 2, boxHeight / 2, 0,
                -boxDepth / 2, boxHeight / 2, 0,
                -boxDepth / 2, -boxHeight / 2, 0,
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color={borderColor} />
        </lineSegments>
        <Html position={[0, 0, 0.05]} scale={0.004} distanceFactor={1}>
          <div className="w-96 text-center pointer-events-auto">
            <div className="text-6xl mb-4">{FACES_DATA[2].icon}</div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: textColor }}>
              {FACES_DATA[2].title}
            </h3>
            <p className="text-sm opacity-75" style={{ color: textColor }}>
              {FACES_DATA[2].description}
            </p>
          </div>
        </Html>
      </mesh>
    </group>
  );
}

export function CubicleSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress: 0 when section is at bottom of viewport, 1 when at top
      const progress = 1 - (rect.top / (viewportHeight + sectionHeight));
      const clampedProgress = Math.max(0, Math.min(1, progress));

      setScrollProgress(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgColor = isDark ? '#0f172a' : '#f8fafc';

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Skills</h2>
          <p className="text-lg opacity-75">
            Scroll to explore my expertise across different areas
          </p>
        </div>

        <div className="w-full h-96 rounded-lg overflow-hidden">
          <Canvas
            dpr={1.5}
            style={{ width: '100%', height: '100%' }}
          >
            <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
            <CubicleBox scrollProgress={scrollProgress} isDark={isDark} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
