
import PropTypes from 'prop-types'

import CurrentlyCooking from "../currentlyCooking/CurrentlyCooking"
import WantCooking from "../wantToCooking/WantCooking"

const Cooking = ({
  wantToCooking,
  prepareCooking,
  prepareToCooking,
  time,
  calori,
}) => {
  return (
    <div className="space-y-10 border h-fit border-[#28282833] rounded-2xl py-10 px-0 md:px-2 w-full lg:w-[40%]">
      <WantCooking
        wantToCooking={wantToCooking}
        prepareCooking={prepareCooking}
      ></WantCooking>

      <CurrentlyCooking
        prepareToCooking={prepareToCooking}
        time={time}
        calori={calori}
      ></CurrentlyCooking>
    </div>
  );
};

Cooking.propTypes = {
  wantToCooking: PropTypes.array,
  prepareToCooking: PropTypes.array,
  prepareCooking: PropTypes.func,
  time: PropTypes.number,
  calori: PropTypes.number,
};

export default Cooking