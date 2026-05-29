import Image from "next/image";

type BrandMarkProps = {
  /** Rendered logo size in pixels (width & height). */
  sizePx?: number;
  className?: string;
};

/** MSA logo used in the header & footer. */
export function BrandMark({ sizePx = 42, className = "" }: BrandMarkProps) {
  return (
    <Image
      src="/logo.jpg"
      alt="MSA"
      width={sizePx}
      height={sizePx}
      priority
      className={`shrink-0 rounded-md object-contain ${className}`}
      style={{ width: sizePx, height: sizePx }}
    />
  );
}
