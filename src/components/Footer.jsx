import { footer } from "../data/content";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.06] py-10 mt-16 md:mt-24">
      <div className="site-container flex flex-row items-center justify-between">
        <p className="font-mono text-xs text-[#8B8B9E] tracking-normal">
          {footer.text}
        </p>
      </div>
    </footer>
  );
}
