import React from "react";
import { useSelector } from "react-redux";

const RecipeList = () => {
  const recipes = useSelector((state) => state.recipes);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {recipes.map((recipe, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
        >
          <img
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg text-gray-800">
              {recipe.recipe.label}
            </h3>
            <h4 className="font-bold text-lg text-green-500">ingrediants</h4>
            <p>{recipe.recipe.ingredientLines}</p>
            <p className="text-lg text-green-400">
              Calories: {recipe.recipe.calories}
            </p>
            <p className="text-gray-600">
              <span className="text-red-500"> Total Time:</span>{" "}
              {recipe.recipe.totalTime > 0 ? recipe.recipe.totalTime : "N/A"}
              minutes
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
