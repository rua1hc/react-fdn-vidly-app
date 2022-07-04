import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import Form from "./common/form";
// import Input from "./common/input";

import * as authService from "../services/authService";

class LoginForm extends Form {
    state = {
        data: {
            username: "",
            password: "",
        },
        errors: {},
    };

    schema = {
        username: Joi.string().email().required().label("Username email"),
        password: Joi.string().required().label("Password"),
    };

    // React_username = React.createRef();
    // componentDidMount() {
    //     this.React_username.current.focus();
    // }

    // validateInputs = () => {
    //     const { data } = this.state;
    //     const options = { abortEarly: false };

    //     let { error } = Joi.validate(data, this.schema, options);
    //     // console.log(result);
    //     if (!error) return null;

    //     let errors = {};
    //     for (let item of error.details) errors[item.path[0]] = item.message;

    //     return errors;

    //     // if (data.username.trim() === "") {
    //     //     errors.username = "Username is required!";
    //     // }
    //     // if (data.password.trim() === "") {
    //     //     errors.password = "Password is required!";
    //     // }
    //     // return Object.keys(errors).length === 0 ? null : errors;
    // };

    // validateProperty = ({ name, value }) => {
    //     // let field = {};
    //     // field[name] = value;

    //     const inputField = { [name]: value };
    //     const schema = { [name]: this.schema[name] };
    //     // const options = { abortEarly: false };
    //     const { error } = Joi.validate(inputField, schema);
    //     return error ? error.details[0].message : null;
    //     // if (!result.error) return null;
    //     // return result.error.details[0].message;

    //     // if (name === "username") {
    //     //     if (value.trim() === "") return "Username is required!!";
    //     //     //...
    //     // }
    //     // if (name === "password") {
    //     //     if (value.trim() === "") return "Password is required!!";
    //     //     //...
    //     // }
    // };

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     // const DOM_username = document.getElementById("username").value;
    //     // const username = this.React_username.current.value;

    //     const errors = this.validateInputs();
    //     this.setState({ errors: errors || {} });
    //     if (errors) return;

    //     this.doSubmit();
    // };

    doSubmit = async () => {
        const { username, password } = this.state.data;

        try {
            const { data } = await authService.login(username, password);
            localStorage.setItem("token", data);
            this.props.history.push("/");
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
                // toast.error("Invalid username or password!");
            }
        }

        console.log("Submit preventDefault");
    };

    // // handleChange = (e) => {
    // handleChange = ({ currentTarget: input }) => {
    //     let errors = { ...this.state.errors };
    //     let errorMessage = this.validateProperty(input);
    //     if (errorMessage) errors[input.name] = errorMessage;
    //     else delete errors[input.name];

    //     let data = { ...this.state.data };
    //     // data.username = e.currentTarget.value;
    //     data[input.name] = input.value;
    //     this.setState({ data, errors });
    // };

    render() {
        // const { data, errors } = this.state;

        return (
            <div className="container">
                <h1>Login</h1>

                <form onSubmit={this.handleSubmit}>
                    {/* <Input
                        name="username"
                        label="Username"
                        value={data.username}
                        onChange={this.handleChange}
                        error={errors.username}
                    /> */}
                    {this.renderInput("username", "Username email")}
                    {/* <Input
                        name="password"
                        label="Password"
                        value={data.password}
                        onChange={this.handleChange}
                        error={errors.password}
                        /> */}
                    {this.renderInput("password", "Password", "password")}

                    {/* <div className="mb-3">
                         <label htmlFor="username" className="form-label">
                             Username
                         </label>
                         <input
                             value={data.username}
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
                            value={data.password}
                            onChange={this.handleChange}
                            name="password"
                            autoFocus
                            id="password"
                            type="text"
                            className="form-control"
                        />
                    </div> */}

                    {/* <button
                        disabled={this.validateInputs()}
                        className="btn btn-primary"
                    >
                        Login
                    </button> */}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

export default LoginForm;
