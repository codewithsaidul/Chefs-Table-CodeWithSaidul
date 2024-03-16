
// import PropTypes from 'prop-types'

const WantCooking = () => {
  return (
    <div>
      <div>
        <h2 className="border-b border-[#28282833] pb-5 text-center text-2xl text-[#282828] font-semibold">
          Want to cook: 01
        </h2>

        <div>
          <div className="mt-5">
            <table className="table">
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

              <tbody>
                <tr className="text-base text-[#282828B2] font-normal">
                  <td>1</td>
                  <td>Chicken Caesar Salad</td>
                  <td>20 minutes</td>
                  <td>400 calories</td>
                  <td>
                    <button className="py-1 px-4 bg-primary-color rounded-[50px] text-sm text-title-color font-semibold">
                      Preparing
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

WantCooking.propTypes = {}

export default WantCooking