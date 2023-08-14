import {useMemo} from "react";
import { useWeb3React } from "@web3-react/core";
import abiEth from "../../config/web3/artifacts/abiEth";


const {address, abi} = abiEth;


const EthereumRed = () => {
  const {active,library,chainId } = useWeb3React()

  const ethAbi = useMemo( () => {
  if (active) return new library.eth.Contract(abi,address[chainId]);
    }, [active,chainId,library?.eth?.Contract]);

    return ethAbi
};

export default EthereumRed;