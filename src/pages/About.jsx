import { about, journey } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import PageTransition from "../components/PageTransition";
import { Briefcase, GraduationCap, Award, Trophy } from "lucide-react";

function highlightText(text, highlights) {
  let result = text;
  const positions = [];

  for (const h of highlights) {
    const idx = result.indexOf(h);
    if (idx !== -1) {
      positions.push({ start: idx, end: idx + h.length, text: h });
    }
  }
  positions.sort((a, b) => a.start - b.start);

  const parts = [];
  let lastIndex = 0;
  for (const pos of positions) {
    if (pos.start > lastIndex) {
      parts.push(
        <span key={`t-${lastIndex}`}>{result.slice(lastIndex, pos.start)}</span>
      );
    }
    parts.push(
      <span key={`h-${pos.start}`} className="amber-highlight">
        {pos.text}
      </span>
    );
    lastIndex = pos.end;
  }
  if (lastIndex < result.length) {
    parts.push(<span key="end">{result.slice(lastIndex)}</span>);
  }
  return parts;
}

const typeIcons = {
  work: Briefcase,
  education: GraduationCap,
  cert: Award,
  activity: Trophy,
};

export default function About() {
  return (
    <PageTransition>
      <div className="site-container pt-16 md:pt-24 pb-20 md:pb-28">
        {/* ─── SECTION 1: WHO I AM (01) ─── */}
        <section className="mb-20 md:mb-28">
          <SectionHeading
            eyebrow={about.eyebrow}
            heading={about.heading}
          />

          {/* items-start: align text card and portrait to top */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
            {/* Left: Text card and tags inside ONE card (8 cols) */}
            <div className="lg:col-span-8">
              <GlassCard cornerNum={about.sectionNum} className="relative p-6 md:p-8">
                <p className="text-base sm:text-lg text-[#B8B8C0] leading-relaxed mb-6 font-normal">
                  {highlightText(about.text, about.highlights)}
                </p>

                {/* Pill Tags inside the card padding */}
                <div className="flex flex-wrap gap-2.5 pt-6 border-t border-white/[0.04]">
                  {about.tags.map((tag) => (
                    <span key={tag} className="skill-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Right: Portrait ONLY /me.png sticky at top-28 (4 cols) */}
            <div className="lg:col-span-4 flex justify-center lg:sticky lg:top-28">
              <div className="hero-photo-wrapper w-[240px] sm:w-[280px]">
                <img
                  src="/me.png"
                  alt="Nithish Reddy"
                  className="hero-photo w-full h-auto select-none block"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse 65% 70% at 50% 42%, #000 50%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 65% 70% at 50% 42%, #000 50%, transparent 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 2: EXPERIENCE & EDUCATION (py-20 md:py-28 spacing) ─── */}
        <section className="pt-20 md:pt-28 border-t border-white/[0.04]">
          <SectionHeading
            eyebrow={journey.eyebrow}
            heading={journey.heading}
          />

          <div className="relative pl-2 sm:pl-4 max-w-3xl">
            {/* Vertical timeline line */}
            <div className="timeline-line" />

            <div className="space-y-8 md:space-y-10">
              {journey.timeline.map((item, idx) => {
                const IconComponent = typeIcons[item.type] || Briefcase;
                return (
                  <div key={idx} className="flex gap-4 sm:gap-6 relative">
                    {/* Glowing Dot */}
                    <div className="timeline-dot flex items-center justify-center text-amber mt-1" />

                    {/* Timeline Item Card: p-6 md:p-8 inner padding */}
                    <div className="flex-1 glass-card p-6 md:p-8">
                      <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                        <IconComponent className="w-4 h-4 text-amber" />
                        <h3 className="text-white text-lg sm:text-xl font-semibold">
                          {item.title}
                        </h3>
                      </div>

                      {item.org && (
                        <p className="text-[#B8B8C0] text-sm sm:text-base font-medium mb-1">
                          {item.org}
                          {item.orgNote && (
                            <span className="text-[#8B8B9E] font-normal">
                              {" "}
                              — {item.orgNote}
                            </span>
                          )}
                        </p>
                      )}

                      {item.date && (
                        <p className="font-mono text-xs text-[#8B8B9E] uppercase tracking-normal mb-4">
                          {item.date}
                        </p>
                      )}

                      {/* Bullets */}
                      {item.bullets && (
                        <ul className="space-y-2 mb-2">
                          {item.bullets.map((b, i) => (
                            <li
                              key={i}
                              className="text-sm sm:text-base text-[#B8B8C0] flex items-start gap-2.5 leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-amber mt-2 flex-shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Chips for certs & activities */}
                      {item.items && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.items.map((it) => (
                            <span key={it} className="skill-chip text-xs">
                              {it}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
