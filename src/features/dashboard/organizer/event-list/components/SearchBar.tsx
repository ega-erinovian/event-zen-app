import { Input } from "@/components/ui/input";
import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-gray-200 rounded-md p-4 relative h-full flex items-center">
      <Input
        type="text"
        placeholder="Search"
        className="bg-white shadow-none"
      />
    </div>
  );
};

export default SearchBar;
