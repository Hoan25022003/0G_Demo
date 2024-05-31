import ButtonPrimary from "./ButtonPrimary";
import { useCallback } from "react";
import { useAccount, useConnect } from "wagmi";
import useShortenAddress from "../hooks/useShortenAddress";
import { injected } from "wagmi/connectors";
import showToast from "../utils/showToast";

const ConnectWallet = () => {
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
    <ButtonPrimary
      className={`px-5 py-[10px] min-w-[140px] ${isConnected && "tooltip"}`}
      onClick={isConnected ? onClickCopyAddress : onClickConnect}
      loading={isConnecting || isReconnecting}
      primary={!isConnected}
    >
      {isConnected ? (
        <>
          {shortenedAddress}
          <span className="tooltiptext w-[140px]">Click to copy</span>
        </>
      ) : (
        "Connect Wallet"
      )}
    </ButtonPrimary>
  );
};

export default ConnectWallet;
