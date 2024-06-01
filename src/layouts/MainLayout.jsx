import FormTransaction from "../components/FormTransaction";
import TableContent from "../components/TableContent";
import OurInvestors from "../components/OurInvestors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Tooltip from '@mui/material/Tooltip'; 

const MainLayout = () => {
  return (
    <div className="w-full flex flex-col main-content item-center gap-y-10">
      {/* className="flex flex-row-2 items-center lg:max-w-[85%] px-6 sm:px-8 xl:px-10 mx-auto py-8 sm:py-10 lg:py-14 gap-y-2 sm:gap-y-3 lg:gap-x-20" */}
      <div className=" flex gap-y-2 sm:gap-y-3 lg:gap-x-10">
        <div className="hidden items-center w-full md:block flex-[5]">
          <img className="scale-110" src="img_bear.webp" alt="" />
        </div>
        <div className=" z-50 flex flex-col gap-y-2 lg:gap-y-5 flex-[4] mr-1 lg:mr-3 px-2 py-1">
          <h1 className="font-medium text-[65px] sm:text-[70px] md:text-[90px] lg:text-[100px] leading-[1] opacity-90 stats-text-shadow capitalize">
            0G SALE
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-normal leading-[1.375em] tracking-[0.704px] stats-text-shadow">
            0G is an infinitely scalable data availability layer and data
            storage system that provides the necessary infrastructure to scale
            Web3 and bring novel use cases on-chain.
          </p>
          <div className="flex items-center my-2 gap-x-1 md:mb-3 md:gap-x-2">
              <Tooltip title="Verified Collection" placement="top">
                <CheckCircleIcon className="text-primaryColor w-[12px] md:w-[30px]" />
              </Tooltip>
              <span className="text-[12px] md:text-[17px] font-semibold uppercase text-primaryColor">
                LIVE - SEED
              </span>
            </div>

            <TableContent/>
            
          <div className="flex flex-col items-center justify-center w-full mt-2 gap-y-5 lg:mt-4">
            <FormTransaction />
          </div>
        </div>
      </div>
      <div className="w-full px-3 py-2 mt-2 lg:mb-20 items-center">
        <h1 className="p-2 font-medium text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] leading-[1] stats-text-shadow capitalize text-center">
          Our Investors
        </h1>
        <OurInvestors />
        <div className="hidden relative sm:flex flex-row mt-2 md:mt-5 sm:gap-x-6 md:gap-x-9 lg:gap-x-12 justify-center py-4 px-2">
          <img className="sm:w-[60px] md:w-[80px] lg:w-[100px]" src="trgc.svg" alt="" />
          <img className="sm:w-[60px] md:w-[80px] lg:w-[100px]" src="okx.svg" alt="" />
          <img className="sm:w-[60px] md:w-[80px] lg:w-[100px]" src="img_dao_5.png" alt="" />
          <img className="sm:w-[60px] md:w-[80px] lg:w-[100px]" src="artichoke.svg" alt="" />
          <img className="sm:w-[60px] md:w-[80px] lg:w-[100px]" src="trgc.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
