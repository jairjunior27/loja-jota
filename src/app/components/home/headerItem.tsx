import Link from "next/link";
import { NavItem } from "../nav/navItem"
import { Logo } from "../ui/logo"
import { SearchInput } from "../ui/search-input"
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const HeaderItem = () =>{
    return(
        <div className="bg-yellow-400 px-4 ">
            <div className="flex items-center justify-between">
            <Logo size={100}/>
            <SearchInput/>
            <Link href='/' className="flex items-center opacity-70 hover:opacity-100"><FontAwesomeIcon icon={faTag} className="size-6 text-gray-700 mr-1"/>Ofertas por tempo Limitado</Link>
            </div>
            <nav>
                <NavItem href="/signout" label="Crie a sua conta"/>
                <NavItem href="/signin" label="Entre" />
            </nav>
        </div>
    )
}