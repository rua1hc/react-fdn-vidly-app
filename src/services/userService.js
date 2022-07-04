import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/users";

export function register(user) {
    // const {username:email, password, name} = user;
    return http.post(apiEndpoint, {
        email: user.username,
        password: user.password,
        name: user.name,
    });
}
