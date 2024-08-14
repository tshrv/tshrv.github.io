import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dm_sans = DM_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Tushar Srivastava",
  description:
    "Professional Website of Tushar Srivastava, Lead Software Engineer at Neuralix AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  );
}
