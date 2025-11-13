// components/SiteHeader.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";

type NavItem = { href: string; label: string };
type NavGroup = { label: string; items: NavItem[] };

const INDUMENTARIA: NavItem = { href: "/indumentaria", label: "Indumentaria" };

const GROUPS: NavGroup[] = [
  {
    label: "Universo",
    items: [
      { href: "/kisolab", label: "Kisolab" },
      { href: "/mundo-kiso", label: "Mundo Kiso" },
      { href: "/coleccion-del-orbe-sagrado", label: "Orbe Sagrado" },
      { href: "/galeria", label: "Galería" },
    ],
  },
  {
    label: "Entrenamiento",
    items: [
      { href: "/focus-penalty", label: "Focus Penalty" },
      { href: "/competidor-integral", label: "Competidor Integral" },
    ],
  },
  {
    label: "Acerca",
    items: [
      { href: "/quienes-somos", label: "Quiénes somos" },
      { href: "/carlos-alberto-plata", label: "Carlos A. Plata" },
    ],
  },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<Record<string, boolean>>({});

  // Shadow/blur on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  const TopLink = ({ href, label }: NavItem) => (
    <Link
      href={href}
      aria-current={isActive(href) ? "page" : undefined}
      className={clsx(
        "rounded-md px-3 py-2 text-sm font-medium tracking-tight transition-colors",
        isActive(href)
          ? "bg-foreground text-background"
          : "hover:bg-foreground/10"
      )}
    >
      {label}
    </Link>
  );

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b",
        scrolled ? "bg-background/80 backdrop-blur shadow-sm" : "bg-background/60"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-6">
        <Link href="/" aria-label="Inicio" className="inline-flex items-center gap-2">
          {/* Light bg (day) */}
          <Image src="/brand/mark-dark.svg" alt="" width={36} height={36} priority className="inline dark:hidden shrink-0" />
          {/* Dark bg (night) */}
          <Image src="/brand/mark-light.svg" alt="" width={36} height={36} priority className="hidden dark:inline shrink-0" />
          <span className="sr-only">KISOLAND</span>
        </Link>

        {/* Desktop: grouped nav */}
        <div className="ml-4 hidden items-center gap-1 md:flex">
          {GROUPS.map((g) => (
            <div key={g.label} className="relative group">
              <button
                className={clsx(
                  "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium tracking-tight transition-colors",
                  "hover:bg-foreground/10"
                )}
              >
                {g.label}
                <ChevronDown size={16} className="opacity-70 transition-transform group-hover:rotate-180" />
              </button>
              {/* Dropdown */}
              <div
                className={clsx(
                  "invisible absolute left-0 top-full mt-1 min-w-[220px] rounded-lg border bg-background p-2 shadow-lg opacity-0 transition-all",
                  "group-hover:visible group-hover:opacity-100"
                )}
              >
                <div className="grid gap-1">
                  {g.items.map((it) => (
                    <TopLink key={it.href} {...it} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side: CTA (shop) */}
        <div className="ml-auto hidden md:flex">
          <TopLink {...INDUMENTARIA} />
        </div>

        {/* Mobile toggle */}
        <button
          className="ml-auto inline-flex items-center rounded-md p-2 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-background md:hidden">
          <div className="mx-auto max-w-6xl px-6 py-4">
            {/* CTA first */}
            <div className="mb-2">
              <TopLink {...INDUMENTARIA} />
            </div>
            {/* Groups accordion */}
            <div className="divide-y">
              {GROUPS.map((g) => {
                const isOpen = mobileOpen[g.label];
                return (
                  <div key={g.label} className="py-2">
                    <button
                      className="flex w-full items-center justify-between py-2 text-left text-sm font-medium"
                      onClick={() =>
                        setMobileOpen((s) => ({ ...s, [g.label]: !s[g.label] }))
                      }
                      aria-expanded={isOpen ? "true" : "false"}
                    >
                      <span>{g.label}</span>
                      <ChevronDown
                        size={16}
                        className={clsx(
                          "opacity-70 transition-transform",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>
                    {isOpen && (
                      <div className="grid gap-1 pl-1 pt-1">
                        {g.items.map((it) => (
                          <TopLink key={it.href} {...it} />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}