import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import PageTransition from "../components/PageTransition";

const categories = ["All", "Product", "Design", "AI", "Code"];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const worrkfreeProject = projects.find((p) => p.slug === "worrkfree");
  const otherProjects = projects.filter((p) => p.slug !== "worrkfree");

  const filteredProjects =
    activeTab === "All"
      ? otherProjects
      : projects.filter(
          (p) => p.category.toLowerCase() === activeTab.toLowerCase()
        );

  const showFeaturedWorrkFree =
    activeTab === "All" || activeTab === "Product";

  return (
    <PageTransition>
      <div className="site-container pt-16 md:pt-24 pb-20 md:pb-28">
        <SectionHeading
          eyebrow="WORK / PORTFOLIO"
          heading="PROJECTS"
        />

        {/* Filter Tabs: pills px-5 py-2.5 text-sm, gap-3, mb-10 below */}
        <div className="flex flex-wrap items-center gap-3 mb-10 border-b border-white/[0.06] pb-5">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-mono transition-colors duration-200 cursor-pointer outline-none ${
                  isActive ? "text-[#07070A] font-semibold" : "text-[#B8B8C0] hover:text-white"
                }`}
              >
                {/* Sliding background */}
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-amber rounded-full shadow-[0_0_16px_rgba(255,138,31,0.4)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <div className="absolute inset-0 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06]" />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* WorrkFree Full-Width Horizontal Featured Card */}
          {showFeaturedWorrkFree && worrkfreeProject && (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={worrkfreeProject} featured={true} />
            </motion.div>
          )}

          {/* Standard 3-Column Grid for other builds (Swiggy, Trust Dashboard, etc.) */}
          {activeTab !== "Product" && (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((p) => (
                  <motion.div
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col h-full"
                  >
                    <ProjectCard project={p} featured={false} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
