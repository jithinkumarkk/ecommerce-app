import type { Metadata } from "next"; 
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { MenuProvider } from "@/context/MenuContext";
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Male Fashion",
  description: "Male-Fashion | Template",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={nunitoSans.className}>
      <body><MenuProvider>{children}</MenuProvider></body>
    </html>
  );
}
