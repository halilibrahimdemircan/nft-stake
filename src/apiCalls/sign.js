var url = "https://api.nftinit.io/";
// var url = 'http://localhost:8000/'
export async function signAddressStart(address, slot) {
  if (slot == 1 || slot == undefined) {
    return fetch(url + "api/sign_start/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address: address }),
    }).then((data) => data.json());
  } else if (slot > 1) {
    return fetch(url + "api/sign_start/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address: address, token_slot: slot }),
    }).then((data) => data.json());
  }
}
export async function signAddressComplete(
  address,
  tempPassword,
  signature,
  slot
) {
  if (slot == 1 || slot == undefined) {
    return fetch(url + "api/sign_complete/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: address,
        temp_password: tempPassword,
        signature: signature,
      }),
    }).then((data) => data.json());
  } else if (slot > 1) {
    return fetch(url + "api/sign_complete/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: address,
        temp_password: tempPassword,
        signature: signature,
        token_slot: slot,
      }),
    }).then((data) => data.json());
  }
}
export async function saveSolanaWallet(address, token, solAddress, solToken) {
  return fetch(url + "api/save_sol_wallet/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address: address,
      token: token,
      token_slot: "",
      sol_address: solAddress,
      sol_token: solToken,
    }),
  }).then((data) => data.json());
}
