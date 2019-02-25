import React from "react";

//Import de Componentes del App
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


class App extends React.Component{
    render(){
        return(
            <div>
                <Titles />
                <Form />
                <Weather />
            </div>
        );
    }
};

export default App;
