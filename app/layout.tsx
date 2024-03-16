import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import BottomNavMobile from "./components/BottomNavMobile";

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Airbnb website clone for personal project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="fixed top-0 z-10 w-[100vw]">
            <Navbar />
          </div>
        </header>
        <div className="mt-[180px] relative">
          {children}
          <div className="block md:hidden">
            <BottomNavMobile />
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
