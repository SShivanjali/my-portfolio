import { Geist, Geist_Mono, Miss_Fajardose, Homemade_Apple } from "next/font/google";
import "./globals.css";
import "./fonts.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const missFajardose = Miss_Fajardose({ variable: "--font-miss-fajardose", weight: "400", subsets: ["latin"] });
const homemadeApple = Homemade_Apple({
  variable: "--font-homemade-apple",
  weight: "400",
  subsets: ["latin"]
});
export const metadata = {
  title: "Webspace 511",
  description: "my little corner of the internet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${missFajardose.variable} ${homemadeApple.variable} h-full antialiased`}>
      <body className="m-0 p-0 h-full">{children}</body>
    </html>
  );
}