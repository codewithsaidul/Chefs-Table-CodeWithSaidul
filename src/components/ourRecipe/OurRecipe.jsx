import PropTypes from "prop-types";
import Cooking from "../cooking/Cooking";
import Recipes from "../recipies/Recipes";



const OurRecipe = ({
  handleCooking,
  wantToCooking,
  prepareCooking,
  prepareToCooking,
  time,
  calori,
}) => {
  return (
    <div className="mt-24">
      <div className="text-center space-y-3 mb-20">
        <h2 className="text-title-color text-4xl font-semibold">Our Recipes</h2>
        <p className="text-base text-[#150B2B99] font-normal w-full md:w-[640px] mx-auto">
          Our mission is simple: to provide you with delicious and nutritious
          recipes that are easy to make and impossible to resist.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-5">
        <Recipes handleCooking={handleCooking}></Recipes>

        <Cooking
          time={time}
          calori={calori}
          prepareCooking={prepareCooking}
          wantToCooking={wantToCooking}
          prepareToCooking={prepareToCooking}
        ></Cooking>
      </div>
    </div>
  );
};

OurRecipe.propTypes = {
  handleCooking: PropTypes.func,
  prepareCooking: PropTypes.func,
  wantToCooking: PropTypes.array,
  prepareToCooking: PropTypes.array,
  time: PropTypes.number,
  calori: PropTypes.number
};

export default OurRecipe;
