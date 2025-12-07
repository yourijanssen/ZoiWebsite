import Image from "next/image";


export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-[#f6f9fc]">
      {/* Header */}
  <header className="w-full flex flex-col items-center text-center py-14 px-4 bg-gradient-to-r from-[#3469a7] to-[#2a95b7] text-white shadow-md">
        {/* Profile photo */}
        <div className="mb-5">
          <Image
            src="/images/zoi.jpg"
            alt="Zoi Pantou"
            width={126}
            height={126}
            className="rounded-full shadow-lg border-4 border-white object-cover"
            priority
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight font-[var(--font-geist-sans)]">
          Zoi Pantou
        </h1>
        <h2 className="mt-2 text-lg sm:text-2xl font-semibold tracking-wide opacity-95">
          Systemic Psychotherapist & Psychologist
        </h2>
        <h3 className="mt-1 text-base font-medium opacity-85">
          Based in Greece & Available for Online Sessions Worldwide
        </h3>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center py-12 px-6 gap-10">
        <section className="max-w-xl w-full rounded-2xl bg-white px-7 py-8 shadow-xl border border-[#dbeafe]">
          <h2 className="text-2xl font-bold mb-3 text-[#3870a4]">About Zoi</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Welcome! My name is <b>Zoi Pantou</b> and I am a licensed Systemic Psychotherapist and Psychologist with a passion for supporting individuals, couples, and families towards meaningful change and well-being. I offer both in-person and safe, confidential <b>online sessions</b> in English and Greek, with years of experience helping people from diverse backgrounds.
          </p>
        </section>

        <section className="max-w-xl w-full rounded-2xl bg-white px-7 py-8 shadow-xl border border-[#dbeafe]">
          <h2 className="text-2xl font-bold mb-3 text-[#3870a4]">How I Can Help</h2>
          <ul className="list-disc ml-6 text-gray-700 text-base leading-relaxed space-y-1">
            <li>Support for anxiety, depression, and life transitions</li>
            <li>Couples and family therapy (systemic approach)</li>
            <li>Personal growth and self-understanding</li>
            <li>Parenting & relationship issues</li>
            <li>Trauma-informed care</li>
            <li>Supervision for professionals (on request)</li>
          </ul>
        </section>

        <section className="max-w-xl w-full rounded-2xl bg-white px-7 py-8 shadow-xl border border-[#dbeafe]">
          <h2 className="text-2xl font-bold mb-3 text-[#3870a4]">Book a Session</h2>
          <p className="text-gray-700 pb-3">
            Start your journey today! Sessions are available in Greek and English.<br />
            <span className="block mt-2">
              <span className="font-medium">Online sessions</span> are held securely via Zoom or Google Meet.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-3">
            {/* Replace with actual links/emails later */}
            <a
              href="mailto:zoipantou@email.com"
              className="inline-block px-5 py-3 rounded-lg font-semibold bg-[#3870a4] text-white hover:bg-[#23528a] transition"
            >
              Email Zoi
            </a>
            <a
              href="tel:+302112223333"
              className="inline-block px-5 py-3 rounded-lg font-semibold bg-[#f6e58d] text-[#3469a7] hover:bg-[#ffe066] transition"
            >
              Call: +30 211 222 3333
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-7 px-4 text-center text-sm text-gray-500 bg-white border-t">
        © {new Date().getFullYear()} Zoi Pantou &middot; All rights reserved
      </footer>
    </div>
  );
}