import React from "react";

class Titles extends React.Component{
    render() {
        return(
          <div>
              <h1 className="title-container__title">Weather Now</h1>
              <p className="title-container__subtitle">Condiciones climaticas / Pronóstico del Clima. <br/>
                  Hecho por David Maldonado / Seminario de Software 2019
              </p>
          </div>  
        );
    }
};

export default Titles;