
import PropTypes from 'prop-types'

const WantToCooking = ({ data, prepareCooking }) => {
  const { recipe_id, recipe_name, preparing_time, calories } = data;
  return (
    <tbody>
      <tr className="text-sm text-center text-[#282828B2] font-normal">
        <td>{recipe_id}</td>
        <td>{recipe_name}</td>
        <td>{preparing_time} Minite</td>
        <td>{calories} calories</td>
        <td>
          <button
            onClick={() => prepareCooking(recipe_id, data)}
            className="py-1 px-4 bg-primary-color rounded-[50px] text-sm text-title-color font-semibold"
          >
            Preparing
          </button>
        </td>
      </tr>
    </tbody>
  );
};

WantToCooking.propTypes = {
    data: PropTypes.object,
    handlePreparing: PropTypes.func,
    prepareCooking: PropTypes.func
}

export default WantToCooking