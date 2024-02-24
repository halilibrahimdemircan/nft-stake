"https://api.nftinit.io/api/get_stake_nfts/";

var url = "https://api.nftinit.io/";
// var url = 'http://localhost:8000/'

export async function getStakeNfts(activeNetwork, token, address) {
  if (activeNetwork === "ETH") {
    return fetch(url + "api/get_stake_nfts/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eth_token: token,
        eth_address: address,
        eth_token_slot: "",
      }),
    }).then((data) => data.json());
  } else if (activeNetwork === "SOL") {
    return fetch(url + "api/get_stake_nfts/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sol_token: token, sol_address: address }),
    }).then((data) => data.json());
  }
}
