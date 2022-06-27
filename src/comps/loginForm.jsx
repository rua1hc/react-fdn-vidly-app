import React, { Component } from "react";
import Input from "./common/input";

class loginForm extends Component {
    state = {
        account: {
            username: "",
            password: "",
        },
        errors: {},
    };

    // React_username = React.createRef();
    // componentDidMount() {
    //     this.React_username.current.focus();
    // }

    validate = () => {
        const { account } = this.state;

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

        const errors = this.validate();
        console.log(errors);
        this.setState({ errors });
        if (errors) return;

        console.log("Submit preventDefault");
    };

    // handleChange = (e) => {
    handleChange = ({ currentTarget: input }) => {
        let account = { ...this.state.account };
        // account.username = e.currentTarget.value;
        account[input.name] = input.value;
        this.setState({ account });
    };

    render() {
        const { account } = this.state;
        return (
            <div className="container">
                <h1>Login</h1>

                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="username"
                        label="Username"
                        value={account.username}
                        onChange={this.handleChange}
                    />
                    <Input
                        name="password"
                        label="Password"
                        value={account.password}
                        onChange={this.handleChange}
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
