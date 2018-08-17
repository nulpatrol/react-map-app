import React, { Component } from 'react';
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/';

class App extends Component {
    state = {
        lat: 50.068501,
        lng: 19.947501,
        zoom: 6,
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        const markers = [
            { 
                position: [this.state.lat, this.state.lng], 
                title: 'Railway', 
            },
            {
                position: [50.072112, 19.93144], 
                title: 'Hotel', 
            },
            {
                position: [50.054053, 19.935413],
                title() { return '<h1>2<h1>' },
            },
            {
                position: [50.065478, 19.941658],
                title: 'Barbakan',
            },
            {
                position: [50.061480, 19.937167],
                title: 'Rinok',
            },
            {
                position: [50.051787, 19.948916],
                title: 'Gruba Bula',
            }
        ];

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div>
                    <Map center={position} zoom={this.state.zoom}>
                        <TileLayer
                            attribution=""
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <MarkerClusterGroup showCoverageOnHover={false}>
                            {markers.map((marker) => {
                                return (
                                    <Marker position={marker.position}>
                                        <Popup>
                                            { (typeof marker.title !== 'string') ?  marker.title() : marker.title }
                                        </Popup>
                                    </Marker>
                                );
                            })}
                        </MarkerClusterGroup>
                    </Map>
                </div>
            </div>
        );
    }
}

export default App;
