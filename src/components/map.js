import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
const mapStyles = {
    margin: '0',
    padding: '0',
    width: '500px',
    height: '400px',
};
export class MapContainer extends React.Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={17}
                style={mapStyles}
                initialCenter={{ lat: 29.758668, lng: -95.364646 }}

            >
                <Marker position={{ lat: 29.758668, lng: -95.364646 }} />
            </Map>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_MAPS_STATIC_API_KEY
})(MapContainer)

