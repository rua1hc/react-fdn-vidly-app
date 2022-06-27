import React, { Component } from "react";
import Input from "./common/input";

class loginForm extends Component {
    state = {
        account: {
            username: "",
            password: "",
        },
    };

    // username = React.createRef();
    // componentDidMount() {
    //     this.username.current.focus();
    // }

    handleSubmit = (e) => {
        e.preventDefault();

        // const username = document.getElementById("username").value;
        const username = this.username.current.value;

        console.log("Submit preventDefault");
    };

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
                             // ref={this.username}
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
