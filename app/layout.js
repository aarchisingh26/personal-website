import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aarchi Singh",
  description: "Aarchi Singh's developer portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="selection:bg-black selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
