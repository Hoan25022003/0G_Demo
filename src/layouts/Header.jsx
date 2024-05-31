import ConnectWallet from "../components/ConnectWallet";

const Header = () => {
  return (
    <nav className="flex flex-row items-center justify-between px-16 gap-x-5">
      <a
        href={"/"}
        className="flex items-center justify-start gap-x-3 lg:gap-x-5"
      >
        <img className="w-[90px]" src="logo_0g.png" alt="" />
      </a>
      <div className="flex items-center sm:gap-x-3 gap-x-1">
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
