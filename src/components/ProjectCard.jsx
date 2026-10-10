import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Search,
  ShieldCheck,
  BarChart3,
  MessageSquare,
  Code2,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  "layout-dashboard": LayoutDashboard,
  search: Search,
  "shield-check": ShieldCheck,
  "bar-chart-3": BarChart3,
  "message-square": MessageSquare,
  "code-2": Code2,
};

export default function ProjectCard({ project, featured = false }) {
  const IconComponent = iconMap[project.iconType] || Code2;

  // Horizontal Full-Width Layout for Featured WorrkFree card
  if (featured) {
    return (
      <div className="glass-card p-6 md:p-8 rounded-[20px] group transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out hover:-translate-y-1 hover:border-amber/35 hover:shadow-[0_0_35px_rgba(255,138,31,0.12),0_12px_32px_rgba(0,0,0,0.5)] w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Left visual: about 40% (5 cols), fixed height, no dead space */}
          <div className="md:col-span-5 h-56 md:h-72 w-full relative overflow-hidden rounded-xl bg-gradient-to-b from-amber/[0.14] via-amber/[0.04] to-transparent border border-white/[0.06] flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,138,31,0.2)_0%,transparent_70%)] pointer-events-none" />
            <IconComponent
              className="w-16 h-16 md:w-20 md:h-20 text-amber/25 group-hover:text-amber/45 group-hover:scale-105 transition-all duration-300"
              strokeWidth={1.3}
            />
            <div className="absolute top-3 right-3">
              <span className="font-mono text-[11px] uppercase tracking-normal text-amber-light px-3 py-1 rounded-full bg-black/60 border border-amber/25 backdrop-blur-md">
                {project.category}
              </span>
            </div>
          </div>

          {/* Right content: 7 cols */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <h3 className="glow-heading text-2xl sm:text-3xl md:text-4xl text-amber mb-2 leading-tight">
              {project.title}
            </h3>

            <p className="font-mono text-xs text-[#8B8B9E] mb-4">
              {project.date}
            </p>

            <p className="text-[#B8B8C0] text-sm sm:text-base leading-relaxed mb-5">
              {project.cardSummary || project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="skill-chip">
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons Row: shows ALL links */}
            <div className="flex flex-wrap items-center gap-3">
              {project.hasCaseStudy && (
                <Link
                  to={`/projects/${project.slug}`}
                  className="btn-primary h-12 px-6 rounded-xl text-sm"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}

              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary h-12 px-6 rounded-xl text-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.links?.readTeardown && (
                <a
                  href={project.links.readTeardown}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary h-12 px-6 rounded-xl text-sm"
                >
                  <span>Read Teardown</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary h-12 px-6 rounded-xl text-sm"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard 3-Column Grid Card
  return (
    <div className="glass-card p-6 md:p-8 flex flex-col h-full rounded-[20px] group transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out hover:-translate-y-1 hover:border-amber/35 hover:shadow-[0_0_35px_rgba(255,138,31,0.12),0_12px_32px_rgba(0,0,0,0.5)]">
      {/* Top Visual Header: fixed h-40 md:h-44 */}
      <div className="relative w-full h-40 md:h-44 overflow-hidden rounded-xl bg-gradient-to-b from-amber/[0.14] via-amber/[0.04] to-transparent border border-white/[0.06] flex items-center justify-center mb-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,138,31,0.18)_0%,transparent_70%)] pointer-events-none" />

        <IconComponent
          className="w-12 h-12 md:w-14 md:h-14 text-amber/25 group-hover:text-amber/45 group-hover:scale-105 transition-all duration-300"
          strokeWidth={1.3}
        />

        <div className="absolute top-3 right-3">
          <span className="font-mono text-[11px] uppercase tracking-normal text-amber-light px-3 py-1 rounded-full bg-black/60 border border-amber/25 backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1">
        <h3 className="glow-heading text-2xl sm:text-3xl text-amber mb-2 leading-tight">
          {project.title}
        </h3>

        <p className="font-mono text-xs text-[#8B8B9E] mb-4">
          {project.date}
        </p>

        <p className="text-[#B8B8C0] text-sm sm:text-base leading-relaxed mb-5">
          {project.cardSummary || project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="skill-chip">
              {t}
            </span>
          ))}
        </div>

        {/* Buttons Row: pinned to bottom (mt-auto), showing ALL available links */}
        <div className="flex flex-wrap items-center gap-3 mt-auto pt-2">
          {project.hasCaseStudy && (
            <Link
              to={`/projects/${project.slug}`}
              className="btn-primary h-12 px-6 rounded-xl text-sm"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}

          {project.links?.readTeardown && (
            <a
              href={project.links.readTeardown}
              target="_blank"
              rel="noopener noreferrer"
              className={project.hasCaseStudy ? "btn-secondary h-12 px-6 rounded-xl text-sm" : "btn-primary h-12 px-6 rounded-xl text-sm"}
            >
              <span>Read Teardown</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className={project.hasCaseStudy ? "btn-secondary h-12 px-6 rounded-xl text-sm" : "btn-primary h-12 px-6 rounded-xl text-sm"}
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary h-12 px-6 rounded-xl text-sm"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
