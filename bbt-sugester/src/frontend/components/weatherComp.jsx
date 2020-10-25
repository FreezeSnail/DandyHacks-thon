import React from 'react';
import './components.sass';

export class WeatherComp extends React.Component {
    
    constructor(props){
        super(props);
    }

    genDropDownOptionsWeather() {
        let options = this.props.weatherProps.options.map(function (weather, i) {
             return <option key={i} selected={weather}>{weather}</option>
        }) 

        return options;
    }

     render() {
        return (   
            <div>
                <div class="weatherBox">
                    <label for="weather"> Select current weather: </label>
                    <select 
                        name="weather" 
                        id="weather"
                        onChange={this.props.updateWeather} 
                        className="weatherBox">
                            <option key='0'>   </option>
                            {this.genDropDownOptionsWeather()}
                    </select>
                </div>
            </div>
        );
    }
}
