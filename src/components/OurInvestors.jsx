import TableLogo from "./TableLogo";

const OurInvestors = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-2 gap-x-5 lg:mt-3">
      <div className="w-[45%] sm:w-[55%] items-center grid grid-row gap-y-5 lg:w-[50%] md:flex md:flex-cols mt-5 gap-x-3 md:gap-x-8">
        <div className="flex justify-center w-full">
          <img
            className="w-[85%] sm:w-[90%] md:w-full"
            src="hackvc.svg"
            alt=""
          />
        </div>

        <div className="flex justify-center w-full">
          <img
            className="w-[80%] sm:w-[90%] md:w-full"
            src="blank_less.svg"
            alt=""
          />
        </div>
      </div>
      <TableLogo />
    </div>
  );
};
export default OurInvestors;
