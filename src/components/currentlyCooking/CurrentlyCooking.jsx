
// import PropTypes from 'prop-types'

const CurrentlyCooking = () => {
  return (
    <div>
      <div>
        <h2 className="border-b border-[#28282833] pb-5 text-center text-2xl text-[#282828] font-semibold">
          Currently cooking: 02
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

              <tbody>
                <tr className="text-base text-[#282828B2] font-normal">
                  <td className="bg-base-200">1</td>
                  <td className="bg-base-200">Chicken Caesar Salad</td>
                  <td className="bg-base-200">20 minutes</td>
                  <td className="bg-base-200">400 calories</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-8 flex gap-3">
              <h4 className="text-base text-[#282828CC] font-normal">Total Time = 45 minutes</h4>
              <h4 className="text-base text-[#282828CC] font-normal">Total Calories = 1050 calories</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CurrentlyCooking.propTypes = {}

export default CurrentlyCooking