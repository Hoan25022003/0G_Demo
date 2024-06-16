import TableLogo from "./TableLogo";

const OurInvestors = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-2 gap-x-5 lg:mt-3">
      <div className="w-[50%] grid grid-row gap-y-5 md:flex items-center md:flex-cols mt-5 gap-x-3 md:gap-x-8">
        <img className="w-full" src="hackvc.svg" alt="" />
        <img className="w-full" src="blank_less.svg" alt="" />
      </div>
      <TableLogo />
    </div>
  );
};
export default OurInvestors;
