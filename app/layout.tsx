import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Outfit } from 'next/font/google';
import { ToastProvider } from "@/providers/toast-provider"

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'AeroVantage - Enterprise Drone Delivery Solutions',
  description: 'Enterprise-grade drone delivery solutions with unmatched performance and security.',
};

export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode;
}) {
  return ( 
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className + " antialiased"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
