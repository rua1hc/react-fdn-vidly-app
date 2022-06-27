import React, { Component } from "react";

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

    handleChange = (e) => {
        let account = { ...this.state.account };
        account.username = e.currentTarget.value;
        this.setState({ account });
    };

    render() {
        return (
            <div className="container">
                <h1>Login</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            value={this.state.account.username}
                            onChange={this.handleChange}
                            // ref={this.username}
                            id="username"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            autoFocus
                            id="password"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default loginForm;
