import jwtDecode from "jwt-decode";

import config from "../config.json";
import http from "./httpService";

const apiEndpoint = config.apiUrl + "/auth";
const tokenKey = "token";

//====================
//
http.setJwt(getJwt());
//
//====================

export async function login(email, password) {
    const { data: jwt } = await http.post(apiEndpoint, { email, password });
    localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
        // this.setState({ user });
    } catch (ex) {
        //anonymous user
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

const exportedObject = {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    // getJwt,
};

export default exportedObject;
