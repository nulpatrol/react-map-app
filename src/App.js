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
        value: '',
    }

    constructor(props) {
        super(props);

        this.state.markers = [
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
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.state.markers.push({
            position: [50.072112, parseFloat(this.state.value)],
            title: 'New',
        });
        this.setState({ value: '' });
        event.preventDefault();
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="container">
                    <div className="left-panel">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
                        </form>
                    </div>
                    <div className="map">
                        <Map center={position} zoom={this.state.zoom} maxZoom="15">
                        <TileLayer
                            attribution=""
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <MarkerClusterGroup showCoverageOnHover={false}>
                            {this.state.markers.map((marker) => {
                                return (
                                    <Marker key={marker.title} position={marker.position}>
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
            </div>
        );
    }
}

export default App;
