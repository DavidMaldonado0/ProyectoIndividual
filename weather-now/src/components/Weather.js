import React from "react";

class Weather extends React.Component {
    render() {
        return(
            <div className="weather__info"><br/>
               { this.props.city && this.props.country && <p>Ubicación: {this.props.city} / {this.props.country}</p>}
               { this.props.temperature && <p>Temperatura: {this.props.temperature} ºc</p>}
               { this.props.humidity && <p>Humedad: {this.props.humidity}%</p>}
               { this.props.description && <p>Condiciones: {this.props.description}</p>}
               { this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
};

export default Weather;
