// components/ui/Chip.tsx
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type BaseProps = {
  as?: "button" | "a" | "span";
  selected?: boolean;
  size?: "sm" | "md";
  className?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as?: "a" };
type SpanProps = BaseProps & React.HTMLAttributes<HTMLSpanElement> & { as?: "span" };

type Props = ButtonProps | AnchorProps | SpanProps;

export default function Chip({
  as = "span",
  selected = false,
  size = "md",
  className,
  ...props
}: Props) {
  const Tag = as as React.ElementType;

  return (
    <Tag
      className={cn(
        "inline-flex items-center rounded-full border ring-inset",
        "border-[var(--border)] bg-[var(--surface-alt)] text-[var(--fg-muted)]",
        size === "sm" ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm",
        selected &&
          "border-[var(--primary)] bg-[var(--primary-weak)] text-[var(--primary-contrast)]",
        // Estados
        "transition-colors hover:bg-[var(--surface-hover)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
        className
      )}
      {...props}
    />
  );
}