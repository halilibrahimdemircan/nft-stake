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
import { AppProvider, useAppContext } from "./context/AppContext";
import { ethCheckAccount, solCheckAccount } from "./apiCalls/checkAccount";

export const App = () => {
  const { state, dispatch } = useAppContext();

  useEffect(async () => {
    if (state.ethAddress?.length > 0 && state.ethToken?.length > 0) {
      const accountData = await ethCheckAccount(
        state.ethToken,
        state.ethAddress
      );
      if (!accountData?.success) {
        localStorage.removeItem("initEthAddress"),
          localStorage.removeItem("initEthToken"),
          dispatch({ type: "LOGOUTETH" });
      }
      console.log("eth accountData :>> ", accountData);
    }
  }, [state.ethAddress, state.ethToken]);
  useEffect(async () => {
    if (state.solAddress?.length > 0 && state.solToken?.length > 0) {
      const accountData = await solCheckAccount(
        state.solToken,
        state.solAddress
      );
      if (!accountData.success) {
        localStorage.removeItem("initSolAddress"),
          localStorage.removeItem("initSolToken"),
          dispatch({ type: "LOGOUTSOL" });
      }
      console.log("sol accountData :>> ", accountData);
    }
  }, [state.solAddress, state.solToken]);

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
  );
};

const Content = () => {
  return <WalletMultiButton />;
};
