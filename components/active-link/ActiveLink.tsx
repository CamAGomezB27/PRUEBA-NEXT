"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
  title: string;
}

export const ActiveLink = ({ path, text, title }: Props) => {
  const pathName = usePathname();
  const isActive = pathName === path;

  return (
    <Link
      className={`mr-4 transform transition-transform duration-100 ease-out hover:scale-110 hover:text-blue-300 active:text-blue-400 ${
        isActive ? "font-bold text-blue-400 scale-110" : ""
      }`}
      href={path}
      title={title}
    >
      {text}
    </Link>
  );
};
