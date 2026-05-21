import { IconCheck } from "@/components/icons/icon-check";

type CheckListProps = {
  items: readonly string[];
  className?: string;
  itemClassName?: string;
  iconClassName?: string;
};

export function CheckList({
  items,
  className,
  itemClassName,
  iconClassName = "mt-0.5 h-4 w-4 shrink-0 text-primary",
}: CheckListProps) {
  return (
    <ul className={className ?? "space-y-3"}>
      {items.map((item) => (
        <li
          key={item}
          className={
            itemClassName ??
            "flex gap-3 text-sm text-muted-foreground sm:text-base"
          }
        >
          <IconCheck className={iconClassName} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
