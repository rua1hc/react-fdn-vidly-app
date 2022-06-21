import React, { Component } from "react";

import { getMovies } from "../services/fakeMovieService";

import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate, paginate2 } from "./utils/paginate";

class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1,
    };

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

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies } = this.state;

        const movies = paginate(allMovies, currentPage, pageSize);
        // const movies2 = paginate2(allMovies, currentPage, pageSize);

        if (count === 0) return <p>No movies found!</p>;

        return (
            <React.Fragment>
                <p>Showing {count} movies in DB.</p>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    {/* <button type="button" class="btn btn-dark"> */}
                                    <Like
                                        onClick={() => this.handleLike(movie)}
                                        liked={movie.liked}
                                    />
                                    {/* </button> */}
                                </td>
                                <td>
                                    <button
                                        onClick={() => this.handleDelete(movie)}
                                        className="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Pagination
                    totalItems={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />
            </React.Fragment>
        );
    }
}

export default Movies;
