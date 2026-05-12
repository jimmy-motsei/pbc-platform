import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PBC Platform — A Proposal for Proud Beginners Cycling Club",
  description: "A purpose-built digital platform for PBC — ride management, member community, and business networking in one place.",
  openGraph: {
    title: "PBC Platform Proposal",
    description: "Built for Proud Beginners. Designed for what's next.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
