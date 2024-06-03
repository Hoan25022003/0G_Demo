import FormTransaction from "../components/FormTransaction";
import TableContent from "../components/TableContent";
import OurInvestors from "../components/OurInvestors";

const MainLayout = () => {
  return (
    <div className="flex flex-col main-content item-center gap-y-10">
      <div className="flex flex-col lg:flex-row gap-y-2 sm:gap-y-3 lg:gap-x-6 xl:gap-x-10">
        <div className="lg:flex-[5]">
          <img src="img_bear.webp" alt="" />
        </div>
        <div className="flex flex-col gap-y-5 lg:flex-[4] items-center lg:items-start">
          <h1 className="font-medium text-[80px] sm:text-[90px] lg:text-[100px] leading-[1] opacity-90 stats-text-shadow capitalize sm:mt-10">
            0G SALE
          </h1>
          <h3 className="font-medium text-[30px] leading-[1] opacity-90 items-center stats-text-shadow capitalize ">
            The First Modular AI Chain
          </h3>
          <p className="text-lg text-center sm:text-xl lg:text-start stats-text-shadow">
            0G is an infinitely scalable data availability layer and data
            storage system that provides the necessary infrastructure to scale
            Web3 and bring novel use cases on-chain.
          </p>

          <TableContent />

          <div className="flex flex-col items-center justify-center w-full mt-2 gap-y-5 lg:mt-4">
            <FormTransaction />
          </div>
        </div>
      </div>
      <div className="items-center w-full px-3 py-2 mt-2 lg:mb-20">
        <h1 className="p-2 font-medium text-[30px] md:text-[40px] leading-[1] stats-text-shadow capitalize text-center">
          Our Investors
        </h1>
        <OurInvestors />
      </div>
    </div>
  );
};

export default MainLayout;
