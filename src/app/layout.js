import "./globals.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export const metadata = {
  title: "Eastern Scientific",
  description: "By Eastern Group of Companies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
