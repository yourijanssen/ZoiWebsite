// components/ContactInfo.tsx

export default function ContactContent() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0D5EAF] mb-2">
          Get in Touch
        </h2>
        <p className="text-lg text-[#0D5EAF]/70 font-medium">
          Let&apos;s Start a Conversation
        </p>
        <div className="w-24 h-1 bg-[#0D5EAF] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white border border-[#0D5EAF]/20 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0D5EAF] mb-6">
            Send a Message
          </h3>
          <form className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-[#0D5EAF]/50 focus:border-[#0D5EAF]
                           transition-all duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-[#0D5EAF]/50 focus:border-[#0D5EAF]
                           transition-all duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can I help you?"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-[#0D5EAF]/50 focus:border-[#0D5EAF]
                           transition-all duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none
                           focus:outline-none focus:ring-2 focus:ring-[#0D5EAF]/50 focus:border-[#0D5EAF]
                           transition-all duration-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#0D5EAF] text-white font-semibold rounded-lg
                         hover:bg-[#0a4a8c] transition-colors duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          {/* Info Cards */}
          <div className="bg-white border border-[#0D5EAF]/20 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#0D5EAF]/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">📧</span>
              <h3 className="text-xl font-semibold text-[#0D5EAF]">Email</h3>
            </div>
            <p className="text-gray-600">
              <a
                href="mailto:zoi@example.com"
                className="hover:text-[#0D5EAF] transition-colors duration-300"
              >
                zoi@example.com
              </a>
            </p>
          </div>

          <div className="bg-white border border-[#0D5EAF]/20 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#0D5EAF]/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">📱</span>
              <h3 className="text-xl font-semibold text-[#0D5EAF]">Phone</h3>
            </div>
            <p className="text-gray-600">
              <a
                href="tel:+306900000000"
                className="hover:text-[#0D5EAF] transition-colors duration-300"
              >
                +30 690 000 0000
              </a>
            </p>
          </div>

          <div className="bg-white border border-[#0D5EAF]/20 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#0D5EAF]/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">📍</span>
              <h3 className="text-xl font-semibold text-[#0D5EAF]">Location</h3>
            </div>
            <p className="text-gray-600">Based in Greece</p>
            <p className="text-gray-500 text-sm mt-1">
              Available for online sessions worldwide
            </p>
          </div>

          <div className="bg-white border border-[#0D5EAF]/20 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#0D5EAF]/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🕐</span>
              <h3 className="text-xl font-semibold text-[#0D5EAF]">
                Availability
              </h3>
            </div>
            <ul className="text-gray-600 space-y-1">
              <li>Monday - Friday: 9:00 - 18:00</li>
              <li>Saturday: By appointment</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Note */}
      <div className="mt-12 text-center bg-[#0D5EAF]/5 border border-[#0D5EAF]/20 rounded-xl p-6">
        <p className="text-gray-700">
          <span className="font-semibold text-[#0D5EAF]">Note:</span> All
          inquiries are confidential. I typically respond within 24-48 hours.
        </p>
      </div>
    </section>
  );
}