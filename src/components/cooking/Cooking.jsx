
import PropTypes from 'prop-types'

import CurrentlyCooking from "../currentlyCooking/CurrentlyCooking"
import WantCooking from "../wantToCooking/WantCooking"

const Cooking = ({
  wantToCooking,
  handlePreparing,
  prepareCooking,
  prepareToCooking,
}) => {
  return (
    <div className="space-y-10 border h-fit border-[#28282833] rounded-2xl py-10 px-0 md:px-2 w-full lg:w-[40%]">
      <WantCooking
        wantToCooking={wantToCooking}
        handlePreparing={handlePreparing}
        prepareCooking={prepareCooking}
      ></WantCooking>

      <CurrentlyCooking prepareToCooking={prepareToCooking}></CurrentlyCooking>
    </div>
  );
};

Cooking.propTypes = {
  wantToCooking: PropTypes.array,
  prepareToCooking: PropTypes.array,
  handlePreparing: PropTypes.func,
  prepareCooking: PropTypes.func,
};

export default Cooking