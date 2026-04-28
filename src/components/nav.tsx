"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
            RR
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold leading-none">
              Rebuild Relief
            </span>
            <span className="text-xs text-muted-foreground leading-none mt-0.5">
              Careers
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          <Link
            href="/"
            className={`px-3 py-2 text-sm rounded-md transition-colors ${
              pathname === "/"
                ? "bg-accent text-accent-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Open Positions
          </Link>
          <Link
            href="/admin"
            className={`px-3 py-2 text-sm rounded-md transition-colors ${
              pathname.startsWith("/admin")
                ? "bg-accent text-accent-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Staff Login
          </Link>
        </nav>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="sm:hidden border-t px-4 pb-4 pt-2 space-y-1">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`block px-3 py-2 text-sm rounded-md transition-colors ${
              pathname === "/"
                ? "bg-accent text-accent-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Open Positions
          </Link>
          <Link
            href="/admin"
            onClick={() => setOpen(false)}
            className={`block px-3 py-2 text-sm rounded-md transition-colors ${
              pathname.startsWith("/admin")
                ? "bg-accent text-accent-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Staff Login
          </Link>
        </div>
      )}
    </header>
  );
}
