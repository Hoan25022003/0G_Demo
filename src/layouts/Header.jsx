import ConnectWallet from "../components/ConnectWallet";
import DropHover from "../components/DropHover";

const Header = () => {
  return (
    <nav className="flex flex-row items-center justify-between px-5 md:px-12 lg:px-16 gap-x-1 lg:gap-x-1">
      <a
        href={"/"}
        className="flex items-center justify-start gap-x-3 md:gap-x-5 lg:gap-x-1"
      >
        <img
          className="w-[80px] md:w-[90px] lg:w-[110px]"
          src="logo_0g.png"
          alt=""
        />
      </a>
      <DropHover />

      <div className="flex items-center gap-x-2 md:gap-x-4">
        <div className="tooltip">
          <img
            className="w-8 rounded-full cursor-pointer sm:w-9 lg:w-10"
            src="binance-smart-chain-bsc-logo-9C34053D61-seeklogo.png"
            alt=""
          />
          <span className="tooltiptext w-[160px]">Binance Smart Chain</span>
        </div>
        <ConnectWallet />
      </div>
    </nav>
  );
};

export default Header;
