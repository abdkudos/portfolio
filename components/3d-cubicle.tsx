'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

export function CubeWrapper({ children }: { children: React.ReactNode }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      // Calculate scroll progress (0 to 1)
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = documentHeight > 0 ? scrolled / documentHeight : 0;

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  if (!isMounted) {
    return <>{children}</>;
  }

  // Calculate 3D transforms based on scroll
  // Full rotation cycle: 0 = front, 0.25 = right, 0.5 = back, 0.75 = left, 1 = front
  const rotationY = scrollProgress * 360;

  // Calculate stretch effect - peaks at transitions
  const normalizedProgress = (scrollProgress * 4) % 1;
  const stretchFactor = Math.sin(normalizedProgress * Math.PI);

  const bgColor = isDark ? '#000000' : '#ffffff';

  return (
    <div
      ref={containerRef}
      style={{
        perspective: '1000px',
        backgroundColor: bgColor,
        overflow: 'hidden',
      }}
    >
      {/* 3D Cube Container */}
      <div
        style={{
          position: 'relative',
          width: '100vw',
          minHeight: '100vh',
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rotationY}deg)`,
          transition: 'none',
        }}
      >
        {/* Front Face - Main Portfolio */}
        <div
          style={{
            width: '100vw',
            minHeight: '100vh',
            transformStyle: 'preserve-3d',
            transform: 'translateZ(0px)',
            backfaceVisibility: 'hidden',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <div
            style={{
              transform: `scaleY(${1 + stretchFactor * 0.08})`,
              transformOrigin: 'center',
              transition: 'transform 0.1s ease-out',
              width: '100%',
              minHeight: '100vh',
            }}
          >
            {children}
          </div>
        </div>

        {/* Right Face - Achievements */}
        <div
          style={{
            width: '100vw',
            minHeight: '100vh',
            transformStyle: 'preserve-3d',
            transform: 'rotateY(90deg) translateZ(0px)',
            backfaceVisibility: 'hidden',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
            borderLeft: `1px solid ${isDark ? '#333' : '#ddd'}`,
          }}
        >
          <div className="text-center max-w-2xl">
            <h2 className="text-5xl font-bold mb-8" style={{ color: isDark ? '#fff' : '#000' }}>Achievements</h2>
            <div className="space-y-6 text-xl" style={{ color: isDark ? '#ccc' : '#333' }}>
              <p>🎯 Led design for 10+ successful product launches</p>
              <p>🌍 Built design systems serving 2M+ users</p>
              <p>⚡ Optimized user flows improving conversion by 45%</p>
              <p>🏆 Award-winning designer and strategist</p>
              <p>👥 Mentored 15+ junior designers</p>
            </div>
          </div>
        </div>

        {/* Back Face - About */}
        <div
          style={{
            width: '100vw',
            minHeight: '100vh',
            transformStyle: 'preserve-3d',
            transform: 'rotateY(180deg) translateZ(0px)',
            backfaceVisibility: 'hidden',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            backgroundColor: isDark ? '#0a0a0a' : '#fafafa',
            borderTop: `1px solid ${isDark ? '#333' : '#ddd'}`,
          }}
        >
          <div className="text-center max-w-2xl">
            <h2 className="text-5xl font-bold mb-8" style={{ color: isDark ? '#fff' : '#000' }}>About Me</h2>
            <div style={{ color: isDark ? '#ccc' : '#333', lineHeight: '1.8', fontSize: '1.1rem' }}>
              <p className="mb-6">
                I'm a product designer and design strategist with a passion for creating elegant solutions to complex problems. With over a decade of experience, I've worked with startups and enterprises to build products that millions of people use.
              </p>
              <p className="mb-6">
                My focus is on bridging the gap between user needs, business goals, and technical feasibility. I believe great design is both beautiful and functional.
              </p>
              <p>
                When I'm not designing, you can find me exploring new design trends, writing about product design, or mentoring the next generation of designers.
              </p>
            </div>
          </div>
        </div>

        {/* Left Face - Contact */}
        <div
          style={{
            width: '100vw',
            minHeight: '100vh',
            transformStyle: 'preserve-3d',
            transform: 'rotateY(-90deg) translateZ(0px)',
            backfaceVisibility: 'hidden',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
            borderRight: `1px solid ${isDark ? '#333' : '#ddd'}`,
          }}
        >
          <div className="text-center max-w-2xl">
            <h2 className="text-5xl font-bold mb-8" style={{ color: isDark ? '#fff' : '#000' }}>Let's Connect</h2>
            <div className="space-y-6 text-lg" style={{ color: isDark ? '#ccc' : '#333' }}>
              <p>
                <span className="font-semibold">Email:</span>
                <br />
                hello@abdulkudoos.com
              </p>
              <p>
                <span className="font-semibold">Follow:</span>
                <br />
                Twitter • LinkedIn • Dribbble
              </p>
              <p>
                <span className="font-semibold">Location:</span>
                <br />
                Worldwide • Available for projects
              </p>
              <button
                style={{
                  marginTop: '2rem',
                  padding: '1rem 2rem',
                  backgroundColor: isDark ? '#fff' : '#000',
                  color: isDark ? '#000' : '#fff',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Guide */}
      <div
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 10,
          backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
          padding: '1rem',
          borderRadius: '0.5rem',
          backdropFilter: 'blur(4px)',
          fontSize: '0.875rem',
          color: isDark ? '#fff' : '#000',
          opacity: scrollProgress < 0.05 || scrollProgress > 0.95 ? 1 : 0.3,
          transition: 'opacity 0.3s',
          pointerEvents: 'none',
          textAlign: 'center',
        }}
      >
        <div style={{ marginBottom: '0.5rem' }}>← Scroll to Rotate →</div>
        <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>
          {['Front', 'Right', 'Back', 'Left'][Math.floor(scrollProgress * 4) % 4]}
        </div>
      </div>
    </div>
  );
}
