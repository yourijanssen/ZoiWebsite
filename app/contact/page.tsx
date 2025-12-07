
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactContent from "@/components/ContactConent";

export const metadata: Metadata = {
  title: "About Zoi | Zoi Pantou",
  description:
    "Learn more about Zoi Pantou, a licensed Systemic Psychotherapist and Psychologist based in Greece.",
};

export default function ContactPage() {
  return (
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-[#f6f9fc]">
            <Navbar />
    
            <ContactContent />
            <Footer />
          </div>
  );
}