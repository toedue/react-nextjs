"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  {
    name: "Posts",
    href: "/blog/posts",
    icon: DocumentDuplicateIcon,
  },
  { name: "About", href: "/blog/about", icon: UserGroupIcon },
  { name: "Contact", href: "/blog/contact", icon: EnvelopeIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        // const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-12 grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-purple-100 md:flex-none md:justify-start md:p-2 md:px-3",
              { "bg-purple-100": pathname === link.href },
            )}
          >
            {/* <LinkIcon className="w-0" /> */}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
