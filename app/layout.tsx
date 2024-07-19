import type { Metadata } from "next";
import "./globals.css";
import { grotesk, groteskWide } from "@/lib/fonts";
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${grotesk.variable} w-dvw ${groteskWide.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
