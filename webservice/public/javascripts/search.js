import { api_key } from "./index.js";

const keyword = document.querySelector('#keyword')
const dataSec = document.querySelector('#searchResults');
const dataURL = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${keyword}&page=1&include_adult=false&region=US`;
let movieList = [];

async function getMovies(url) {
    const response = await fetch(url);
    if (response.ok) {
        movieList = await response.json();
        outputData(movieList)
    }
}


getMovies(dataURL)