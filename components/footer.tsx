import Link from "next/link";
import { Plane as Drone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card/30 border-t border-border/50 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Drone className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-bold">AeroVantage</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Enterprise-grade drone delivery solutions with unmatched performance and security.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Specifications
                </Link>
              </li>
              <li>
                <Link href="#capabilities" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Logistics & Warehousing
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Agriculture & Farming
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Construction
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 AeroVantage. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}