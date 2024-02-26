// AppContext.js

import React, { createContext, useContext, useReducer } from "react";

// Context oluşturulması
const AppContext = createContext();

// İlk durum (initial state)
const initialState = {
  ethToken: localStorage.getItem("initEthToken") || null,
  solToken: localStorage.getItem("initSolToken") || null,
  ethAddress: localStorage.getItem("initEthAddress") || null,
  solAddress: localStorage.getItem("initSolAddress") || null,
  // activeNetwork: localStorage.getItem("activeNetwork") || "",
  nfts: [],
  // totalShrooms: 0,
};

// Reducer fonksiyonu
const reducer = (state, action) => {
  switch (action.type) {
    case "SETETHCREDENTIALS":
      localStorage.setItem("activeNetwork", "ETH");
      return {
        ...state,
        ethToken: action.payload.ethToken,
        ethAddress: action.payload.ethAddress,
        activeNetwork: "ETH",
      };
    case "SETSOLCREDENTIALS":
      localStorage.setItem("activeNetwork", "SOL");
      return {
        ...state,
        solToken: action.payload.solToken,
        solAddress: action.payload.solAddress,
        activeNetwork: "SOL",
      };
    case "LOGOUTETH":
      return { ...state, ethToken: "", ethAddress: "" };
    case "LOGOUTSOL":
      return { ...state, solToken: "", solAddress: "" };
    // case "SETNETWORK":
    //   localStorage.setItem("activeNetwork", action.payload);
    //   return { ...state, activeNetwork: action.payload };
    // case "SETTOTALSHROOMS":
    //   return { ...state, totalShrooms: action.payload };
    case "SETNFTS":
      // return { ...state, nfts: action.payload };
      return {
        ...state,
        nfts: {
          staked: [
            {
              eth: {
                token_id: "812",
                name: "Mushboomers #812",
                owner_address: "0xc66c8d71922825d97ed19e50287952d6b2d31879",
                listed_time: "11:37:50.305280",
                unlisted_time: null,
                listed_status: "unlisted",
                hold_time: "11:42:51.679598",
                image_url:
                  "https://ipfs.io/ipfs/QmZxfsoVaZjzwYiokaD7sPHiM5cWrz1BrrrPX4NDJCy6ZX",
                shrooms: 0,
                stake: true,
              },
              sol: {
                token_id: "Aj56S2fTzVCCSS3Eo6Gcec6Ct3g66bKAnUnJL2kb6914",
                name: "Secret Mushboomer",
                owner_address: "DrPym5UGD9fzdN16sdmWS97dTGDJHkaioReqMycCwxUF",
                listed_time: "None",
                unlisted_time: "11:52:14.399327",
                listed_status: "unlisted",
                hold_time: "11:52:14.399327",
                image_url:
                  "https://bafybeih53xtdm4g4uw4ivlofogyjsof3aoyuntwot5jrf5knf2s7xo4zcm.ipfs.nftstorage.link",
                shrooms: 0,
                stake: true,
              },
            },
            {
              eth: {
                token_id: "952",
                name: "Mushboomers #952",
                owner_address: "0xc66c8d71922825d97ed19e50287952d6b2d31879",
                listed_time: "11:37:45.217622",
                unlisted_time: null,
                listed_status: "unlisted",
                hold_time: "11:38:44.035618",
                image_url:
                  "https://ipfs.io/ipfs/QmQ29jd2wQBJEK74j7xJsqERe6hAizFbB8d49S3H1GQNyt",
                shrooms: 0,
                stake: true,
              },
              sol: {
                token_id: "Bsjb9DjYvz1WjbjVDXBnRtsE5Pbj7auCbV8kpmYHfGgk",
                name: "Secret Mushboomer",
                owner_address: "DrPym5UGD9fzdN16sdmWS97dTGDJHkaioReqMycCwxUF",
                listed_time: "None",
                unlisted_time: "11:52:14.399327",
                listed_status: "unlisted",
                hold_time: "11:52:14.399327",
                image_url:
                  "https://bafybeih53xtdm4g4uw4ivlofogyjsof3aoyuntwot5jrf5knf2s7xo4zcm.ipfs.nftstorage.link",
                shrooms: 0,
                stake: true,
              },
            },
            {
              eth: "",
              sol: {
                token_id: "J6wcsC1V9oUES2fMRkhfN38RP6JefmHkJAM2sq8R8x7p",
                name: "Secret Mushboomer",
                owner_address: "DrPym5UGD9fzdN16sdmWS97dTGDJHkaioReqMycCwxUF",
                listed_time: "None",
                unlisted_time: "11:52:14.399327",
                listed_status: "unlisted",
                hold_time: "11:52:14.399327",
                image_url:
                  "https://bafybeih53xtdm4g4uw4ivlofogyjsof3aoyuntwot5jrf5knf2s7xo4zcm.ipfs.nftstorage.link",
                shrooms: 0,
                stake: true,
              },
            },
            {
              eth: {
                token_id: "J6wcsC1V9oUES2fMRkhfN38RP6JefmHkJAM2sq8R8x7p",
                name: "Secret Mushboomer",
                owner_address: "DrPym5UGD9fzdN16sdmWS97dTGDJHkaioReqMycCwxUF",
                listed_time: "None",
                unlisted_time: "11:52:14.399327",
                listed_status: "unlisted",
                hold_time: "11:52:14.399327",
                image_url:
                  "https://bafybeih53xtdm4g4uw4ivlofogyjsof3aoyuntwot5jrf5knf2s7xo4zcm.ipfs.nftstorage.link",
                shrooms: 0,
                stake: true,
              },
              sol: "",
            },
          ],
          unstaked: [
            {
              eth: "",
              sol: {
                token_id: "AuuBsLZ2d197m9B8qycHQGrS2U6x7tt6bijLCN8H3nbW",
                name: "Secret Mushboomer",
                owner_address: "DrPym5UGD9fzdN16sdmWS97dTGDJHkaioReqMycCwxUF",
                listed_time: "11:30:26.158209",
                unlisted_time: "None",
                listed_status: "listed",
                hold_time: "11:52:14.399327",
                image_url:
                  "https://bafybeih53xtdm4g4uw4ivlofogyjsof3aoyuntwot5jrf5knf2s7xo4zcm.ipfs.nftstorage.link",
                shrooms: 0,
                stake: false,
              },
            },
          ],
          eth_shrooms: 0,
          sol_shrooms: 0,
          total_shrooms: 0,
        },
      };

    default:
      return state;
  }
};

// Context Provider bileşeni
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook oluşturulması
export const useAppContext = () => {
  return useContext(AppContext);
};
