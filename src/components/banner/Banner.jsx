

const Banner = () => {
  return (
    <div>
      <div className="banner space-y-5 py-20 sm:py-[250px] mt-12 md:mt-20">
        <h1 className="text-white text-2xl sm:text-5xl w-full font-bold lg:w-[850px] mx-auto">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-base sm:text-lg text-white w-full md:w-[650px] mx-auto">
          Serve up unforgettable meals with Saku Dish, your recipe resource for
          memorable gatherings
        </p>

        <div className="flex flex-col w-[60%]  mx-auto sm:flex-row gap-10 justify-center">
          <button className="py-3 px-8 bg-primary-color hover:bg-transparent ease-in-out duration-1000 hover:text-white border border-primary-color hover:border-[#fff] rounded-[50px]">
            Explore Now
          </button>
          <button className="py-3 px-8 border border-[#fff] hover:border-primary-color ease-in-out duration-1000 text-white hover:text-[#150B2B] hover:bg-primary-color rounded-[50px]">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner