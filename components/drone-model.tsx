"use client";

import { useRef, useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Add onLoad prop to component interface
interface DroneModelProps {
  onLoad?: () => void;
}

export const DroneModel = ({ onLoad }: DroneModelProps) => {
  const splineContainerRef = useRef<HTMLDivElement>(null);
  const droneRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const [splineApp, setSplineApp] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let tl: gsap.core.Timeline = gsap.timeline();
    let isMounted = true;

    if (!droneRef.current || !splineApp) return;

    gsap.killTweensOf(droneRef.current);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const drone = droneRef.current;
    const droneObject = splineApp.findObjectByName('Drone');

    if (!droneObject) return;

    const mobileSettings = {
      initialLeft: '0%',
      initialTop: '10%',
      scale: 0.2, // Reduced scale further for mobile
      positions: [
        { left: '-20%', top: '5%', scale: 0.2 },
        { left: '25%', top: '40%', scale: 0.2 },
        { left: '-20%', top: '8%', scale: 0.2 },
        { left: '20%', top: '32%', scale: 0.2 },
        { left: '-20%', top: '25%', scale: 0.2 },
        { left: '0%', top: '-50%', scale: 0.2, opacity: 0 }
      ]
    };

    const desktopSettings = {
      initialLeft: '-100%',
      initialTop: '25%',
      scale: 1,
      positions: [
        { left: '-30%', top: '10%', scale: 1 },
        { left: '20%', top: '20%', scale: 1 },
        { left: '-30%', top: '10%', scale: 1 },
        { left: '0%', top: '-80%', scale: 1, opacity: 0 }
      ]
    };

    const settings = isMobile ? mobileSettings : desktopSettings;

    gsap.set(drone, {
      position: 'absolute',
      left: settings.initialLeft,
      top: settings.initialTop,
      width: '100%',
      height: '100%',
      transformOrigin: 'center center',
      pointerEvents: 'none',
      zIndex: isMobile ? 50 : 10, // Higher z-index for mobile
      scale: settings.scale,
      opacity: 1
    });

    // Immediate animation start when model loads
    gsap.to(drone, {
      left: isMobile ? '10%' : '20%',
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        if (onLoad) {
          onLoad();
        }
      }
    });

    tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        snap: isMobile ? undefined : {
          snapTo: [0, 0.22, 0.45, 0.8, 0.9, 1],
          duration: { min: 2, max: 5.5 },
          ease: 'power2.inOut'
        },
        fastScrollEnd: false,
        preventOverlaps: true,
        onUpdate: (self) => {
          if (droneObject) {
            droneObject.rotation.y = self.progress * Math.PI * (isMobile ? 3 : 2); // Faster rotation on mobile
            droneObject.position.y = Math.sin(self.progress * Math.PI) * (isMobile ? 1 : 2);
          }
        }
      },
    });

    settings.positions.forEach((position, index) => {
      tl.to(drone, {
        scale: position.scale,
        left: position.left,
        top: position.top,
        opacity: position.opacity !== undefined ? position.opacity : 1,
        duration: 0.2,
        ease: 'power2.inOut',
      });
    });

    return () => {
      isMounted = false;
      if (tl) {
        tl.kill();
      }
      const triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        if (trigger && trigger.vars && trigger.vars.trigger) {
          trigger.kill();
        }
      });
      ScrollTrigger.clearMatchMedia();
      if (triggers.length > 0) {
        ScrollTrigger.refresh();
      }
    };
  }, [splineApp, isMobile, onLoad]);

  setTimeout(() => {
    timeline.current = gsap.timeline({ paused: false });
    ScrollTrigger.refresh(true);
    ScrollTrigger.sort();
    ScrollTrigger.refresh();
  }, 500);

  function onLoadCallback(splineApp: any) {
    setSplineApp(splineApp);
    setIsLoading(false);
    ScrollTrigger.refresh(true);
  }

  return (
    <div className="spline-container fixed inset-0 pointer-events-none overflow-hidden" ref={splineContainerRef} style={{
      width: isMobile ? '180vw' : '100%',
      height: isMobile ? '150vh' : '100%',
      left: isMobile ? '-45vw' : '0',
      top: isMobile ? '-45vh' : '0',
      transform: isMobile ? 'scale(0.6)' : 'none'
    }}>
      <div ref={droneRef} className="drone-animate-float" style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Spline
          scene="https://prod.spline.design/5LKo-cOR0VQDDpIu/scene.splinecode"
          onLoad={onLoadCallback}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}