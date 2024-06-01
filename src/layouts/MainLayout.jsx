import FormTransaction from "../components/FormTransaction";
import TetherContent from "../components/TetherContent";


const MainLayout = () => {
  return (
    <div className="flex flex-col item-center w-full">
      {/* className="flex flex-row-2 items-center lg:max-w-[85%] px-6 sm:px-8 xl:px-10 mx-auto py-8 sm:py-10 lg:py-14 gap-y-2 sm:gap-y-3 lg:gap-x-20" */}
    <div className="flex flex-row-2 items-center w-full px-6 sm:px-8 xl:px-10 mx-auto py-8 sm:py-10 lg:py-14 gap-y-2 sm:gap-y-3 lg:gap-x-20">
     <div className="hidden md:block w-1/2 items-center">
      <img className="" src="img_bear.webp" alt="" />
     </div>
      <div className="w-1/2 z-50 flex flex-col items-center flex-auto gap-y-5"> 
        <h1 className=" text-[30px] p-2 font-bold sm:text-[35px] lg:text-[45px] leading-[1] opacity-90 text-[#35250F] stats-text-shadow capitalize text-center">
          THE FIRST MODULAR AI CHAIN
        </h1>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-normal leading-[1.375em] tracking-[0.704px] text-center stats-text-shadow text-[#35250F]">
        0G is an infinitely scalable data availability layer and data storage system that provides 
        the necessary infrastructure to scale Web3 and bring novel use cases on-chain.
        </p>
        <div className="w-full mt-5">
          <TetherContent />
        </div>
        {/* <div className="w-full sm:w-[50%] md:w-[45%] lg:w-[40%] xl:w-[35%] flex flex-col gap-y-5 items-center justify-center mt-2 lg:mt-4">
          <FormTransaction />
        </div> */}

        <div className="w-full flex flex-col gap-y-5 items-center justify-center mt-2 lg:mt-4">
          <FormTransaction />
        </div>
      </div> 
    </div>
    <div className="w-full mt-2 px-3 py-2">
      <h1 className="text-[30px] p-2 font-bold sm:text-[35px] lg:text-[40px] xl:text-[45px] leading-[1] opacity-90 text-[#35250F] stats-text-shadow capitalize text-center">
         Our Investors
      </h1>
      <div className="flex flex-row gap-x-5 items-center justify-center mt-2 lg:mt-3">
        <img className="w-[30%] p-2" src="img_onepiece.png" alt="" />
        <img className="w-[20%] p-5" src="okx.svg" alt="" />
      </div>
    </div>
  </div>  
  );
};

export default MainLayout;
