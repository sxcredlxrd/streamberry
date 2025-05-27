import { UIInput } from "@/shared/ui";
import type { ChangeEvent } from "react";

export type SearchInputProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <UIInput
      name="search"
      autoFocus={true}
      value={value}
      onChange={onChange}
      className="w-full relative outline-0 rounded-[30px] border-n-3 hover:border-n-2 hover:placeholder:text-n-2 focus:border-n-1 focus:placeholder:text-n-1 transition duration-150 ease-in font-normal"
      placeholder="Введите название фильма или сериала"
    />
  );
}

export default SearchInput;
