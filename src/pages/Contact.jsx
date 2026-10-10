import { useState } from "react";
import { contact } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import PageTransition from "../components/PageTransition";
import { Mail, Send, Check, ExternalLink } from "lucide-react";

const socialIcons = {
  linkedin: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  github: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setSubmitted(true);

    const subject = encodeURIComponent(`Portfolio message from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\nMessage:\n${form.message.trim()}`
    );
    const mailtoUrl = `mailto:${contact.email}?subject=${subject}&body=${body}`;

    // Open mail client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <PageTransition>
      <div className="site-container pt-16 md:pt-24 pb-20 md:pb-28 flex flex-col items-center">
        {/* Section Heading Centered with Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow mb-3">{contact.eyebrow}</p>
          <h1 className="glow-heading text-4xl sm:text-6xl md:text-7xl mb-4 text-amber">
            {contact.heading}
          </h1>
          <p className="text-[#B8B8C0] text-base sm:text-lg leading-relaxed">
            {contact.subtitle}
          </p>
        </div>

        {/* Centered Grid with gap-6 md:gap-8 (5/12 and 7/12 split) */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Left Info Column (5 cols, min-w-0 for truncate safety) */}
          <div className="md:col-span-5 space-y-6 min-w-0">
            <GlassCard className="p-6 md:p-8 min-w-0">
              <p className="font-mono text-xs uppercase text-[#8B8B9E] tracking-normal mb-3 whitespace-nowrap">
                DIRECT INBOX
              </p>
              <div className="min-w-0 overflow-hidden">
                <a
                  href={`mailto:${contact.email}`}
                  title={contact.email}
                  className="text-base md:text-lg font-medium text-amber hover:underline whitespace-nowrap truncate block items-center gap-2 outline-none rounded-md"
                >
                  <Mail className="w-4 h-4 text-amber inline-block mr-2 flex-shrink-0" />
                  <span>{contact.email}</span>
                </a>
              </div>
            </GlassCard>

            <GlassCard className="p-6 md:p-8">
              <p className="font-mono text-xs uppercase text-[#8B8B9E] tracking-normal mb-4 whitespace-nowrap">
                SOCIAL PROFILES
              </p>
              <div className="flex flex-col gap-3">
                {contact.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[#B8B8C0] hover:text-amber hover:border-amber/35 transition-all duration-200 outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-amber">
                        {socialIcons[link.icon]}
                      </span>
                      <span className="text-sm font-medium">{link.label}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#8B8B9E]" />
                  </a>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Right Form Column (7 cols) */}
          <div className="md:col-span-7">
            <GlassCard className="p-6 md:p-8">
              <h2 className="text-white text-xl font-semibold mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="mb-5">
                  <label className="block font-mono text-xs text-[#8B8B9E] uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex"
                    className="form-input"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="mb-5">
                  <label className="block font-mono text-xs text-[#8B8B9E] uppercase mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    className="form-input"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="mb-5">
                  <label className="block font-mono text-xs text-[#8B8B9E] uppercase mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your product, role, or timeline..."
                    className="form-input resize-none"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="btn-primary h-12 px-6 rounded-xl justify-center w-full text-sm mt-2"
                >
                  {submitted ? (
                    <>
                      <span>Opening your email app...</span>
                      <Check className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
