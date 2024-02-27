"https://api.nftinit.io/api/get_stake_nfts/";

var url = "https://api.nftinit.io/";
// var url = 'http://localhost:8000/'

export async function getStakeNfts(ethToken, ethAddress, solToken, solAddress) {
  return fetch(url + "api/get_stake_nfts/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      eth_token: ethToken,
      eth_address: ethAddress,
      eth_token_slot: ethToken && ethAddress ? "" : null,
      sol_token: solToken,
      sol_address: solAddress,
    }),
  }).then((data) => data.json());
}
