"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItemProps {
  href: string;
  title: string;
}

export const NavigationItem = ({
  href,
  title,
}: NavigationItemProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "hidden text-sm font-medium transition hover:scale-125 sm:block",
        pathname === href
          ? "text-blogThickRed"
          : "hover:text-blogThickRed",
      )}
    >
      {title}
    </Link>
  );
};
