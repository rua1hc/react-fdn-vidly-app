import React, { Component } from "react";

class loginForm extends Component {
    // state = {  }

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

        // return (
        //     <div>
        //     </div>
        // );
    }
}

export default loginForm;
