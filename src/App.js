import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// import logo from './logo.svg';
import { ToastContainer } from "react-toastify";

import Movies from "./comps/movies";
import NavBar from "./comps/navBar";
import Customers from "./comps/customers";
import NotFound from "./comps/not-found";
import Rentals from "./comps/rentals";
import MovieForm from "./comps/movieForm";
import LoginForm from "./comps/loginForm";
import RegisterForm from "./comps/registerForm";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
    // state = {};

    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                <NavBar />
                <main className="container">
                    <Switch>
                        <Route path="/login" component={LoginForm} />
                        <Route path="/register" component={RegisterForm} />

                        {/* <Route path="/movies/new" render={(props)=><MovieForm {...props}/>} /> */}
                        {/* <Route path="/movies/new" component={MovieForm} /> */}
                        <Route path="/movies/:id" component={MovieForm} />
                        <Route path="/movies" component={Movies} />

                        <Route path="/customers" component={Customers} />
                        <Route path="/rentals" component={Rentals} />
                        <Route path="/not-found" component={NotFound} />

                        {/* <Route path="/" exact component={Movies} /> */}
                        <Redirect from="/" exact to="/movies" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

// function App() {
//     return (
//         <div className="App">
//           <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <p>
//               Edit <code>src/App.js</code> and save to reload.
//             </p>
//             <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn React
//             </a>
//           </header>
//         </div>
//     );
// }

export default App;
