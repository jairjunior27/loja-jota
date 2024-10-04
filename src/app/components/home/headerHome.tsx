"use client"
import Link from "next/link";
import { NavItem } from "../nav/navItem";
import { Logo } from "../ui/logo";
import { SearchInput } from "../ui/search-input";
import { faBars, faShoppingCart, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { HomeModal } from "./homeModal";

export const HeaderHome = () => {
  const [showMenu,setShowMenu] = useState(false)
  return (
    <header className="bg-yellow-400 p-4 flex flex-col">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <Logo size={130} />
        <SearchInput />
        <Link
          href="/"
          className="hidden md:flex flex items-center opacity-70 hover:opacity-100 mx-2 "
        >
          <FontAwesomeIcon icon={faTag} className="mr-1" />
          Ofertas por tempo ilimitado
        </Link>
      </div>
      <div className="flex itens-center justify-between">
        <nav className="hidden md:flex items-center justify-end">
          <NavItem href="/signin" label="Crie sua conta" />
          <NavItem href="/signin" label="Entrar" />
          <NavItem href="/signin" label="Compras" />
          <NavItem href="/signin" icon={faShoppingCart} />
        </nav>
        <div className="flex items-center justify-between md:hidden  opacity-70 hover:opacity-100  w-full mt-4 ">
          <Link href="/" className="">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="flex md:hidden size-6"
            />
          </Link>
          <div className="" onClick={()=>setShowMenu(true)}>
            <FontAwesomeIcon icon={faBars} className="size-6"/>
          </div>
        </div>
      </div>

      {showMenu && 
      <HomeModal activeMenu={()=> setShowMenu(false)}/>
      }
    </header>
  );
};
