"use client";

import { startTransition, useEffect, useState } from "react";

import { THEME_STORAGE_KEY } from "@/lib/constants";

function apply(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export function ThemeToggle({ labels }: { labels: { light: string; dark: string } }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
      setTheme(
        document.documentElement.classList.contains("dark")
          ? "dark"
          : "light",
      );
    });
  }, []);

  function toggle() {
    const next = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    apply(next);
    setTheme(next);
  }

  if (!mounted) {
    return (
      <span className="inline-flex h-9 w-[7.5rem] rounded-full border border-border bg-muted/40" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-card px-3 text-sm font-medium text-foreground shadow-sm transition hover:bg-muted/60"
      aria-pressed={isDark}
      aria-label={isDark ? labels.dark : labels.light}
    >
      <span className="text-base leading-none" aria-hidden>
        {isDark ? "🌙" : "☀️"}
      </span>
      <span>{isDark ? labels.dark : labels.light}</span>
    </button>
  );
}
