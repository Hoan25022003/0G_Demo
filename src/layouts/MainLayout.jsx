import FormTransaction from "../components/FormTransaction";
import TetherContent from "../components/TetherContent";


const MainLayout = () => {
  return (
    <div className="flex flex-col items-center lg:max-w-[85%] px-6 sm:px-8 xl:px-10 mx-auto py-8 sm:py-10 lg:py-14 gap-y-2 sm:gap-y-3 lg:gap-y-5">
      <div className="z-50 flex flex-col items-center flex-auto gap-y-5">
        <h1 className=" text-[2.4rem] p-2 font-bold sm:text-[3.5rem] lg:text-[50px] xl:text-[4.5rem] leading-[1] opacity-90 text-[#35250F] stats-text-shadow capitalize text-center">
          THE FIRST MODULAR AI CHAIN
        </h1>
        <p className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.5rem] xl:text-[2rem] font-normal leading-[1.375em] tracking-[0.704px] text-center stats-text-shadow text-[#35250F]">
        0G is an infinitely scalable data availability layer and data storage system that provides 
        the necessary infrastructure to scale Web3 and bring novel use cases on-chain.
        </p>
        <div className="w-full mt-5">
        <TetherContent />
        </div>
      </div>
      <div className="w-full sm:w-[50%] md:w-[45%] lg:w-[40%] xl:w-[35%] flex flex-col gap-y-5 items-center justify-center mt-2 lg:mt-4">
        <FormTransaction />
      </div>
    </div>
  );
};

export default MainLayout;
