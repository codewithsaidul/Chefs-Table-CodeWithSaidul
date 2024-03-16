
import PropTypes from 'prop-types'

const CurrentCooker = ({ prepare}) => {
  const { recipe_id, recipe_name, preparing_time, calories } = prepare;
  return (
    <tbody>
      <tr>
        <td>{recipe_id}</td>
        <td>{recipe_name}</td>
        <td>{preparing_time} minutes</td>
        <td>{calories} calories</td>
      </tr>
    </tbody>
  );
};

CurrentCooker.propTypes = {
    prepare: PropTypes.object
}

export default CurrentCooker