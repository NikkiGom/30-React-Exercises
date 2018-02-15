import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.js';
import GoogleMap from '../components/google_map.js';

class WeatherList extends React.Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;
 
        return(
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={ temps } color="white" units="K"/></td>
                <td><Chart data={ pressure } color="white" units="hpa"/></td>
                <td><Chart data={ humidity } color="white" units="%"/></td>
            </tr>
        )
    }
    render() {
        return(
           <table>
                <thead>
                    <tr>
                        <th style={{width: '250px'}}>City</th>
                        <th style={{width: '250px'}}>Temperature (K)</th>
                        <th style={{width: '250px'}}>Pressure (hpa)</th>
                        <th style={{width: '250px'}}>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }
                </tbody>
           </table>
        );
    }
}

function mapStateToProps({ weather }) { // { weather } === { state.weather }
    return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);