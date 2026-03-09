import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Tohar Hermon | Computer Engineer",
  description:
    "Portfolio of Tohar Hermon, a Computer Engineer specializing in software development, security and cloud-native systems."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-bg-base text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}

