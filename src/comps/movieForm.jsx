import React from "react";
import Joi from "joi-browser";

import Form from "./common/form";

// import { getGenres } from "../services/fakeGenreService";
import { getGenres } from "../services/genreService";
// import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getMovie, saveMovie } from "../services/movieService";

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

    async populateGenre() {
        // const genres = getGenres();
        const { data: genres } = await getGenres();
        this.setState({ genres });
    }

    populateMovie = async () => {
        try {
            const moveiId = this.props.match.params.id;
            if (moveiId === "new") return;

            const { data: movie } = await getMovie(moveiId);
            this.setState({ data: this.mapToViewModel(movie) });
        } catch (ex) {
            // if (!movie) return this.props.history.replace("/not-found");
            if (ex.response && ex.response.status === 404)
                return this.props.history.replace("/not-found");
        }
    };

    async componentDidMount() {
        await this.populateGenre();
        await this.populateMovie();
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

    doSubmit = async () => {
        await saveMovie(this.state.data);
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
