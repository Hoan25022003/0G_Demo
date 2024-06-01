import FormTransaction from "../components/FormTransaction";
import OurInvestors from "../components/OurInvestors";
// import TetherContent from "../components/TetherContent";

const MainLayout = () => {
  return (
    <div className="flex flex-col main-content item-center gap-y-10">
      {/* className="flex flex-row-2 items-center lg:max-w-[85%] px-6 sm:px-8 xl:px-10 mx-auto py-8 sm:py-10 lg:py-14 gap-y-2 sm:gap-y-3 lg:gap-x-20" */}
      <div className="flex gap-y-2 sm:gap-y-3 lg:gap-x-10">
        <div className="items-center w-full block flex-[5]">
          <img className="scale-110" src="img_bear.webp" alt="" />
        </div>
        <div className="z-50 flex flex-col gap-y-5 flex-[4]">
          <h1 className="font-medium text-[100px] leading-[1] opacity-90 stats-text-shadow capitalize">
            0G SALE
          </h1>
          <p className="text-xl font-normal leading-[1.375em] tracking-[0.704px] stats-text-shadow">
            0G is an infinitely scalable data availability layer and data
            storage system that provides the necessary infrastructure to scale
            Web3 and bring novel use cases on-chain.
          </p>
          {/* <div className="w-full sm:w-[50%] md:w-[45%] lg:w-[40%] xl:w-[35%] flex flex-col gap-y-5 items-center justify-center mt-2 lg:mt-4">
          <FormTransaction />
        </div> */}

          <div className="flex flex-col items-center justify-center w-full mt-2 gap-y-5 lg:mt-4">
            {/* <TetherContent /> */}
            <FormTransaction />
          </div>
        </div>
      </div>
      <div className="w-full px-3 py-2 mt-2 mb-20">
        <h1 className="p-2 font-medium text-[40px] leading-[1] stats-text-shadow capitalize text-center">
          Our Investors
        </h1>
        <OurInvestors />
      </div>
    </div>
  );
};

export default MainLayout;
