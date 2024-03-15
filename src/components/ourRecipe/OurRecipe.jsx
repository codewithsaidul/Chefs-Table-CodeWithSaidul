import Cooking from "../cooking/Cooking";
import Recipes from "../recipies/Recipes";


const OurRecipe = () => {
  return (
    <div className="mt-24">
      <div className="text-center space-y-3 mb-20">
        <h2 className="text-title-color text-4xl font-semibold">Our Recipes</h2>
        <p className="text-base text-[#150B2B99] font-normal w-full md:w-[640px] mx-auto">
          Our mission is simple: to provide you with delicious and nutritious
          recipes that are easy to make and impossible to resist.
        </p>
      </div>


      <div className="flex justify-between">
        <Recipes className="w-[60%]"></Recipes>
        <Cooking className="w-[40%]"></Cooking>
      </div>
    </div>
  );
}

export default OurRecipe