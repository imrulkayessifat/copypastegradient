
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Gradient from "@/components/gradient";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Gradient />
      <Footer />
    </div>
  );
}