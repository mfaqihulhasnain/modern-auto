import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Modern Auto - Premium Car Dealership",
  description: "Find your perfect vehicle at Modern Auto. Browse our extensive inventory of premium cars with financing, maintenance, and trade-in services.",
  keywords: "cars, car dealership, buy cars, sell cars, modern auto, premium vehicles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
