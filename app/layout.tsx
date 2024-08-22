import type { Metadata } from "next";
import "./globals.css";
import { grotesk, groteskWide } from "@/lib/fonts";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Adyugo",
  description: "Transform your digital inventory into profitable business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta charSet="UTF-8"></meta>
      <GoogleTagManager gtmId="G-CH7FRP4RVW" />
      <body className={`${grotesk.variable} w-dvw ${groteskWide.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
