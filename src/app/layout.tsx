import type { Metadata } from "next";
import { Nunito, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-nunito",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "JobTrack | Digital Clay Edition",
  description: "Track your job applications in a tactile 3D world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-[#F4F1FA] text-[#332F3A] relative overflow-x-hidden">
        {/* Background Blobs */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
          <div className="absolute h-[60vh] w-[60vh] rounded-full blur-[120px] bg-[#7C3AED]/10 -top-[10%] -left-[10%] animate-clay-float" />
          <div className="absolute h-[50vh] w-[50vh] rounded-full blur-[100px] bg-[#DB2777]/10 bottom-[10%] -right-[5%] animate-clay-float-delayed" />
          <div className="absolute h-[40vh] w-[40vh] rounded-full blur-[80px] bg-[#0EA5E9]/10 top-[30%] left-[20%] animate-clay-breathe" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
        </div>

        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#FFFFFF",
              color: "#332F3A",
              borderRadius: "24px",
              padding: "16px 24px",
              boxShadow: "16px 16px 32px rgba(160, 150, 180, 0.2), inset -6px -6px 12px rgba(255, 255, 255, 1)",
              fontSize: "1rem",
              fontWeight: "600",
            },
          }}
        />
      </body>
    </html>
  );
}
