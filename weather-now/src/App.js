import React from "react";

//Import de Componentes del App
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "b9599d5a4aa62cca7db1e92ec0f4a5a9";

class App extends React.Component{
    getWeather =async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data);
    }
    render(){
        return(
            <div>
                <Titles />
                <Form getWeather={this.getWeather} />
                <Weather />
            </div>
        );
    }
};

export default App;
