import React from "react";
import Joi from "joi-browser";

import Form from "./common/form";

import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";

class MovieForm extends Form {
    state = {
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: "",
        },
        selectGenre: "",
        errors: {},
        genres: [],
    };

    componentDidMount() {
        const genres = [...getGenres()];
        this.setState({ genres });

        if (this.props.match.params.id === "new") return;

        const movie = getMovie(this.props.match.params.id);
        if (!movie) return this.props.history.replace("/not-found");

        this.setState({ data: this.mapToViewModel(movie) });
    }

    mapToViewModel(movie) {
        return {
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate,
        };
    }

    schema = {
        title: Joi.string().required().label("Title"),
        genreId: Joi.string().required().label("Genre"),
        numberInStock: Joi.number()
            .integer()
            .min(0)
            .required()
            .label("Number in Stock"),
        dailyRentalRate: Joi.number().min(0).max(10).required().label("Rate"),
    };

    handleSave = () => {
        this.props.history.push("/movies");
        // console.log("Save clicked-params:", this.props.match.params);
    };

    doSubmit = () => {
        saveMovie(this.state.data);
        this.props.history.push("/movies");
    };

    render() {
        const { match, history } = this.props;

        return (
            <div>
                <h1>Movie Form - {match.params.id}</h1>

                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}

                    {this.renderSelect("genreId", "Genre", this.state.genres)}

                    {this.renderInput("numberInStock", "Number in Stock")}
                    {this.renderInput("dailyRentalRate", "Rate")}

                    {/* <button
                        className=" btn btn-primary"
                        onClick={this.handleSave}
                        // onClick1={() => history.push("/movies")}
                    >
                        Save
                    </button> */}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}

export default MovieForm;
