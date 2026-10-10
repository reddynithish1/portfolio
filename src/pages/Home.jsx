import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { hero, numbers, projects } from "../data/content";
import Counter from "../components/Counter";
import ProjectCard from "../components/ProjectCard";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";

export default function Home() {
  const photoRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleMouse = (e) => {
      // subtle mouse parallax (max 8px)
      const x = ((e.clientX / window.innerWidth) - 0.5) * 8;
      const y = ((e.clientY / window.innerHeight) - 0.5) * 8;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [prefersReducedMotion]);

  const worrkfreeProject = projects.find((p) => p.slug === "worrkfree") || projects[0];

  return (
    <PageTransition>
      <div className="site-container">
        {/* ─── 1. HERO SECTION ─── */}
        <section className="pt-8 md:pt-14 pb-8 md:pb-12">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left: Text (7 cols) - on mobile: order-1 */}
            <div className="order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Badge: mb-5 */}
              <div className="inline-flex items-center gap-2.5 pulse-badge rounded-full px-4 py-2 border border-amber/20 bg-amber-dim/20 mb-5">
                <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
                <span className="font-mono text-xs text-amber-light uppercase tracking-normal">
                  {hero.badge}
                </span>
              </div>

              {/* Name: clamp(3rem, 7vw, 6.5rem), line-height 0.95, mb-4 */}
              <h1
                className="glow-heading-lg tracking-wide mb-4"
                style={{
                  fontSize: "clamp(3rem, 7vw, 6.5rem)",
                  lineHeight: "0.95",
                }}
              >
                {hero.name}
              </h1>

              {/* Subtitle in DM Sans Medium: mb-6 */}
              <p className="font-body font-medium text-lg sm:text-xl md:text-2xl text-text-muted mb-6 tracking-normal">
                {hero.subtitle}
              </p>

              {/* Chips: mb-8, px-4 py-2 */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-8">
                {hero.chips.map((chip) => (
                  <span key={chip} className="skill-chip">
                    {chip}
                  </span>
                ))}
              </div>

              {/* Buttons: same height h-12, px-6, rounded-xl, gap-2 */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <Link to="/projects" className="btn-primary h-12 px-6 rounded-xl">
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="/resume.pdf"
                  download="K_Nithish_Reddy_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary h-12 px-6 rounded-xl"
                >
                  <span>Download Resume</span>
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Portrait ONLY /me.png (5 cols) - stacked on mobile below text: order-2 */}
            <div className="order-2 lg:col-span-5 flex justify-center lg:justify-end">
              <div
                ref={photoRef}
                className="hero-photo-wrapper w-[260px] sm:w-[320px] md:w-[360px] lg:w-[400px]"
              >
                <motion.img
                  src="/me.png"
                  alt="Nithish Reddy"
                  className="hero-photo w-full h-auto block select-none pointer-events-none"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse 65% 70% at 50% 42%, #000 50%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 65% 70% at 50% 42%, #000 50%, transparent 100%)",
                    ...(prefersReducedMotion
                      ? {}
                      : {
                          x: mousePos.x,
                          y: mousePos.y,
                        }),
                  }}
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          x: mousePos.x,
                          y: mousePos.y,
                        }
                  }
                  transition={{ type: "spring", stiffness: 100, damping: 25 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. BY THE NUMBERS STRIP (gap ~96px desktop / ~64px mobile, no border) ─── */}
        <section className="py-8 md:py-12">
          <SectionHeading
            eyebrow={numbers.eyebrow}
            heading={numbers.heading}
          />

          <div className="glass-card p-6 md:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/[0.06]">
              {numbers.stats.map((stat, idx) => (
                <div key={stat.label} className={idx > 1 ? "pt-6 lg:pt-0" : ""}>
                  <div className="glow-heading text-4xl sm:text-5xl md:text-6xl mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="font-mono text-xs sm:text-sm text-[#8B8B9E] uppercase tracking-normal">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 3. FEATURED WORRKFREE TEASER (gap ~96px desktop / ~64px mobile, no border) ─── */}
        <section className="py-8 md:py-12">
          <SectionHeading
            eyebrow="PROJECTS / FEATURED"
            heading="FEATURED PROJECT"
          />

          <div className="w-full">
            <ProjectCard project={worrkfreeProject} featured={true} />
          </div>
        </section>

        {/* ─── 4. CONTACT CTA STRIP (gap ~96px desktop / ~64px mobile, no border) ─── */}
        <section className="py-8 md:py-12 pb-16 md:pb-24">
          <div className="glass-card p-6 md:p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-amber/[0.08] blur-[70px] rounded-full pointer-events-none" />

            <h2 className="glow-heading text-3xl sm:text-5xl md:text-6xl mb-4">
              LET'S BUILD SOMETHING
            </h2>
            <p className="text-[#B8B8C0] text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Open to full-time roles and internships. Let's talk.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-primary h-12 px-6 rounded-xl">
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/about" className="btn-secondary h-12 px-6 rounded-xl">
                <span>Read Full Story</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
