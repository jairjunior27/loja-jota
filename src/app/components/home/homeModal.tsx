import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../ui/logo";
import { faArrowRightFromBracket, faClose, faHome, faShoppingCart, faTag } from "@fortawesome/free-solid-svg-icons";
import { SearchInput } from "../ui/search-input";
import { NavItem } from "../nav/navItem";

type props = {
  activeMenu: () => void;
};
export const HomeModal = ({ activeMenu }: props) => {
  return (
    <div className="md:hidden fixed inset-0 bg-yellow-400">
      <div className="flex  items-center justify-between border-b-2 border-gray-400 p-2">
        <Logo size={120} />
       
       <div className="flex items-center ">
        <FontAwesomeIcon icon={faShoppingCart} className="mr-4 size-6 text-gray-500 opacity-70  hover:opacity-100"/>

          <FontAwesomeIcon
            icon={faClose}
            className="size-6 text-gray-500 opacity-70  hover:opacity-100 w-6 h-6 border-2 border-gray-500 rounded-3xl p-1" onClick={activeMenu}
          />
          </div>
      </div>
      <div className="mt-6 p-4 ">
        <div className="flex justify-center">
        <SearchInput/>
        </div>
        <nav className="mt-10 ">
            <NavItem href="/" icon={faHome} label="Pagina Inicial"/>
            <NavItem href="/ofertas" icon={faTag} label="Ofertas"/>
            <NavItem href="/" icon={faArrowRightFromBracket} label="Sair"/>
        </nav>

      </div>
    </div>
  );
};
