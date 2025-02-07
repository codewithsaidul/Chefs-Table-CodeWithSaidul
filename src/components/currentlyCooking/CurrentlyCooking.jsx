
import PropTypes from 'prop-types'
import CurrentCooker from './CurrentCooker';

const CurrentlyCooking = ({ prepareToCooking, time, calori }) => {
  return (
    <div>
      <div>
        <h2 className="border-b border-[#28282833] pb-5 text-center text-2xl text-[#282828] font-semibold">
          Currently cooking: {prepareToCooking.length}
        </h2>

        <div className="">
          <div className="mt-5">
            <table className="table">
              {/* Table Head */}
              <thead>
                <tr className="text-base text-[#878787] font-normal">
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>

              {/* Table Body */}

              {prepareToCooking.map((prepare, index) => (
                <CurrentCooker key={index} prepare={prepare}></CurrentCooker>
              ))}
            </table>

            <div className="mt-8 flex gap-3">
              <h4 className="text-base text-[#282828CC] font-normal">
                Total Time = {time} minutes
              </h4>
              <h4 className="text-base text-[#282828CC] font-normal">
                Total Calories = {calori} calories
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CurrentlyCooking.propTypes = {
  prepareToCooking: PropTypes.array,
  time: PropTypes.number,
  calori: PropTypes.number,
};

export default CurrentlyCooking