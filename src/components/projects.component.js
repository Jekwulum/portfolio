import React from "react";
import './projects.component.css';


const Projects = () => {
    return(
        <div className="projects">
            <a href="https://cj-weather-app.netlify.app/" target="_blank">
                <div className="weather-app">
                    <img src={require("../utils/img/weather-icon.ico")} alt="" />
                    <div className="weather-texts">
                        <h2>Weather App</h2>
                        <p>
                            An application which shows the weather forecast in major cities, utilising the openweatherapi
                            with ReactJS as frontend and a flask backend. <br />
                            The app supports an email subscription service which delivers daily weather forecasts to subscribers.
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Projects;