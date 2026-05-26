type BrandMarkProps = {
  /** Outer hex size in pixels. Inner wordmark scales proportionally. */
  sizePx?: number;
  className?: string;
};

const HEX_CLIP_PATH =
  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

/** Amber hexagonal MSA wordmark used in the header & footer. */
export function BrandMark({ sizePx = 42, className = "" }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center bg-primary ${className}`}
      style={{
        width: sizePx,
        height: sizePx,
        clipPath: HEX_CLIP_PATH,
      }}
    >
      <span
        className="font-display tracking-wider text-[#0a2540]"
        style={{ fontSize: `${sizePx * 0.262}px` }}
      >
        MSA
      </span>
    </span>
  );
}
