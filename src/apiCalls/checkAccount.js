var url = "https://api.nftinit.io/";
// var url = 'http://localhost:8000/'
export async function ethCheckAccount(token, address, slot) {
  if (slot == 1 || slot == undefined) {
    return fetch(url + "api/check_account_test/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token, address: address }),
    }).then((data) => data.json());
  } else if (slot > 1) {
    return fetch(url + "api/sign_start/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
        address: address,
        token_slot: slot,
      }),
    }).then((data) => data.json());
  }
}
export async function solCheckAccount(address, token) {
  return fetch(url + "api/check_account_test_sol/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address: address,
      token: token,
    }),
  }).then((data) => data.json());
}
