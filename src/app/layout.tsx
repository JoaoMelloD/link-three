import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mello Links",
  description:
    "Link tree to contact João Mello, here are the main links to see my work and contact me",
  icons: {
    icon: "/icon2.svg",  
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
