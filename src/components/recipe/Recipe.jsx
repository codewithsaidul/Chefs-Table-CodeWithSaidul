import { GoClock } from "react-icons/go";
import { AiOutlineFire } from "react-icons/ai";
// import PropTypes from 'prop-types'

const Recipe = () => {
  return (
    <div className="grid grid-cols-2 gap-5 w-[80%]">

      <div className="space-y-5 border border-[#28282833] p-6 rounded-2xl">
        <div className="w-full h-auto rounded-2xl mb-5">
          <img
            src="https://i.ibb.co/Dfmq22M/shashi-chaturvedula-o-Yv-Z-stypr4-unsplash.jpg"
            alt=""
            className="rounded-2xl"
          />
        </div>

        <div className="space-y-3 mb-10 border-b border-[#2828281A] pb-5">
          <h3 className="text-xl text-title-color font-semibold">
            Spicy Chicken Stir-Fry
          </h3>
          <p className="text-base text-[#878787] font-normal">
            A fiery stir-fry bursting with flavor and goodness.
          </p>
        </div>

        <div className="mt-10 space-y-4 border-b border-[#2828281A] pb-5">
          <h4 className="text-xl text-[#282828] font-semibold">
            ingredients: 6
          </h4>

          <ul className="list-disc px-5">
            <li className="text-lg text-[#878787] font-normal">
              550 g chicken breast, sliced
            </li>
            <li className="text-lg text-[#878787] font-normal">
              120 ml soy sauce
            </li>
            <li className="text-lg text-[#878787] font-normal">
              200 g basil leaves
            </li>
            <li className="text-lg text-[#878787] font-normal">
              400 g mushrooms, sliced
            </li>
            <li className="text-lg text-[#878787] font-normal">
              400 g mushrooms, sliced
            </li>
            <li className="text-lg text-[#878787] font-normal">
              400 g mushrooms, sliced
            </li>
          </ul>
        </div>

        <div className="mt-10 flex gap-x-8">
          <p className="flex gap-x-2 items-center text-base text-[#282828CC] font-normal">
            <GoClock></GoClock>
            <span>30 minutes</span>
          </p>

          <p className="flex gap-x-2 items-center text-base text-[#282828CC] font-normal">
            <AiOutlineFire></AiOutlineFire>
            <span>600 calories</span>
          </p>
        </div>

        <button className="py-3 px-7 bg-primary-color rounded-[50px] text-lg text-title-color font-semibold">Want to Cook</button>
      </div>

      
      <div className="space-y-5 border border-[#28282833] p-6 rounded-2xl">
        <div className="w-full h-auto rounded-2xl mb-5">
          <img
            src="https://i.ibb.co/Dfmq22M/shashi-chaturvedula-o-Yv-Z-stypr4-unsplash.jpg"
            alt=""
            className="rounded-2xl"
          />
        </div>

        <div className="space-y-3 mb-10 border-b border-[#2828281A] pb-5">
          <h3 className="text-xl text-title-color font-semibold">
            Spicy Chicken Stir-Fry
          </h3>
          <p className="text-base text-[#878787] font-normal">
            A fiery stir-fry bursting with flavor and goodness.
          </p>
        </div>

        <div className="mt-10 space-y-4 border-b border-[#2828281A] pb-5">
          <h4 className="text-xl text-[#282828] font-semibold">
            ingredients: 6
          </h4>

          <ul className="list-disc px-5">
            <li className="text-lg text-[#878787] font-normal">
              550 g chicken breast, sliced
            </li>
            <li className="text-lg text-[#878787] font-normal">
              120 ml soy sauce
            </li>
            <li className="text-lg text-[#878787] font-normal">
              200 g basil leaves
            </li>
            <li className="text-lg text-[#878787] font-normal">
              400 g mushrooms, sliced
            </li>
            <li className="text-lg text-[#878787] font-normal">
              400 g mushrooms, sliced
            </li>
            <li className="text-lg text-[#878787] font-normal">
              400 g mushrooms, sliced
            </li>
          </ul>
        </div>

        <div className="mt-10 flex gap-x-8">
          <p className="flex gap-x-2 items-center text-base text-[#282828CC] font-normal">
            <GoClock></GoClock>
            <span>30 minutes</span>
          </p>

          <p className="flex gap-x-2 items-center text-base text-[#282828CC] font-normal">
            <AiOutlineFire></AiOutlineFire>
            <span>600 calories</span>
          </p>
        </div>

        <button className="py-3 px-7 bg-primary-color rounded-[50px] text-lg text-title-color font-semibold">Want to Cook</button>
      </div>


    </div>
  );
};

Recipe.propTypes = {};

export default Recipe;
