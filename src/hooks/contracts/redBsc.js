import {useMemo} from "react";
import { useWeb3React } from "@web3-react/core";
import abiBsc from "../../config/web3/artifacts/abiBsc";


const {address, abi} = abiBsc;


const BinanceSmartChain = () => {
  const {active,library,chainId } = useWeb3React()

  const bscAbi = useMemo( () => {
  if (active) return new library.eth.Contract(abi,address[chainId]);
    }, [active,chainId,library?.eth?.Contract]);

    return bscAbi
};

export default BinanceSmartChain;