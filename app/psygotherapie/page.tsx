import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PsycholotherapyPageContent from "@/components/PsygotherapieContent";

export const metadata: Metadata = {
  title: "About Zoi | Zoi Pantou",
  description:
    "Learn more about Zoi Pantou, a licensed Systemic Psychotherapist and Psychologist based in Greece.",
};

export default function PsycholotherapyPage() {
  return (
       <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-[#f6f9fc]">
            <Navbar />
            <PsycholotherapyPageContent />
            <Footer />
          </div>
  );
}