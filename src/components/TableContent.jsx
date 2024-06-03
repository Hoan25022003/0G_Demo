import Tooltip from "@mui/material/Tooltip";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import ListAltIcon from "@mui/icons-material/ListAlt";
// import TuneIcon from "@mui/icons-material/Tune";

const TableContent = () => {
  return (
    <div className="w-full overflow-x-auto shadow-md rounded-lg border-[1px] border-primaryColor">
      <div className="flex flex-row w-full p-4 bg-gradient-to-r from-primaryColor to-secondColor items-center gap-x-1 md:gap-x-2">
        <Tooltip title="Verified Collection" placement="top">
            <CheckCircleIcon className="text-white w-[12px] md:w-[30px]" />
        </Tooltip>
        <h2 className="text-xl font-medium text-white uppercase">Live seed</h2>
      </div>

      <div className="flex flex-row items-center p-4 text-sm text-left rtl:text-right">
        <div className="w-full text-[15px] md:text-[17px] grid grid-cols-2 text-black">
          <span>Token</span>
          <span>USDT</span>
        </div>
      </div>
      <hr className="border-primaryColor sm:mx-auto" />
      <div className="flex flex-row p-4 text-sm text-left rtl:text-right">
        <div className="w-full text-[15px] md:text-[17px] grid grid-cols-2 text-black">
          <span>Available Token</span>
          <span>NAN</span>
        </div>
      </div>
      <hr className="border-primaryColor sm:mx-auto" />
      <div className="flex flex-row text-sm text-left rtl:text-right p-4 bg-[#FAE6F3]">
        <div className="w-full text-[15px] md:text-[17px] grid grid-cols-2 text-black">
          <span>Token for sale</span>
          <span>100.00M</span>
        </div>
      </div>
      <hr className="border-primaryColor sm:mx-auto" />
      <div className="flex flex-row p-4 text-sm text-left rtl:text-right">
        <div className="w-full text-[15px] md:text-[17px]  grid grid-cols-2 text-black">
          <span>Price per token</span>
          <span>0,000025ETH</span>
        </div>
      </div>
    </div>
  );
};
export default TableContent;
