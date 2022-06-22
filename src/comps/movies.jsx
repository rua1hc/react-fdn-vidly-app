import React, { Component } from "react";

import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

// import Like from "./common/like";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate, paginate2 } from "./utils/paginate";

import MoviesTable from "./moviesTable";

class Movies extends Component {
    state = {
        movies: [],
        pageSize: 4,
        currentPage: 1,

        genres: [],
    };

    componentDidMount() {
        const genres = [{ name: "All Genres" }, ...getGenres()];
        this.setState({ movies: getMovies(), genres });
    }

    handleDelete = (movie) => {
        let movies = this.state.movies.filter((m) => m._id !== movie._id);
        this.setState({ movies });
    };

    handleLike = (movie) => {
        let movies = [...this.state.movies];
        let movieID = movies.indexOf(movie);
        movies[movieID] = { ...movie };
        movies[movieID].liked = !movies[movieID].liked;
        this.setState({ movies });
        // console.log("like clicked");
    };

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
        // console.log(page);
    };

    handleGenreSelect = (genre) => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
        // console.log(genre);
    };

    handleSort = (path) => {
        console.log(path);
    };

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies } = this.state;
        const { genres, selectedGenre } = this.state;

        const filtered =
            selectedGenre && selectedGenre._id
                ? allMovies.filter(
                      (movie) => movie.genre._id === selectedGenre._id
                  )
                : allMovies;

        const movies = paginate(filtered, currentPage, pageSize);
        // const movies2 = paginate2(allMovies, currentPage, pageSize);

        if (count === 0) return <p>No movies found!</p>;

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={genres}
                        selectedItem={selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {filtered.length} movies in DB.</p>

                    <MoviesTable
                        movies={movies}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />

                    <Pagination
                        totalItems={filtered.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;
