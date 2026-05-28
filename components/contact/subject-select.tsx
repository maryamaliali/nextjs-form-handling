"use client";

import { useEffect, useId, useRef, useState } from "react";

export type SubjectOption = {
  value: string;
  label: string;
};

type SubjectSelectProps = {
  name?: string;
  label: string;
  placeholder: string;
  options: SubjectOption[];
  required?: boolean;
  className?: string;
};

export function SubjectSelect({
  name = "subject",
  label,
  placeholder,
  options,
  required = true,
  className = "",
}: SubjectSelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const labelId = useId();

  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function selectOption(next: string) {
    setValue(next);
    setOpen(false);
  }

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <label id={labelId} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <input type="hidden" name={name} value={value} required={required} />
      <button
        type="button"
        id={`${labelId}-trigger`}
        aria-labelledby={labelId}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        className="flex w-full items-center justify-between gap-2 rounded-lg border border-border bg-card px-3 py-2 text-left text-sm text-foreground outline-none ring-offset-background transition hover:border-primary/30 focus-visible:ring-2 focus-visible:ring-ring"
        onClick={() => setOpen((current) => !current)}
      >
        <span className={selected ? "text-foreground" : "text-muted-foreground"}>
          {selected?.label ?? placeholder}
        </span>
        <span
          className={`shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          ▾
        </span>
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-labelledby={labelId}
          className="absolute left-0 right-0 top-full z-50 mt-1 max-h-56 overflow-auto rounded-xl border border-border bg-background/95 py-1 shadow-lg backdrop-blur-md"
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <li key={option.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  className={`flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-left text-sm transition hover:bg-muted/80 ${
                    isSelected ? "font-medium text-primary" : "text-foreground"
                  }`}
                  onClick={() => selectOption(option.value)}
                >
                  <span>{option.label}</span>
                  {isSelected ? (
                    <span className="text-xs font-semibold text-primary" aria-hidden>
                      ✓
                    </span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
