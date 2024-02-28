import Cards from "@/components/Cards";
import FeaturedSection from "@/components/FeaturedSection";
import Instructors from "@/components/Instructors";
import Testimonial from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.5]">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <Testimonial />
      <Cards />
      <Instructors />
    </main>
    </>
  );
}
