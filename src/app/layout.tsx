import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-alpha-khaki-hjn0sxpphd.vercel.app"),
  title: {
    default: "Josué García | Frontend Developer",
    template: "%s | Josué García",
  },
  description:
    "Frontend Developer especializado en React, Next.js y TypeScript. Creo experiencias web modernas, de alto rendimiento y con diseño cuidadoso.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "España",
  ],
  authors: [{ name: "Josué García", url: "https://github.com/JosueIsai15" }],
  openGraph: {
    title: "Josué García | Frontend Developer",
    description:
      "Frontend Developer especializado en React, Next.js y TypeScript. Disponible para proyectos y empleo.",
    type: "website",
    locale: "es_ES",
    url: "https://portfolio-alpha-khaki-hjn0sxpphd.vercel.app",
    siteName: "Josué García — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josué García | Frontend Developer",
    description:
      "Frontend Developer especializado en React, Next.js y TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="scan-overlay">{children}</body>
    </html>
  );
}
