// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import { ModalProvider } from '@/context/ModalContext'; // ADDED

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SocialPro Management',
  description: 'Professional Social Media Suite',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F1F5F9]`}>
        {/* ADDED: ModalProvider now wraps the entire app */}
        <ModalProvider>
          <div className="flex flex-col h-screen">
            <Header />
            <div className="w-full max-w-7xl mx-auto flex-1 p-4">
              <div className="flex gap-6">
                <LeftSidebar />
                <main className="flex-1">
                  {children}
                </main>
                <RightSidebar />
              </div>
            </div>
          </div>
        </ModalProvider>
      </body>
    </html>
  );
}