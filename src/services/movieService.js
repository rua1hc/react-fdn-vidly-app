import http from "./httpService";
import config from "../config.json";

export function getMovies() {
    return http.get(config.movies);
}

export function deleteMovie(movieId) {
    http.delete(`${config.movies}/${movieId}`);
}
