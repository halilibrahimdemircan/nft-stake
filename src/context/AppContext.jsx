// AppContext.js

import React, { createContext, useContext, useReducer } from "react";

// Context oluşturulması
const AppContext = createContext();

// İlk durum (initial state)
const initialState = {
  ethToken: localStorage.getItem("initEthToken") || "",
  solToken: localStorage.getItem("initSolToken") || "",
  ethAddress: localStorage.getItem("initEthAddress") || "",
  solAddress: localStorage.getItem("initSolAddress") || "",
  activeNetwork: localStorage.getItem("activeNetwork") || "",
  nfts: [],
  totalShrooms: 0,
};

// Reducer fonksiyonu
const reducer = (state, action) => {
  switch (action.type) {
    case "SETETHCREDENTIALS":
      return {
        ...state,
        ethToken: action.payload.ethToken,
        ethAddress: action.payload.ethAddress,
      };
    case "SETSOLCREDENTIALS":
      return {
        ...state,
        solToken: action.payload.solToken,
        solAddress: action.payload.solAddress,
      };
    case "LOGOUTETH":
      return { ...state, ethToken: "", ethAddress: "" };
    case "LOGOUTSOL":
      return { ...state, solToken: "", solAddress: "" };
    case "SETNETWORK":
      localStorage.setItem("activeNetwork", action.payload);
      return { ...state, activeNetwork: action.payload };
    case "SETTOTALSHROOMS":
      return { ...state, totalShrooms: action.payload };
    case "SETNFTS":
      // return { ...state, nfts: action.payload };
      return {
        ...state,
        nfts: [
          {
            token_id: "3bYHW2X8m96ifHdMU4nDnY5tvHwcgJ7j5Kz9kZkPKBVr",
            name: "Secret Mushboomer",
            owner_address: "2E9bWVtemPovJMFAdTNqSKNtJ2jjBVA3yntByRxhjqg3",
            listed_time: "None",
            unlisted_time: "2 days, 0:16:29.216250",
            listed_status: "unlisted",
            hold_time: "5 days, 21:16:30.650573",
            image_url:
              "https://bafybeih53xtdm4g4uw4ivlofogyjsof3aoyuntwot5jrf5knf2s7xo4zcm.ipfs.nftstorage.link",
            shrooms: 0,
            stake: true,
          },
          {
            token_id: "4VUpT8SjCUK3nuon6AnH9gqsf3amdBP34CgmWTHvJvrn",
            name: "Secret Mushboomer",
            owner_address: "2E9bWVtemPovJMFAdTNqSKNtJ2jjBVA3yntByRxhjqg3",
            listed_time: "None",
            unlisted_time: "2 days, 0:16:29.216250",
            listed_status: "unlisted",
            hold_time: "5 days, 21:17:09.323781",
            image_url:
              "https://bafybeih53xtdm4g4uw4ivlofogyjsof3aoyuntwot5jrf5knf2s7xo4zcm.ipfs.nftstorage.link",
            shrooms: 0,
            stake: true,
          },
          {
            token_id: "5XAaMWeLsgB2vbaMoXuHQstmQC8pJJDEsWYMVPnu9zrK",
            name: "Secret Mushboomer",
            owner_address: "2E9bWVtemPovJMFAdTNqSKNtJ2jjBVA3yntByRxhjqg3",
            listed_time: "None",
            unlisted_time: "2 days, 0:16:29.216250",
            listed_status: "unlisted",
            hold_time: "5 days, 21:15:53.008061",
            image_url:
              "https://bafybeih53xtdm4g4uw4ivlofogyjsof3aoyuntwot5jrf5knf2s7xo4zcm.ipfs.nftstorage.link",
            shrooms: 0,
            stake: true,
          },
          {
            token_id: "9gUzCDPSuDKEsANy3o3EbZwwmwxsWRvxKHoLey55Sszq",
            name: "Secret Mushboomer",
            owner_address: "2E9bWVtemPovJMFAdTNqSKNtJ2jjBVA3yntByRxhjqg3",
            listed_time: "None",
            unlisted_time: "2 days, 0:16:29.216250",
            listed_status: "unlisted",
            hold_time: "5 days, 21:17:09.323781",
            image_url:
              "https://bafybeih53xtdm4g4uw4ivlofogyjsof3aoyuntwot5jrf5knf2s7xo4zcm.ipfs.nftstorage.link",
            shrooms: 0,
            stake: true,
          },
          {
            token_id: "BZVCHkKRvopkbSpPnUmoAW45mgoVFvJkc6Y2nZBTfCkC",
            name: "Secret Mushboomer",
            owner_address: "2E9bWVtemPovJMFAdTNqSKNtJ2jjBVA3yntByRxhjqg3",
            listed_time: "None",
            unlisted_time: "2 days, 0:16:29.216250",
            listed_status: "unlisted",
            hold_time: "5 days, 21:17:47.524161",
            image_url:
              "https://bafybeih53xtdm4g4uw4ivlofogyjsof3aoyuntwot5jrf5knf2s7xo4zcm.ipfs.nftstorage.link",
            shrooms: 0,
            stake: true,
          },
          {
            token_id: "EJKVkGvCGb312eyegHH1LkkX85GgLJNWWfc43YsMMeRZ",
            name: "Secret Mushboomer",
            owner_address: "2E9bWVtemPovJMFAdTNqSKNtJ2jjBVA3yntByRxhjqg3",
            listed_time: "None",
            unlisted_time: "2 days, 0:16:29.216250",
            listed_status: "unlisted",
            hold_time: "5 days, 21:16:30.650573",
            image_url:
              "https://bafybeih53xtdm4g4uw4ivlofogyjsof3aoyuntwot5jrf5knf2s7xo4zcm.ipfs.nftstorage.link",
            shrooms: 0,
            stake: true,
          },
          {
            token_id: "FCPoSKDwSA1ozNSWFetf2tTGEJTCi7aDzsNno16iPjuC",
            name: "Secret Mushboomer",
            owner_address: "2E9bWVtemPovJMFAdTNqSKNtJ2jjBVA3yntByRxhjqg3",
            listed_time: "None",
            unlisted_time: "2 days, 0:16:29.216250",
            listed_status: "unlisted",
            hold_time: "5 days, 21:15:53.008061",
            image_url:
              "https://bafybeih53xtdm4g4uw4ivlofogyjsof3aoyuntwot5jrf5knf2s7xo4zcm.ipfs.nftstorage.link",
            shrooms: 0,
            stake: true,
          },
          {
            token_id: "FvY3jQAFbmWNi2xVvGiTFz6wrQ3YrpCoNQ7nd8wRN5YG",
            name: "Secret Mushboomer",
            owner_address: "2E9bWVtemPovJMFAdTNqSKNtJ2jjBVA3yntByRxhjqg3",
            listed_time: "None",
            unlisted_time: "2 days, 0:16:29.216250",
            listed_status: "unlisted",
            hold_time: "5 days, 21:15:53.008061",
            image_url:
              "https://bafybeih53xtdm4g4uw4ivlofogyjsof3aoyuntwot5jrf5knf2s7xo4zcm.ipfs.nftstorage.link",
            shrooms: 0,
            stake: true,
          },
          {
            token_id: "GbfvJQuGZ6u7KsmaLNSCYVfhsJKjXkVpA8yTEZEPAars",
            name: "Secret Mushboomer",
            owner_address: "2E9bWVtemPovJMFAdTNqSKNtJ2jjBVA3yntByRxhjqg3",
            listed_time: "None",
            unlisted_time: "2 days, 0:16:29.216250",
            listed_status: "unlisted",
            hold_time: "5 days, 21:14:56.604069",
            image_url:
              "https://bafybeih53xtdm4g4uw4ivlofogyjsof3aoyuntwot5jrf5knf2s7xo4zcm.ipfs.nftstorage.link",
            shrooms: 0,
            stake: true,
          },
          {
            token_id: "HRoAKZZpFemUfHyK3J9yEUcY7b7tFNjmDA1dRhXvuM6D",
            name: "Secret Mushboomer",
            owner_address: "2E9bWVtemPovJMFAdTNqSKNtJ2jjBVA3yntByRxhjqg3",
            listed_time: "None",
            unlisted_time: "2 days, 0:16:29.216250",
            listed_status: "unlisted",
            hold_time: "5 days, 21:18:24.745343",
            image_url:
              "https://bafybeih53xtdm4g4uw4ivlofogyjsof3aoyuntwot5jrf5knf2s7xo4zcm.ipfs.nftstorage.link",
            shrooms: 0,
            stake: true,
          },
          {
            token_id: "uHKm5s5wnZ7gRqXxf38rtDWGPkaPXtsTbx3CHQSHHTj",
            name: "Secret Mushboomer",
            owner_address: "2E9bWVtemPovJMFAdTNqSKNtJ2jjBVA3yntByRxhjqg3",
            listed_time: "None",
            unlisted_time: "2 days, 0:16:29.216250",
            listed_status: "unlisted",
            hold_time: "5 days, 21:17:09.323781",
            image_url:
              "https://bafybeih53xtdm4g4uw4ivlofogyjsof3aoyuntwot5jrf5knf2s7xo4zcm.ipfs.nftstorage.link",
            shrooms: 0,
            stake: true,
          },
        ],
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
