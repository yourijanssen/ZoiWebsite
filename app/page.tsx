import Navbar from "@/components/Navbar";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-[#f6f9fc]">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}