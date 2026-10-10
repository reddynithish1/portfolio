export default function GlassCard({
  children,
  className = "",
  cornerNum,
  hover = true,
}) {
  return (
    <div
      className={`glass-card p-6 md:p-8 relative ${
        hover
          ? "transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out hover:-translate-y-1 hover:border-amber/35 hover:shadow-[0_0_35px_rgba(255,138,31,0.12),0_12px_32px_rgba(0,0,0,0.5)]"
          : ""
      } ${className}`}
    >
      {cornerNum && (
        <span
          className="card-corner-num"
          aria-hidden="true"
        >
          {cornerNum}
        </span>
      )}
      {children}
    </div>
  );
}
