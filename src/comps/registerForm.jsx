import React from "react";
import Joi from "joi-browser";

import Form from "./common/form";

class RegisterForm extends Form {
    state = {
        data: {
            email: "",
            password: "",
            name: "",
        },
        errors: {},
    };

    schema = {
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().min(5).required().label("Password"),
        name: Joi.string().required().label("Username"),
    };

    doSubmit = () => {
        //call Ajax
        console.log("Submit preventDefault");
    };

    render() {
        return (
            <div className="container">
                <h1>Register</h1>

                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("email", "Email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}

export default RegisterForm;
