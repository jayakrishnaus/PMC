import * as url from "@/helpers/url_helper.js";
import axiosApi from "@/helpers/api_helper";
import { isLocalHost } from "@/helpers";

export async function getUserDetails({ commit }) {
  if (isLocalHost()) {
    localStorage.setItem(
      "osmUser",
      JSON.stringify({ scopes: ["openid","osm!t113149.osmAdmin"], email: "vasanth.gopa@sap.com", authenticated: true })
    );

    return commit("setUserDetails", {
      firstname: "Vasanth",
      lastname: "Gopa",
      email: "vasanth.gopa@sap.com",
      name: "vasanth.gopa@sap.com",
      scopes: [
        "openid",
        "osm!t113149.osmAdmin"
      ],
      displayName: "Vasanth Gopa (I543345)"
    });
  } else {
    console.log("Reached else condition", url.GET_USER_DATA)
    return await axiosApi
      .get('https://osm.cfapps.us10.hana.ondemand.com/api/v1/user/currentUser')
      .then((response) => {
        commit("setUserDetails", response.data);
        console.log("Inside Else Condition", response)
        localStorage.setItem(
          "osmUser",
          JSON.stringify({ scopes: response.data.scopes, email: response.data.email, authenticated: true })
        );
        return response;
      })
      .catch((err) => err);
  }
}

export async function getUserSessionExpired({ commit }, payload) {
  return commit("setUserSessionExpired", payload);
}