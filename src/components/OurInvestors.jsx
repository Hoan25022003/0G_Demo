import TableLogo from "./TableLogo";

const OurInvestors = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-2 gap-x-3 lg:mt-3">
      <div className="w-[92%] sm:w-[55%] items-center grid grid-cols-2 gap-y-6 lg:w-[65%] md:flex md:flex-cols mt-5 gap-x-3 md:gap-x-1 opacity-80">
        <div className="flex justify-center w-full">
          <img className="w-[88%] md:w-full" src="hackvc.svg" alt="" />
        </div>

        <div className="flex justify-center w-full">
          <img className="w-[75%] md:w-[75%]" src="blank_less.svg" alt="" />
        </div>
      </div>
      <TableLogo />
    </div>
  );
};
export default OurInvestors;
