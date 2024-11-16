import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  weight: "400 500 600 700 800 900",
});
const montserratItalic = localFont({
  src: "./fonts/Montserrat-Italic-VariableFont_wght.ttf",
  variable: "--font-montserrat-italic",
  weight: "400 500 600 700 800 900",
});
const notoSansJP = localFont({
  src: "./fonts/NotoSansJP-VariableFont_wght.ttf",
  variable: "--font-noto-sans",
  weight: "800 900",
});

export const metadata: Metadata = {
  title: "Portfolio - Raendy Andhika El Vicar",
  description: "Portfolio website developed by Raendy. Let's Connect!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserratItalic.variable} ${notoSansJP.variable} antialiased`}
      >
            <main>
              {children}
            </main>
      </body>
    </html>   
  );
}
