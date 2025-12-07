// components/PsychotherapyInfo.tsx

export default function PsycholotherapyPageContent() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0D5EAF] mb-2">
          What is Psychotherapy?
        </h2>
        <p className="text-lg text-[#0D5EAF]/70 font-medium">
          Understanding the Journey of Healing
        </p>
        <div className="w-24 h-1 bg-[#0D5EAF] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Introduction */}
      <p className="text-center text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
        Psychotherapy is a collaborative treatment based on the relationship
        between an individual and a psychologist. It provides a supportive
        environment that allows you to talk openly with someone who is
        objective, neutral, and nonjudgmental.
      </p>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-[#0D5EAF]/20 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#0D5EAF]/40 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🌱</span>
            <h3 className="text-xl font-semibold text-[#0D5EAF]">
              What to Expect
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Through dialogue and various therapeutic techniques, psychotherapy
            helps you identify and change troubling emotions, thoughts, and
            behaviors. It&apos;s a process of self-discovery and growth.
          </p>
        </div>

        <div className="bg-white border border-[#0D5EAF]/20 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#0D5EAF]/40 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🔗</span>
            <h3 className="text-xl font-semibold text-[#0D5EAF]">
              Systemic Approach
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Systemic psychotherapy views individuals within the context of their
            relationships and social systems. It recognizes that our connections
            with family, partners, and community shape who we are.
          </p>
        </div>

        <div className="bg-white border border-[#0D5EAF]/20 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#0D5EAF]/40 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">💙</span>
            <h3 className="text-xl font-semibold text-[#0D5EAF]">
              Who Can Benefit
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Anyone facing life challenges, relationship difficulties, anxiety,
            depression, grief, or simply seeking personal growth can benefit
            from psychotherapy.
          </p>
        </div>

        <div className="bg-white border border-[#0D5EAF]/20 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#0D5EAF]/40 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">💻</span>
            <h3 className="text-xl font-semibold text-[#0D5EAF]">
              Online Sessions
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Online therapy offers the same quality of care as in-person
            sessions, with added flexibility and accessibility. Connect from
            anywhere in the world.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-xl font-semibold text-[#0D5EAF] mb-4">
          Ready to Start Your Journey?
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-[#0D5EAF] text-white font-semibold rounded-lg
                     hover:bg-[#0a4a8c] transition-colors duration-300 shadow-md"
        >
          Book a Session
        </a>
      </div>
    </section>
  );
}