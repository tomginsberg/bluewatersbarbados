import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blue Waters Villa | Barbados",
  description: "Luxury vacation rental in Barbados. A stunning 3-bedroom villa with plunge pool just minutes from the beautiful beaches on the west coast.",
  openGraph: {
    type: "website",
    title: "Blue Waters Villa | Luxury Vacation Rental in Barbados",
    description: "A stunning 3-bedroom villa with plunge pool just minutes from the beautiful beaches on the west coast of Barbados.",
    url: "https://blue-waters-barbados.vercel.app/",
    siteName: "Blue Waters Villa",
    images: [
      {
        url: "https://blue-waters-barbados.vercel.app/villa/1.jpg",
        width: 1200,
        height: 630,
        alt: "Blue Waters Villa in Barbados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Waters Villa | Luxury Vacation Rental in Barbados",
    description: "A stunning 3-bedroom villa with plunge pool just minutes from the beautiful beaches on the west coast of Barbados.",
    images: ["https://blue-waters-barbados.vercel.app/villa/1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar 
          logo={null}
          name="Blue Waters Villa"
          homeUrl="/"
          showNavigation={false}
          mobileLinks={[
            { text: "The Villa", href: "/" },
            { text: "The Area", href: "/area" },
            { text: "Amenities", href: "/amenities" },
            { text: "Rates & Availability", href: "/rates-and-availability" },
            { text: "Book Now", href: "/book" },
            { text: "Reviews", href: "/reviews" },
            { text: "Getting Here", href: "/directions" },
          ]}
          actions={[
            { text: "The Villa", href: "/", isButton: false },
            { text: "The Area", href: "/area", isButton: false },
            { text: "Amenities", href: "/amenities", isButton: false },
            { text: "Rates & Availability", href: "/rates-and-availability", isButton: false },
            { text: "Reviews", href: "/reviews", isButton: false },
            { text: "Getting Here", href: "/directions", isButton: false },
            { text: "Book Now", href: "/book", isButton: true },
          ]}
        />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
