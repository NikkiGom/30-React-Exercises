import React from 'react';

export default class GoogleMap extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            map: null
        }

    }

    componentDidMount() {
        this.setState({map: new google.maps.Map(this.refs.map, {
                zoom: 15, 
                center: {
                    lat: this.props.lat,
                    lng: this.props.long
                }
            })
        })
    }

    render() {
        return(
            <div className="google-map" ref="map"></div>
        );
    }

    componentDidUpdate() {
        map: new google.maps.Map(this.refs.map, {
            zoom: 15, 
            center: {
                lat: this.props.lat,
                lng: this.props.long
            }
        })
    }
}


