import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Colliuax | Collaborative Planning",
  description: "Management, Plan, collaborate, together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
