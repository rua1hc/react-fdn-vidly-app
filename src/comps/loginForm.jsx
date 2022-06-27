import React, { Component } from "react";

class loginForm extends Component {
    // state = {  }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submit preventDefault");
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
                            id="password"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );

        // return (
        //     <div>
        //     </div>
        // );
    }
}

export default loginForm;
