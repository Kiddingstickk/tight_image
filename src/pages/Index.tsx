import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BarbersSection from "@/components/BarbersSection";
import GallerySection from "@/components/GallerySection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import StickyBookButton from "@/components/StickyBookButton";

const Index = () => {
  return (
    <>
      <Helmet>
        {/* ✅ Title */}
        <title>Tight Image | Premium Men's Barbershop in New York</title>

        {/* ✅ Meta Description */}
        <meta
          name="description"
          content="Experience precision cuts, modern styling, and classic grooming at Tight Image Barber. Premium barbershop in New York City. Book your appointment today."
        />

        {/* ✅ Keywords */}
        <meta
          name="keywords"
          content="Tight Image Barber, barbershop, men's grooming, haircuts, beard trim, hot towel shave, New York barber"
        />

        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://TightImage.com" />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Tight Image Barber | Premium Men's Barbershop" />
        <meta
          property="og:description"
          content="Precision cuts, modern style, classic grooming. A premium experience for the modern man."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://handtalkbarber.com" />
        <meta property="og:image" content="https://ik.imagekit.io/kiddingstick/circle_logo.png" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Handtalk Barber | Premium Men's Barbershop" />
        <meta
          name="twitter:description"
          content="Precision cuts, modern style, classic grooming. A premium barbershop experience for the modern man."
        />
        <meta name="twitter:site" content="@handtalkbarber" />
        <meta name="twitter:image" content="https://yourdomain.com/handtalk-og-image.png" />

        {/* ✅ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BarberShop",
            "name": "Handtalk Barber",
            "description":
              "Premium men's barbershop offering precision cuts, beard services, and classic grooming.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main Street, Suite 100",
              "addressLocality": "New York",
              "addressRegion": "NY",
              "postalCode": "10001",
              "addressCountry": "US",
            },
            "telephone": "+1-555-123-4567",
            "openingHours": ["Mo-Fr 09:00-20:00", "Sa 09:00-18:00", "Su 10:00-16:00"],
            "priceRange": "$$",
          })}
        </script>
      </Helmet>

      <main>
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <BarbersSection />
        <GallerySection />
        <PricingSection />
        <TestimonialsSection />
        <Footer />
        <StickyBookButton />
      </main>
    </>
  );
};

export default Index;