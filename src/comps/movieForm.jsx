import React, { Component } from "react";

class MovieForm extends Component {
    // state = {  }

    handleSave = () => {
        this.props.history.push("/movies");
        // console.log("Save clicked-params:", this.props.match.params);
    };

    render() {
        return (
            <div>
                <h1>Movie Form - {this.props.match.params.id}</h1>
                <button className=" btn btn-primary" onClick={this.handleSave}>
                    Save
                </button>
            </div>
        );
    }
}

export default MovieForm;
