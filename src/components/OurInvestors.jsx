const OurInvestors = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-2 gap-x-5 lg:mt-3">
      <div className="grid items-center w-1/2 grid-cols-2 mt-5 md:w-1/3 gap-x-8 lg:gap-x-10">
        <img src="img_onepiece.png" alt="" />
        <img src="okx.svg" alt="" />
      </div>
      <div className="relative grid items-center grid-cols-5 py-4 mt-2 sm:px-2 sm:mt-6 gap-x-5 sm:gap-x-9 lg:gap-x-12">
        <img src="trgc.svg" alt="" />
        <img src="okx.svg" alt="" />
        <img src="img_dao_5.png" alt="" />
        <img src="artichoke.svg" alt="" />
        <img src="trgc.svg" alt="" />
      </div>
    </div>
  );
};

export default OurInvestors;
