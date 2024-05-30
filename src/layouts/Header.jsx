import { useCallback } from "react";
import { useAccount, useConnect } from "wagmi";
import useShortenAddress from "../hooks/useShortenAddress";
import { injected } from "wagmi/connectors";
import ButtonPrimary from "../components/ButtonPrimary";
import showToast from "../utils/showToast";

const Header = () => {
  const { connect } = useConnect();
  const { address, isConnecting, isReconnecting, isConnected } = useAccount();
  const shortenedAddress = useShortenAddress(address);

  const onClickConnect = useCallback(() => {
    connect({ connector: injected(), chainId: 56 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickCopyAddress = useCallback(() => {
    navigator.clipboard.writeText(address);
    showToast("success", "You copied wallet address", {
      progress: 0.1,
    });
  }, [address]);
  return (
    <nav className="flex flex-row gap-x-5 justify-between items-center px-1 py-2 max-w-[90%] sm:max-w-[80%] mx-auto rounded-full bg-white mt-5 shadow-lg ">
      <a
        href={"/"}
        className="flex items-center justify-start gap-x-3 lg:gap-x-5"
      >
        <img
          className="w-10 rounded-full md:w-12 lg:w-14 ml-3"
          src="logo_0g.png"
          alt=""
        />
        {/* <h3 className="text-sm font-extrabold leading-4 uppercase md:text-base lg:text-lg lg:leading-5 text-[#35250F]">
          0G NETWORK
        </h3> */}
      </a>
      <div className="flex items-center px-2 py-1 mr-1 sm:mr-4 lg:px-3 lg:py-2 sm:gap-x-3 gap-x-1">
        {!isConnected ? (
          <ButtonPrimary
            className="px-3 py-2 md:px-5 md:py-3"
            onClick={onClickConnect}
            loading={isConnecting || isReconnecting}
          >
            Connect Wallet
          </ButtonPrimary>
        ) : (
          <div
            onClick={onClickCopyAddress}
            className="sm:px-5 py-[10px] px-3 transition-all rounded-full text-[15px] sm:text-base font-medium cursor-pointer hover:bg-grayColor tooltip"
          >
            {shortenedAddress}
            <span className="tooltiptext w-[140px]">Click to copy</span>
          </div>
        )}
        <div className="tooltip">
          <img
            className="w-8 rounded-full cursor-pointer sm:w-9 lg:w-10"
            src="binance-smart-chain-bsc-logo-9C34053D61-seeklogo.png"
            alt=""
          />
          <span className="tooltiptext w-[200px]">Binance Smart Chain</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
