import React, { Component } from "react";

import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

class MoviesTable extends Component {
    columns = [
        { path: "title", label: "Title" },
        { path: "genre.name", label: "Genre" },
        { path: "numberInStock", label: "Stock" },
        { path: "dailyRentalRate", label: "Rate" },
        {
            key: "like",
            content: (movie) => (
                <Like
                    onClick={() => this.props.onLike(movie)}
                    liked={movie.liked}
                />
            ),
        },
        {
            key: "delete",
            content: (movie) => (
                <button
                    onClick={() => this.props.onDelete(movie)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            ),
        },
    ];

    render() {
        const { movies, onLike, onDelete, onSort, sortColumn } = this.props;

        return (
            <table className="table">
                <TableHeader
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />

                <TableBody
                    data={movies}
                    columns={this.columns}
                    onLike={onLike}
                    onDelete={onDelete}
                />
            </table>
        );

        // return (
        //     <table className="table">
        //         <thead>
        //             <tr>
        //                 <th onClick={() => this.raiseSort("title")}>Title</th>
        //                 <th onClick={() => this.raiseSort("genre.name")}>
        //                     Genre
        //                 </th>
        //                 <th onClick={() => this.raiseSort("numberInStock")}>
        //                     Stock
        //                 </th>
        //                 <th onClick={() => this.raiseSort("dailyRentalRate")}>
        //                     Rate
        //                 </th>
        //                 <th></th>
        //                 <th></th>
        //             </tr>
        //         </thead>

        //         <tbody>
        //             {movies.map((movie) => (
        //                 <tr key={movie._id}>
        //                     <td>{movie.title}</td>
        //                     <td>{movie.genre.name}</td>
        //                     <td>{movie.numberInStock}</td>
        //                     <td>{movie.dailyRentalRate}</td>
        //                     <td>
        //                         {/* <button type="button" class="btn btn-dark"> */}
        //                         <Like
        //                             onClick={() => onLike(movie)}
        //                             liked={movie.liked}
        //                         />
        //                         {/* </button> */}
        //                     </td>
        //                     <td>
        //                         <button
        //                             onClick={() => onDelete(movie)}
        //                             className="btn btn-danger"
        //                         >
        //                             Delete
        //                         </button>
        //                     </td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // );
    }
}

export default MoviesTable;
