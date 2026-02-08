import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora, STIX_Two_Text } from "next/font/google";
import "./globals.css";

const stix = STIX_Two_Text({
  variable: "--font-stix",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael Genesini | Engineering Manager & Tinkerer",
  description:
    "Personal writing for clear thinking—mostly reflections and ideas, with occasional notes on engineering management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="28a4b9c9-a6a6-4315-ae9c-c495a884d91c"
        />
      </head>
      <body
        className={`${lora.variable} ${geistSans.variable} ${geistMono.variable} ${stix.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
