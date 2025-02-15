import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConsoleFooter } from "@/components/footer/Footer";
import { Header } from "@/components/home/header/Header";
import StoreProvider from "./StoreProvider";
import { Toaster } from "react-hot-toast";
import "../i18n";

// Load the Poppins font with correct configuration
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Console Locker",
  description: "Console Locker",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.className}`}>
        <Toaster position="top-center" />
        <StoreProvider>
          <AntdRegistry>
            <Header />
            {children}
            <ConsoleFooter />
          </AntdRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
