import React, { Component } from "react";

import Like from "./common/like";

const MoviesTable = (props) => {
    const { movies, onLike, onDelete } = props;

    return (
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
                                onClick={() => onLike(movie)}
                                liked={movie.liked}
                            />
                            {/* </button> */}
                        </td>
                        <td>
                            <button
                                onClick={() => onDelete(movie)}
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MoviesTable;
