import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClickSpark from "./Animated/ClickSpark";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mother Meals - Fresh Homemade Food Delivery",
  description:
    "Order fresh, homemade meals delivered to your doorstep in Hyderabad.",
  keywords:
    "homemade food, food delivery, Hyderabad, fresh meals, Mother Meals",
  author: "Mother Meals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta Tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mothermeals.in" />
        <meta property="og:image" content="/Logo.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/Logo.png" />
        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mother Meals",
              "url": "https://www.mothermeals.in",
              "logo": "https://www.mothermeals.in/logo.png",
              "description": "Order fresh, homemade meals delivered to your doorstep in Hyderabad.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Mother Meals Street",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500001",
                "addressCountry": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 90304 99393",
                "contactType": "Customer Service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.facebook.com/mothermeals",
                "https://www.instagram.com/mothermeals",
                "https://www.twitter.com/mothermeals"
              ]
            }),
          }}
        />
      </head>
      <ClickSpark
        sparkColor="#d2b161"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <body
          className={`bg-[#F4F7FF] overflow-x-hidden ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <main className="max-w-6xl mx-auto px-4">{children}</main>
          <Footer />
        </body>
      </ClickSpark>
    </html>
  );
}
