"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plane as Drone, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const hideTimeout = useCallback((callback: () => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(callback, delay);
    };
  }, []);

  const delayedHide = hideTimeout(() => {
    setVisible(false);
  }, 8000);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setVisible(true);
        delayedHide();
      } else {
        // Hide navbar when scrolling down
        setVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", () => {
      setVisible(true);
      delayedHide();
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", delayedHide);
    };
  }, [lastScrollY, delayedHide]);

  return (
    <nav className={`fixed top-4 left-4 right-4 z-50 mx-auto flex max-w-[1440px] items-center justify-between rounded-full border bg-white/50 px-6 py-3 backdrop-blur-sm dark:bg-card/50 transition-all duration-300 ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
    }`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Drone className="h-6 w-6 text-blue-500 lg:h-8 lg:w-8" />
          <span className="text-xl font-bold lg:text-2xl">AeroVantage</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium hover:text-blue-500 transition-colors">
            Features
          </Link>
          <Link href="#capabilities" className="text-sm font-medium hover:text-blue-500 transition-colors">
            Capabilities
          </Link>
          <Link href="#solutions" className="text-sm font-medium hover:text-blue-500 transition-colors">
            Solutions
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-blue-500 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="hidden lg:flex lg:gap-x-6">
          <ModeToggle />
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button variant="gradient" size="sm">
            Get Started
          </Button>
        </div>
        <div className="flex items-center lg:hidden">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="relative">
                <Menu className={cn("h-6 w-6 transform transition-all duration-200 ease-in-out", isOpen && "rotate-90")} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="mt-16 w-[300px] sm:w-[400px] p-6 border-none bg-white/30 backdrop-blur-sm dark:bg-slate-950/30">
              <nav className="flex flex-col gap-6 mt-4">
                <Link href="#features" className="text-sm font-medium hover:text-blue-500 transition-colors">
                  Features
                </Link>
                <Link href="#capabilities" className="text-sm font-medium hover:text-blue-500 transition-colors">
                  Capabilities
                </Link>
                <Link href="#solutions" className="text-sm font-medium hover:text-blue-500 transition-colors">
                  Solutions
                </Link>
                <Link href="#contact" className="text-sm font-medium hover:text-blue-500 transition-colors">
                  Contact
                </Link>
                <div className="flex flex-col items-center gap-4 mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    Login
                  </Button>
                  <Button variant="gradient" size="sm" className="w-full">
                    Get Started
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}