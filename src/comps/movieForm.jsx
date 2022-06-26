import React, { Component } from "react";

class MovieForm extends Component {
    // state = {  }

    handleSave = () => {
        this.props.history.push("/movies");
        // console.log("Save clicked-params:", this.props.match.params);
    };

    render() {
        const { match, history } = this.props;

        return (
            <div>
                <h1>Movie Form - {match.params.id}</h1>
                <button className=" btn btn-primary" onClick={this.handleSave}>
                    Save
                </button>
                <button
                    className=" btn btn-primary m-1"
                    onClick={() => history.push("/movies")}
                >
                    Save1
                </button>
            </div>
        );
    }
}

export default MovieForm;
