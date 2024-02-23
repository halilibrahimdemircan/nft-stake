import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { FC, ReactNode, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesktopLicense from "./components/Sign";
import MyWallet from "./components/MyWallet";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Inventory from "./pages/Inventory";
import { AppProvider } from "./context/AppContext";
import { ethCheckAccount } from "./apiCalls/checkAccount";

export const App = () => {
  useEffect(async () => {
    if (
      localStorage.getItem("initEthAddress")?.length > 0 &&
      localStorage.getItem("initEthToken")?.length > 0
    ) {
      const accountData = await ethCheckAccount(
        localStorage.getItem("initEthToken"),
        localStorage.getItem("initEthAddress")
      );
      console.log("accountData :>> ", accountData);
    }
  }, [
    localStorage.getItem("initEthAddress"),
    localStorage.getItem("initEthToken"),
  ]);
  useEffect(() => {
    if (
      localStorage.getItem("initSolAddress")?.length > 0 &&
      localStorage.getItem("initSolToken")?.length > 0
    ) {
      console.log("sol-check account test");
    }
  }, [
    localStorage.getItem("initSolAddress"),
    localStorage.getItem("initSolToken"),
  ]);

  return (
    <Context>
      <Content />
    </Context>
  );
};

const Context = ({ children }) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );

  return (
    <AppProvider>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets}>
          <WalletModalProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/inventory" element={<Inventory />} />

                  <Route path="*" element={<NoPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </AppProvider>
  );
};

const Content = () => {
  return <WalletMultiButton />;
};
