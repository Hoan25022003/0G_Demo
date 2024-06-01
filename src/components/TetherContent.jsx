import { useChainId } from "wagmi";
import useShortenAddress from "../hooks/useShortenAddress";
import { USDT_CONTRACT } from "../common/constant";

const TetherContent = () => {
  const chainId = useChainId();
  const shortenedAddress = useShortenAddress(USDT_CONTRACT[chainId]);
  return (
    <div className="relative left-0 flex justify-center w-full">
      {/* w-full md:w-[45%] lg:w-[40%] xl:w-[35%] */}
      <div className="flex items-center justify-between w-full  px-5 py-3 sm:px-7 sm:py-4 bg-white rounded-[20px] sm:rounded-[30px] bg-opacity-75 border-primaryColor border-[1px]">
        <div className="flex flex-row items-center justify-center lg:gap-x-4 gap-x-2">
          <img
            className="w-10 lg:w-12"
            src="https://tokens.pancakeswap.finance/images/symbol/usdt.png"
            alt="USDT"
          />
          <div className="">
            <strong className="text-base font-extrabold lg:text-lg text-blackColor stats-text-shadow">
              USDT
            </strong>
            <br />
            <span className="text-base font-medium lg:text-lg stats-text-shadow opacity-70">
              Tether
            </span>
          </div>
        </div>
        <h2 className="text-base font-medium lg:text-lg stats-text-shadow md:ml-10">
          {shortenedAddress}
        </h2>
      </div>
    </div>
  );
};

export default TetherContent;
