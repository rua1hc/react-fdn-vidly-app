import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getMovies } from "../services/fakeMovieService";
// import { getGenres } from "../services/fakeGenreService";
import { getGenres } from "../services/genreService";

// import Like from "./common/like";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate, paginate2 } from "./utils/paginate";

import SearchBox from "./common/searchBox";
import MoviesTable from "./moviesTable";

import _ from "lodash";

class Movies extends Component {
    state = {
        movies: [],
        pageSize: 4,
        currentPage: 1,

        selectedGenre: null,
        sortColumn: { path: "title", order: "asc" },
        searchQuery: "",

        genres: [],
    };

    async componentDidMount() {
        const { data } = await getGenres();

        // const genres = [{ name: "All Genres" }, ...getGenres()];
        const genres = [{ name: "All Genres" }, ...data];
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
        // console.log(movieID);
    };

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
        // console.log(page);
    };

    handleGenreSelect = (genre) => {
        this.setState({
            selectedGenre: genre,
            currentPage: 1,
            searchQuery: "",
        });
        // console.log(genre);
    };

    handleSearch = (query) => {
        this.setState({
            searchQuery: query,
            selectedGenre: null,
            currentPage: 1,
        });
    };

    handleSort = (sortColumn) => {
        this.setState({ sortColumn });
        // console.log(path);
    };

    getPagedData = () => {
        const {
            pageSize,
            currentPage,
            movies: allMovies,
            selectedGenre,
            searchQuery,
            sortColumn,
        } = this.state;

        const filterOrQuery =
            selectedGenre && selectedGenre._id
                ? allMovies.filter(
                      (movie) => movie.genre._id === selectedGenre._id
                  )
                : allMovies.filter((movie) =>
                      movie.title
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                  );

        const sorted = _.orderBy(
            filterOrQuery,
            [sortColumn.path],
            [sortColumn.order]
        );

        const movies = paginate(sorted, currentPage, pageSize);
        paginate2(allMovies, currentPage, pageSize);

        return { totalCount: filterOrQuery.length, data: movies };
    };

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, genres, selectedGenre, sortColumn } =
            this.state;

        let { totalCount, data: movies } = this.getPagedData();

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
                    <Link className="btn btn-primary my-3" to="/movies/new">
                        New Movie
                    </Link>

                    <p>Showing {totalCount} movies in DB.</p>

                    <SearchBox
                        value={this.state.searchQuery}
                        onChange={this.handleSearch}
                    />

                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />

                    <Pagination
                        totalItems={totalCount}
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
