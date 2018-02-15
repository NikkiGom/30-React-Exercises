import React from 'react';

import SearchBar from '../containers/search_bar.js';
import WeatherList from '../containers/weather_list.js';

export default class App extends React.Component {
    render() {
        return(
            <div className="container">
                <div style={{marginBottom: '20px'}}>Five Day Weather Forecast</div>
                <SearchBar />
                <WeatherList />
            </div>
        );
    }
}