import { skills } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import PageTransition from "../components/PageTransition";
import {
  Palette,
  Code2,
  Cpu,
  Kanban,
  Database,
  Sparkles,
} from "lucide-react";

const groupIcons = {
  "Design & Research": Palette,
  "Front-End": Code2,
  "AI & Automation": Cpu,
  "Product & Tools": Kanban,
  Data: Database,
  "Currently Learning": Sparkles,
};

export default function Skills() {
  return (
    <PageTransition>
      <div className="site-container pt-16 md:pt-24 pb-20 md:pb-28">
        <SectionHeading
          eyebrow={skills.eyebrow}
          heading={skills.heading}
        />

        {/* 3-column grid (2 on tablet, 1 on mobile) with gap-6 md:gap-8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.groups.map((group, idx) => {
            const IconComponent = groupIcons[group.label] || Cpu;
            const padNum = String(idx + 1).padStart(2, "0");
            return (
              <GlassCard
                key={group.label}
                cornerNum={padNum}
                className="flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center text-amber">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-white text-lg font-semibold">
                    {group.label}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5 flex-1 items-start">
                  {group.items.map((item) => (
                    <span key={item} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}
