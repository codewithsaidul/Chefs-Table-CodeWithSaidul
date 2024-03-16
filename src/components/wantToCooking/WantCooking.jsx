
import PropTypes from 'prop-types'
import WantToCooking from './WantToCooking';

const WantCooking = ({ wantToCooking, handlePreparing, prepareCooking }) => {
  return (
    <div>
      <div>
        <h2 className="border-b border-[#28282833] pb-5 text-center text-2xl text-[#282828] font-semibold">
          Want to cook: {wantToCooking.length}
        </h2>

        <div>
          <div className="mt-5">
            <table className="table text-center">
              {/* Table Head */}
              <thead>
                <tr className="text-base text-[#878787] font-normal">
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                  <th></th>
                </tr>
              </thead>

              {/* Table Body */}

              {wantToCooking.map((data) => (
                <WantToCooking
                  key={data.recepe__id}
                  data={data}
                  handlePreparing={handlePreparing}
                  prepareCooking={prepareCooking}
                ></WantToCooking>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

WantCooking.propTypes = {
  wantToCooking: PropTypes.array,
  handlePreparing: PropTypes.func,
  prepareCooking: PropTypes.func
};

export default WantCooking