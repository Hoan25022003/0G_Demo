const OurInvestors = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-2 gap-x-5 lg:mt-3">
      <div className="w-[45%] sm:w-[55%] items-center grid grid-row gap-y-5 lg:w-[50%] md:flex md:flex-cols mt-5 gap-x-3 md:gap-x-8">
        <div className="w-full flex justify-center">
          <img
            className="w-[85%] sm:w-[90%] md:w-full"
            src="hackvc.svg"
            alt=""
          />
        </div>

        <div className="w-full flex justify-center">
          <img
            className="w-[80%] sm:w-[90%] md:w-full"
            src="blank_less.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default OurInvestors;
