import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ImageSlider />
        <About />
        <Services />
        <Gallery />
        <WhyChooseUs />
      </main>
    </>
  );
}