import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "🤓 Prepárate para las pruebas ICFES 2025 | freeICFES",
  description: "Usa nuestra aplicación completamente gratuita para prepararte haciendo un pre-ICFES con nuestros recursos, guías y simulacros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
