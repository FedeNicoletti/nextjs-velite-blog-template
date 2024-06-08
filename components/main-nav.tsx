"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 mr-2 md:space-x-6">
      <Link href="/" className="flex text-sm items-center space-x-2 md:mr-6">
        <span className="font-bold">Home</span>
      </Link>
      <Link
        href="/"
        className={cn(
          "text-xs font-medium transition-colors hover:text-primary sm:ml-4 min-w-[7.5rem]",
          pathname === "/" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Online Coaching
      </Link>
      <Link
        href="/blog"
        className={cn(
          "text-xs font-medium transition-colors hover:text-primary",
          pathname === "/blog" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Educational <br />
        Articles
      </Link>
      <Link
        href="/#about"
        className={cn(
          "text-xs font-medium transition-colors hover:text-primary ",
          pathname === "/#about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        About
      </Link>
    </nav>
  );
}
