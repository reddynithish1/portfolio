import { useState } from "react";
import { contact } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import PageTransition from "../components/PageTransition";
import { Mail, Send, Check, ExternalLink, Loader2, AlertCircle } from "lucide-react";

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
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) {
      errs.name = "Name is required.";
    }
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) {
      errs.message = "Message is required.";
    } else if (form.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          "bot-field": "",
        }).toString(),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.warn("Netlify Forms submission:", err);
      setStatus("error");
    }
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

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col"
              >
                {/* Netlify hidden inputs */}
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="text"
                  name="bot-field"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden opacity-0 absolute -z-10 h-0 w-0 pointer-events-none"
                  style={{ display: "none" }}
                  aria-hidden="true"
                />

                <div className="mb-5">
                  <label className="block font-mono text-xs text-[#8B8B9E] uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Alex"
                    className={`form-input ${errors.name ? "!border-amber/80" : ""}`}
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-amber font-mono">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="mb-5">
                  <label className="block font-mono text-xs text-[#8B8B9E] uppercase mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. alex@company.com"
                    className={`form-input ${errors.email ? "!border-amber/80" : ""}`}
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-amber font-mono">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="mb-5">
                  <label className="block font-mono text-xs text-[#8B8B9E] uppercase mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Tell me about your product, role, or timeline..."
                    className={`form-input resize-none ${errors.message ? "!border-amber/80" : ""}`}
                    value={form.message}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-amber font-mono">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary h-12 px-6 rounded-xl justify-center w-full text-sm mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-current" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Inline Accessible Status Messages */}
                {status === "success" && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="p-4 rounded-xl bg-amber/10 border border-amber/35 text-amber text-sm font-medium flex items-center gap-3 mt-4"
                  >
                    <Check className="w-5 h-5 flex-shrink-0 text-amber" />
                    <span>
                      Thanks! Your message has been sent. I'll get back to you soon.
                    </span>
                  </div>
                )}

                {status === "error" && (
                  <div
                    role="alert"
                    aria-live="polite"
                    className="p-4 rounded-xl bg-amber/10 border border-amber/35 text-amber-light text-sm font-medium flex items-center gap-3 mt-4"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0 text-amber" />
                    <span>
                      Couldn't send your message. Please email me directly at{" "}
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-amber underline hover:opacity-90 font-semibold"
                      >
                        {contact.email}
                      </a>
                      .
                    </span>
                  </div>
                )}
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
