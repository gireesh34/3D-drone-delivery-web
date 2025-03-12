"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("features");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen hero-section pt-28 md:pt-32 lg:pt-6">
      <div className="container h-full">
        <div className="section-with-drone">
          <motion.div 
            className="flex flex-col justify-center items-center md:items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-center md:text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Advanced Aerial
              </span>
              <br />
              Mobility
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl text-center md:text-left">
              Enterprise-grade drone delivery solutions with unmatched performance and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
              <Button variant="gradient" size="xl" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl">
                Learn More
              </Button>
            </div>
          </motion.div>
          
          {/* Empty space for drone model<div className="drone-space hidden md:block"></div> */}
          
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        onClick={scrollToNextSection}
      >
        <ChevronDown className="h-10 w-10 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
}