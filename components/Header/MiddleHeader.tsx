import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

type Props = {
  searchInput: string;
  onSearchInputChange?: (e: any) => void;
  placeHolder: string | null;
};
const MiddleHeader = ({
  searchInput,
  onSearchInputChange,
  placeHolder,
}: Props) => {
  return (
    <div className="flex items-center rounded-full md:border-2 py-2 md:shadow-sm">
      <input
        value={searchInput}
        onChange={onSearchInputChange}
        className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 "
        type="text"
        placeholder={placeHolder || "Start your search"}
      />
      <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2 " />
    </div>
  );
};

export default MiddleHeader;
