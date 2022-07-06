import React, { Component } from "react";
import { Link } from "react-router-dom";

import Like from "./common/like";
import Table from "./common/table";
// import TableHeader from "./common/tableHeader";
// import TableBody from "./common/tableBody";

import auth from "../services/authService";

class MoviesTable extends Component {
    columns = [
        {
            path: "title",
            label: "Title",
            content: (movie) => (
                <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
            ),
        },
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
    ];

    deleteCol = {
        key: "delete",
        content: (movie) => (
            // auth.getCurrentUser() && (
            <button
                onClick={() => this.props.onDelete(movie)}
                className="btn btn-danger"
            >
                Delete
            </button>
        ),
    };

    constructor() {
        super();
        const user = auth.getCurrentUser();
        // if (user && user.isAdmin) {
        if (user) {
            this.columns.push(this.deleteCol);
        }
    }

    render() {
        const { movies, onLike, onDelete, onSort, sortColumn, user } =
            this.props;

        return (
            <Table
                columns={this.columns}
                sortColumn={sortColumn}
                onSort={onSort}
                data={movies}
                onLike={onLike}
                onDelete={onDelete}
                user={user}
            />
            // <table className="table">
            //     <TableHeader
            //         columns={this.columns}
            //         sortColumn={sortColumn}
            //         onSort={onSort}
            //     />

            //     <TableBody
            //         data={movies}
            //         columns={this.columns}
            //         onLike={onLike}
            //         onDelete={onDelete}
            //     />
            // </table>
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
