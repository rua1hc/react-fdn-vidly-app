import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/users";

export function registerUser(user) {
    return http.post(apiEndpoint, user);
}
