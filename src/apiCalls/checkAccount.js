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
  }
}
export async function solCheckAccount(token, address) {
  return fetch(url + "api/check_account_sol/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sol_address: address,
      sol_token: token,
    }),
  }).then((data) => data.json());
}
