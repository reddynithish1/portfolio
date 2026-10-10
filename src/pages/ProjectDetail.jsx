import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/content";
import PageTransition from "../components/PageTransition";
import GlassCard from "../components/GlassCard";
import {
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export default function ProjectDetail() {
  const { slug } = useParams();

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) {
    return <Navigate to="/projects" replace />;
  }

  const project = projects[projectIndex];

  const caseStudyProjects = projects.filter((p) => p.hasCaseStudy);
  const currentCaseIndex = caseStudyProjects.findIndex((p) => p.slug === slug);
  const nextProject =
    currentCaseIndex !== -1
      ? caseStudyProjects[(currentCaseIndex + 1) % caseStudyProjects.length]
      : projects[(projectIndex + 1) % projects.length];

  return (
    <PageTransition>
      <div className="site-container pt-16 md:pt-24 pb-20 md:pb-28">
        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-[#8B8B9E] hover:text-amber mb-8 transition-colors group outline-none rounded-md px-1"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>

        {/* ─── PROJECT HEADER ─── */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase text-amber-light px-3 py-1 rounded-full bg-amber/10 border border-amber/25">
              {project.category}
            </span>
            <div className="flex items-center gap-1.5 font-mono text-xs text-[#8B8B9E]">
              <Calendar className="w-3.5 h-3.5" />
              <span>{project.date}</span>
            </div>
          </div>

          <h1 className="glow-heading-lg text-4xl sm:text-6xl md:text-7xl mb-4 text-amber">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="font-mono text-sm text-amber-light/80 mb-6">
              {project.subtitle}
            </p>
          )}

          {/* Action Buttons: h-12 px-6 rounded-xl (rendered ONLY if real link exists) */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary h-12 px-6 rounded-xl text-sm"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.links?.readTeardown && (
              <a
                href={project.links.readTeardown}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary h-12 px-6 rounded-xl text-sm"
              >
                <span>Read Teardown</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={!project.links?.live && !project.links?.readTeardown ? "btn-primary h-12 px-6 rounded-xl text-sm" : "btn-secondary h-12 px-6 rounded-xl text-sm"}
              >
                <span>GitHub Repository</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Tech Chips */}
          <div className="flex flex-wrap gap-2.5">
            {project.tech.map((t) => (
              <span key={t} className="skill-chip">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ─── CASE STUDY CONTENT SECTIONS (NO hero image, NO gallery) ─── */}
        <div className="space-y-8 md:space-y-10 max-w-4xl">
          {/* 1. Overview */}
          <GlassCard>
            <h2 className="glow-heading text-2xl sm:text-3xl mb-4 text-amber">
              Overview
            </h2>
            <p className="text-[#B8B8C0] text-base sm:text-lg leading-relaxed">
              {project.overview || project.description || (
                <span className="italic text-[#8B8B9E]">
                  [Case study overview details to be added]
                </span>
              )}
            </p>
          </GlassCard>

          {/* 2. My Role */}
          <GlassCard>
            <h2 className="glow-heading text-2xl sm:text-3xl mb-4 text-amber">
              My Role
            </h2>
            <p className="text-[#B8B8C0] text-base sm:text-lg leading-relaxed">
              {project.role || (
                <span className="italic text-[#8B8B9E]">
                  [Role description to be added]
                </span>
              )}
            </p>
          </GlassCard>

          {/* 3. Key Features */}
          <GlassCard>
            <h2 className="glow-heading text-2xl sm:text-3xl mb-5 text-amber">
              Key Features
            </h2>
            {project.features && project.features.length > 0 ? (
              <ul className="space-y-3.5">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[#B8B8C0] text-base leading-relaxed"
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="italic text-[#8B8B9E]">
                [Feature breakdown to be added]
              </p>
            )}
          </GlassCard>

          {/* 4. What I Learned (rendered only when it has text) */}
          {Boolean(project.learnings && project.learnings.trim()) && (
            <GlassCard>
              <h2 className="glow-heading text-2xl sm:text-3xl mb-4 text-amber">
                What I Learned
              </h2>
              <p className="text-[#B8B8C0] text-base sm:text-lg leading-relaxed">
                {project.learnings}
              </p>
            </GlassCard>
          )}
        </div>

        {/* ─── NEXT PROJECT NAVIGATION ─── */}
        {nextProject && (
          <div className="mt-16 md:mt-24 pt-10 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="font-mono text-xs uppercase text-[#8B8B9E] mb-1">
                Next Project
              </p>
              <Link
                to={`/projects/${nextProject.slug}`}
                className="glow-heading text-2xl sm:text-3xl text-amber hover:opacity-90 inline-flex items-center gap-3 group outline-none rounded-md px-1"
              >
                <span>{nextProject.title}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            <Link to="/projects" className="btn-secondary h-12 px-6 rounded-xl text-sm">
              <span>View All Projects</span>
            </Link>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
