import http from "./httpService";
import config from "../config.json";

async function getGenres() {
    const { data: genres } = await http.get(config.genres);
    return genres;
}

const exportedObject = {
    getGenres,
};

export default exportedObject;
