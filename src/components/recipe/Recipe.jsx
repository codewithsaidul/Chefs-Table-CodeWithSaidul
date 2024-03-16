import PropTypes from 'prop-types'
import { GoClock } from "react-icons/go";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipe, handleCooking }) => {
  // console.log(handleCooking);
  const {
    recipe_id,
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="space-y-5 border border-[#28282833] p-6 rounded-2xl">
      <div className="w-full h-auto rounded-2xl mb-5">
        <img src={recipe_image} alt="" className="rounded-2xl" />
      </div>

      <div className="space-y-3 mb-10 border-b border-[#2828281A] pb-5">
        <h3 className="text-lg text-title-color font-semibold">
          {recipe_name}
        </h3>
        <p className="text-base text-[#878787] font-normal">
          {short_description}
        </p>
      </div>

      <div className="mt-10 space-y-4 border-b border-[#2828281A] pb-5">
        <h4 className="text-xl text-[#282828] font-semibold">
          ingredients: {ingredients.length}
        </h4>

        <ul className="list-disc px-5 text-sm text-[#878787] font-normal">
          {ingredients.map((data, i) => (
            <li key={i}>{data}</li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex gap-x-5">
        <p className="flex gap-x-1 items-center text-base text-[#282828CC] font-normal">
          <GoClock></GoClock>
          <span>{preparing_time} minutes</span>
        </p>

        <p className="flex gap-x-1 items-center text-base text-[#282828CC] font-normal">
          <AiOutlineFire></AiOutlineFire>
          <span>{calories} calories</span>
        </p>
      </div>

      <button
        onClick={() => handleCooking(recipe, recipe_id)}
        className="py-3 px-7 bg-primary-color rounded-[50px] text-lg text-title-color font-semibold"
      >
        Want to Cook
      </button>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
  handleCooking: PropTypes.func
};

export default Recipe;
