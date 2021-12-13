const apiKey = process.env.REACT_APP_OMDB_KEY;
const OMDB_ENDPOINT = 'https://www.omdbapi.com/?apikey=${apiKey}&'

const getMoviesBySearchTerm = async (searchTerm, searchType) => {
    const endpointURL = '${OMDB_ENDPOINT}s=${searchTerm}${searchType?"&type=" + searchType : "" }';
    const getMovieDetailsById = async (movieID) => {
        const endpointURL = '${OMDB_ENDPOINT}i=${movieID}';
        const data = await fetch(endpointURL);
        const movie = await data.json();

        return movie;
    }
}

export {getMoviesBySearchTerm, getMovieDetailsById};