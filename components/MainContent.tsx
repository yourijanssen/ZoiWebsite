// components/MainContent.tsx

import Image from "next/image";
import Link from "next/link";

export default function MainContent() {
  return (
    <main className="w-full max-w-5xl mx-auto py-12 px-6">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 mb-12">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/zoi.jpg"
            alt="Zoi Pantou"
            width={180}
            height={180}
            className="rounded-full shadow-lg border-4 border-[#0D5EAF] object-cover"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0D5EAF]">
            Zoi Pantou
          </h1>
          <p className="text-lg text-[#0D5EAF]/70 font-medium">Ζωή Πάντου</p>
          <div className="w-16 h-1 bg-[#0D5EAF] mx-auto md:mx-0 mt-3 mb-4 rounded-full"></div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            Systemic Psychotherapist & Psychologist
          </h2>
          <p className="text-base text-gray-500">
            Συστημική Ψυχοθεραπεύτρια & Ψυχολόγος
          </p>
          <p className="mt-3 text-sm text-gray-600">
            Based in Greece & Available for Online Sessions Worldwide
          </p>
          <p className="text-sm text-gray-500">
            Με έδρα την Ελλάδα & Διαθέσιμη για Διαδικτυακές Συνεδρίες Παγκοσμίως
          </p>
        </div>
      </div>

      {/* Welcome Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0D5EAF] mb-2">
          Welcome
        </h2>
        <p className="text-lg text-[#0D5EAF]/70 font-medium">Καλώς Ήρθατε</p>
        <div className="w-24 h-1 bg-[#0D5EAF] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Welcome Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* English */}
        <div className="bg-white border border-[#0D5EAF]/20 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#0D5EAF]/40 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🇬🇧</span>
            <h3 className="text-xl font-semibold text-[#0D5EAF]">English</h3>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Thank you for visiting. I am <b>Zoi Pantou</b>, a licensed Systemic
            Psychotherapist and Psychologist dedicated to helping individuals,
            couples, and families find balance and well-being.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you&apos;re seeking support for personal challenges or
            looking to strengthen your relationships, I&apos;m here to help you
            on your journey.
          </p>
        </div>

        {/* Greek */}
        <div className="bg-white border border-[#0D5EAF]/20 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#0D5EAF]/40 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🇬🇷</span>
            <h3 className="text-xl font-semibold text-[#0D5EAF]">Ελληνικά</h3>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Σας ευχαριστώ για την επίσκεψή σας. Είμαι η <b>Ζωή Πάντου</b>,
            αδειοδοτημένη Συστημική Ψυχοθεραπεύτρια και Ψυχολόγος, αφοσιωμένη
            στο να βοηθώ άτομα, ζευγάρια και οικογένειες να βρουν ισορροπία και
            ευημερία.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Είτε αναζητάτε υποστήριξη για προσωπικές προκλήσεις είτε θέλετε να
            ενδυναμώσετε τις σχέσεις σας, είμαι εδώ για να σας βοηθήσω στο
            ταξίδι σας.
          </p>
        </div>
      </div>

      {/* Quick Links Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0D5EAF] mb-2">
          Explore
        </h2>
        <p className="text-lg text-[#0D5EAF]/70 font-medium">Εξερευνήστε</p>
        <div className="w-24 h-1 bg-[#0D5EAF] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Quick Links Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Card */}
        <Link
          href="/generalInfo"
          className="bg-white border border-[#0D5EAF]/20 rounded-xl p-6 shadow-sm 
                     hover:shadow-md hover:border-[#0D5EAF]/40 
                     transition-all duration-300 text-center group"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-3xl">👩‍⚕️</span>
          </div>
          <h3 className="text-xl font-semibold text-[#0D5EAF] group-hover:text-[#0a4a8c] transition-colors duration-300">
            Who is Zoi?
          </h3>
          <p className="text-sm text-[#0D5EAF]/70 mt-1">Ποια είναι η Ζωή;</p>
          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            Learn more about my background, training, and approach to therapy.
          </p>
        </Link>

        {/* Psychotherapy Card */}
        <Link
          href="/psygotherapie"
          className="bg-white border border-[#0D5EAF]/20 rounded-xl p-6 shadow-sm 
                     hover:shadow-md hover:border-[#0D5EAF]/40 
                     transition-all duration-300 text-center group"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-3xl">🧠</span>
          </div>
          <h3 className="text-xl font-semibold text-[#0D5EAF] group-hover:text-[#0a4a8c] transition-colors duration-300">
            Psychotherapy
          </h3>
          <p className="text-sm text-[#0D5EAF]/70 mt-1">Ψυχοθεραπεία</p>
          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            Discover what psychotherapy is and how it can help you.
          </p>
        </Link>

        {/* Contact Card */}
        <Link
          href="/contact"
          className="bg-white border border-[#0D5EAF]/20 rounded-xl p-6 shadow-sm 
                     hover:shadow-md hover:border-[#0D5EAF]/40 
                     transition-all duration-300 text-center group"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-3xl">📬</span>
          </div>
          <h3 className="text-xl font-semibold text-[#0D5EAF] group-hover:text-[#0a4a8c] transition-colors duration-300">
            Contact
          </h3>
          <p className="text-sm text-[#0D5EAF]/70 mt-1">Επικοινωνία</p>
          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            Book a session or get in touch with me.
          </p>
        </Link>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-xl font-semibold text-[#0D5EAF] mb-4">
          Ready to Take the First Step?
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-[#0D5EAF] text-white font-semibold rounded-lg
                     hover:bg-[#0a4a8c] transition-colors duration-300 shadow-md"
        >
          Get in Touch
        </Link>
      </div>
    </main>
  );
}