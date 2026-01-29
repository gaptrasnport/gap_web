import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const holidayFree = localFont({
  src: "./fonts/HolidayFree.otf",
  variable: "--font-holiday",
  display: "swap",
});

const myriadPro = localFont({
  src: "./fonts/Myriad Pro Regular.ttf",
  variable: "--font-myriad",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GAP Transportation Services Inc.",
  description: "Last-Mile Pickup & Delivery Services Built on Safety, Compliance & Reliability",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${holidayFree.variable} ${myriadPro.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
