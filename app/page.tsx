"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Preloader } from "@/components/preloader";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { SolutionsSection } from "@/components/solutions-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const DroneModelClient = dynamic(
  () => import('@/components/drone-model').then(mod => mod.DroneModel),
  { ssr: false }
);

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [modelReady, setModelReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModelReady(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleModelLoad = () => {
    if (modelReady) {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen relative">
      {loading && <Preloader text="Loading 3D Experience..." />}
      <div className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        <Navbar />
        <DroneModelClient onLoad={handleModelLoad} />
        <div className="content-section main-content relative z-0">
          <HeroSection />
          <FeaturesSection />
          <CapabilitiesSection />
          <SolutionsSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
