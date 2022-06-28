import React, { Component } from "react";
import Joi from "joi-browser";

import Input from "./common/input";

class loginForm extends Component {
    state = {
        account: {
            username: "",
            password: "",
        },
        errors: {},
    };

    schema = {
        username: Joi.string().required(),
        password: Joi.string().required(),
    };

    // React_username = React.createRef();
    // componentDidMount() {
    //     this.React_username.current.focus();
    // }

    validateInputs = () => {
        const { account } = this.state;

        let result = Joi.validate(account, this.schema, { abortEarly: false });
        console.log(result);

        let errors = {};
        if (account.username.trim() === "") {
            errors.username = "Username is required!";
        }
        if (account.password.trim() === "") {
            errors.password = "Password is required!";
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = (e) => {
        e.preventDefault();

        // const DOM_username = document.getElementById("username").value;
        // const username = this.React_username.current.value;

        const errors = this.validateInputs();
        this.setState({ errors: errors || {} });
        if (errors) return;

        console.log("Submit preventDefault");
    };

    validateProperty = ({ name, value }) => {
        if (name === "username") {
            if (value.trim() === "") return "Username is required!!";
            //...
        }
        if (name === "password") {
            if (value.trim() === "") return "Password is required!!";
            //...
        }
    };

    // handleChange = (e) => {
    handleChange = ({ currentTarget: input }) => {
        let errors = { ...this.state.errors };
        let errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        let account = { ...this.state.account };
        // account.username = e.currentTarget.value;
        account[input.name] = input.value;
        this.setState({ account, errors });
    };

    render() {
        const { account, errors } = this.state;
        return (
            <div className="container">
                <h1>Login</h1>

                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="username"
                        label="Username"
                        value={account.username}
                        onChange={this.handleChange}
                        error={errors.username}
                    />
                    <Input
                        name="password"
                        label="Password"
                        value={account.password}
                        onChange={this.handleChange}
                        error={errors.password}
                    />
                    {/* <div className="mb-3">
                         <label htmlFor="username" className="form-label">
                             Username
                         </label>
                         <input
                             value={account.username}
                             onChange={this.handleChange}
                             name="username"
                             // ref={this.React_username}
                             id="username"
                             type="text"
                             className="form-control"
                         />
                     </div> */}
                    {/* <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            value={account.password}
                            onChange={this.handleChange}
                            name="password"
                            autoFocus
                            id="password"
                            type="text"
                            className="form-control"
                        />
                    </div> */}
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default loginForm;
