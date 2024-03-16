import PropTypes from "prop-types";
// import { useState } from "react";
import Cooking from "../cooking/Cooking";
import Recipes from "../recipies/Recipes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OurRecipe = ({
  handleCooking,
  wantToCooking,
  prepareCooking,
  prepareToCooking,
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
          handleCooking={handleCooking}
          prepareCooking={prepareCooking}
          wantToCooking={wantToCooking}
          prepareToCooking={prepareToCooking}
        ></Cooking>

        <ToastContainer />
      </div>
    </div>
  );
};

OurRecipe.propTypes = {
  handleCooking: PropTypes.func,
  prepareCooking: PropTypes.func,
  wantToCooking: PropTypes.array,
  prepareToCooking: PropTypes.array,
};

export default OurRecipe;
