import { Navbar } from "@/components/ui/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Landing Page Clone",
  description: "Made with Next.js, TypeScript & Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <div className="mt-[65px] lg:mt-[90px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
