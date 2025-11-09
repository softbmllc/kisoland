// components/ui/Card.tsx
import type { JSX } from "react";
import * as React from "react";

type CardProps = {
  as?: keyof JSX.IntrinsicElements;
  title?: string;
  interactive?: boolean;
  accent?: boolean;
  className?: string;
  children?: React.ReactNode;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Card({
  as = "article",
  title,
  children,
  className,
  interactive = false,
  accent = true,
}: CardProps) {
  const Tag = as as React.ElementType;
  return (
    <Tag
      className={cx(
        "ui-card",
        // superficie y tipografía tokenizadas
        "rounded-2xl bg-[color:var(--surface)] text-[color:var(--fg,var(--foreground))]",
        // borde y sombra desde tokens
        "ring-1 ring-inset ring-[color:var(--border)] shadow-[var(--shadow-md)]",
        // transiciones sin trasladar el layout
        "transition-shadow duration-200",
        // interacción opcional
        interactive &&
          "cursor-pointer hover:shadow-[var(--shadow-lg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]",
        className
      )}
    >
      {accent && (
        <div className="h-1 w-full rounded-t-2xl bg-[color:var(--accent,var(--primary))]/40" />
      )}
      <div className="p-5 md:p-6">
        {title ? (
          <h3 className="font-serif font-bold tracking-tight text-lg md:text-xl text-[color:var(--fg-strong,var(--foreground))] mb-2">
            {title}
          </h3>
        ) : null}
        <div className={cx(title ? "mt-2" : undefined, "max-w-[56ch] leading-[1.45]")}>{children}</div>
      </div>
    </Tag>
  );
}