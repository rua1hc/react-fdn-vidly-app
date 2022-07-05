import React, { Component } from "react";
import * as auth from "../services/authService";

class Logout extends Component {
    // state = {  }

    componentDidMount() {
        // localStorage.removeItem("token");
        auth.logout();
        window.location = "/";
    }

    render() {
        return null;
    }
}

export default Logout;
