
// import PropTypes from 'prop-types'

import CurrentlyCooking from "../currentlyCooking/CurrentlyCooking"
import WantCooking from "../wantToCooking/WantCooking"

const Cooking = () => {
  return (
    <div className="space-y-10 border border-[#28282833] rounded-2xl py-10 px-0 md:px-2 w-full lg:w-[40%]">
      <WantCooking></WantCooking>
      <CurrentlyCooking></CurrentlyCooking>
    </div>
  );
}

Cooking.propTypes = {}

export default Cooking