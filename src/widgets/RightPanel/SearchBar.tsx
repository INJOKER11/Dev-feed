import { Input } from "../../shared/ui/Input/Input.tsx";
import SearchIcon from "../../assets/icons/search.svg?react";

export const SearchBar = () => {
  return (
    <Input
      placeholder={"Search"}
      startAdornment={<SearchIcon className={"h-4.5 w-4.5"} />}
    />
  );
};
