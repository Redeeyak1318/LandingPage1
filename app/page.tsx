import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import CategoryGrid from "@/components/sections/CategoryGrid";
import FeaturedCollections from "@/components/sections/FeaturedCollections";
import CapturedCalmGallery from "@/components/sections/CapturedCalmGallery";
import PromoSection from "@/components/sections/PromoSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <CategoryGrid />
        <FeaturedCollections />
        <CapturedCalmGallery />
        <PromoSection />
      </main>
      <Footer />
    </>
  );
}
