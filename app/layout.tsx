import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chirpy Studio - AI-Powered Podcast Creation Platform",
  description: "Create entire podcast episodes with AI automation. From research to final mix, Chirpy Studio orchestrates the complete production pipeline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
