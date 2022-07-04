import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import Form from "./common/form";
import { register } from "../services/userService";

class RegisterForm extends Form {
    state = {
        data: {
            username: "",
            password: "",
            name: "",
        },
        errors: {},
    };

    schema = {
        username: Joi.string().email().required().label("Email"),
        password: Joi.string().min(5).required().label("Password"),
        name: Joi.string().required().label("Username"),
    };

    doSubmit = async () => {
        const user = { ...this.state.data };

        try {
            const { headers } = await register(user);
            localStorage.setItem("token", headers["x-auth-token"]);
            // this.props.history.push("/");
            window.location = "/";
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
                // toast.error("This user has already registered.");
            }
        }

        // this.state.history.push("/login");
        console.log("Submit preventDefault");
    };

    render() {
        return (
            <div className="container">
                <h1>Register</h1>

                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}

export default RegisterForm;
