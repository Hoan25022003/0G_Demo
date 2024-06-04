import ConnectWallet from "../components/ConnectWallet";
import DropHover from "../components/DropHover";

const Header = () => {
  return (
    <nav className="z-50 flex flex-row items-center justify-between px-5 md:px-12 lg:px-16 md:gap-x-4">
      <a href={"/"} className="flex items-start justify-start ">
        <img
          className="w-[80px] md:w-[90px] lg:w-[110px]"
          src="logo_0g.png"
          alt=""
        />
      </a>

      <div className="flex items-center gap-x-4 md:gap-x-8">
        <DropHover />
        <ConnectWallet />
      </div>
    </nav>
  );
};

export default Header;
