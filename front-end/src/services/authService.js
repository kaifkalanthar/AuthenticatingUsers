import http from "./httpService";
import apiUrl from "../config.json";

const apiEndpoint = apiUrl + "/auth";

function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}

export default login;


