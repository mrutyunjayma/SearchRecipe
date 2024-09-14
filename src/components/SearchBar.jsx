import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRecipe } from "../redux/actions";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchRecipe(query));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center">
        <input
          type="text"
          className="border p-2 rounded-lg w-3/4 sm:w-1/2 md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="ml-2 bg-blue-800 hover:bg-blue-600 text-white p-2 rounded-lg transition duration-300 ease-in-out"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
