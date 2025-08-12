import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const NavItems = [
  { path: "/about", text: "About", title: "Sobre mi" },
  { path: "/pricing", text: "Pricing", title: "precio" },
  { path: "/contact", text: "Contact", title: "Contacto" },
  { path: "/contador", text: "Contador", title: "Contador" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-900 bg-opacity-30 p-2 m-2 rounded-2xl">
      <Link
        className="flex items-center transform transition-transform duration-100 ease-out hover:scale-110 hover:text-blue-300 active:text-blue-400"
        href="/home"
      >
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {NavItems.map((NavItems) => (
        <ActiveLink key={NavItems.path} {...NavItems} /> //operador express, pasa las propiedades
      ))}
    </nav>
  );
};

export default Navbar;
