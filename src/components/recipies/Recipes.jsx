
import PropTypes from 'prop-types'

import { useEffect, useState } from "react"
import Recipe from "../recipe/Recipe"

const Recipes = ({ handleCooking }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipeData.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="w-full lg:w-[60%] ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto w-full">
        {recipes.map((recipe) => (
          <Recipe
            key={recipes.id}
            recipe={recipe}
            handleCooking={handleCooking}
          ></Recipe>
        ))}
      </div>
    </div>
  );
};

Recipes.propTypes = {
  handleCooking: PropTypes.func
}

export default Recipes