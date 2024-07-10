import { genericUsers } from "../constants";

export const URL_API_TOKEN = "https://devfactorydcm.com/auth/signin";

export const URL_API_ANSWERS = "https://devfactorydcm.com/indicator_answer/";

//To get tokens

//Method to call an endpoint to get the token, given a user and password, first we check if we have a token, then check if is valid, if not, we get a new one
export async function getToken() {
  const tokenNew = await getNewToken(genericUsers);
  return tokenNew;
}

//Method to get a new token
export async function getNewToken(userApp) {
  //console.log("Trying to get new token");
  //console.log("UserApp", userApp);

  //Getting token from API
  const response = await fetch(URL_API_TOKEN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userApp[0].user,
      password: userApp[0].password,
    }),
  });
  //console.log("response", response);
  const responseJson = await response.json();
  console.log("data", responseJson);
  if (responseJson.status === 200) {
    console.log("Token", responseJson?.data?.token);
    return responseJson?.data?.token;
  } else {
    throw new Error("Error getting token");
  }
}
