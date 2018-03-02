import axios from 'axios';
import {API_KEY} from '../keys.js';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    //request will now have a promised returned to it. 

    console.log('Request:', request)
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

//here, the promise is caught and the payload waits for the promise
//to resolve. only once it's resolved, is the payload sent to the reducers
