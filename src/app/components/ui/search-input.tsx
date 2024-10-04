import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Input } from "./input";

export const SearchInput = () => {
  return (
    <div className="flex max-w-lg flex-grow">
      <Input placeholder="Buscar" type="search" icon={faMagnifyingGlass} />
    </div>
  );
};
