import axios from 'axios';

export const FETCH_GIPHS = 'FETCH_GIPHS'

export function fetchGiphs(value) {
    const api = "http://api.giphy.com/v1/gifs/search";
    const API_KEY = 'hdUk5buTTISSC29bx2DAXfDRCz6tkcrS';
    const url = `${api}?q=${value}&api_key=${API_KEY}&limit=5"`;
    const request = axios.get(url);

    return {
        type: FETCH_GIPHS,
        payload: request
    };
}
