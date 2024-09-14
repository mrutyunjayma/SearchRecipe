import React from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

const App = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center p-4 text-blue-600">
        Recipe Search App
      </h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;
