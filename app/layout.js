import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Serkan Safran Portfolio",
  description: "Serkan Safran Portfolio",
  icons: {
    icon: "/images/profile.jpg",
    appleIcon: "/images/profile.jpg",
    msIcon: "/images/profile.jpg",
  },
  keywords: ["Serkan Safran", "Serkan", "Safran", "Portfolio"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
