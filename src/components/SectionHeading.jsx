export default function SectionHeading({
  eyebrow,
  heading,
  subtitle,
  className = "",
}) {
  return (
    <div className={`mb-12 ${className}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="glow-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
        {heading}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#B8B8C0] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
