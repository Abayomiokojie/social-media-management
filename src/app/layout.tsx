import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { ModalProvider } from "@/context/ModalContext";
import { Poppins } from "next/font/google";
import ThemeContextProvider from "@/context/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SocialPro Management",
  description: "Professional Social Media Suite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${poppins.className} `}>
        <ThemeContextProvider>
          <ModalProvider>
            {/* bg-[#F1F5F9] */}
            <div className=" min-h-screen bg-white dark:bg-black ">
              <Header />
              <div className="w-full max-w-7xl mx-auto flex-1 p-4 grid lg:flex gap-6 ">
                <LeftSidebar />
                <main className="flex-1">{children}</main>
                <RightSidebar />
              </div>
            </div>
          </ModalProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
