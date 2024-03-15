
// import PropTypes from 'prop-types'

import CurrentlyCooking from "../currentlyCooking/CurrentlyCooking"
import WantCooking from "../wantToCooking/WantCooking"

const Cooking = () => {
  return (
    <div>
        <WantCooking></WantCooking>
        <CurrentlyCooking></CurrentlyCooking>
    </div>
  )
}

Cooking.propTypes = {}

export default Cooking