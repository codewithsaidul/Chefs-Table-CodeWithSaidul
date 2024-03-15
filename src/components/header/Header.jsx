import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        
        <div className="navbar-start">

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  href="#"
                  className="text-[#150B2BB2] text-base font-normal hover:text-primary-color"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#150B2BB2] text-base font-normal hover:text-primary-color"
                >
                  Recipies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#150B2BB2] text-base font-normal hover:text-primary-color"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#150B2BB2] text-base font-normal hover:text-primary-color"
                >
                  Search
                </a>
              </li>

            </ul>
          </div>

          <a className="text-xl sm:text-3xl font-bold text-regal-blue">
            SakuDish
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-x-12 px-1">
            <li>
              <a
                href="#"
                className="text-[#150B2BB2] text-base font-normal hover:text-primary-color"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[#150B2BB2] text-base font-normal hover:text-primary-color"
              >
                Recipies
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[#150B2BB2] text-base font-normal hover:text-primary-color"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[#150B2BB2] text-base font-normal hover:text-primary-color"
              >
                Search
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-end space-x-3">
          <label className="sm:flex items-center gap-2 bg-[#150B2B0D] hidden py-3 px-6 rounded-[50px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="#150B2BB2"
              className="w-6 h-6 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>

            <input
              type="text"
              className="text-base text-[#150B2BB2] font-normal grow border-0 outline-none bg-transparent"
              placeholder="Search"
            />
          </label>

          <div className="p-2 sm:p-3 bg-primary-color rounded-full">
            <FaRegUserCircle className="text-2xl"></FaRegUserCircle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
