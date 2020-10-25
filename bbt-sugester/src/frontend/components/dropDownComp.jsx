import React from 'react';
import './components.sass';

export class DropDownComp extends React.Component {
    
    constructor(props) {
        super(props);
    }

    genDropDownOptionsMood() {
        let options = this.props.moodProps.options.map(function (mood, i) {
             return <option key={i} selected={mood}>{mood}</option>
        }) 

        return options;
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
                <h1>Welcome To Bubble Tea Randomizer!</h1>
                <h4>You can either generate a random bubble tea flavor based on your mood, the weather, or just random! </h4>
                <div class="moodBox">
                    <label for="mood"> Select your mood: </label>
                    <select 
                        name="mood" 
                        id="mood" 
                        onChange={this.props.updateMood} 
                        className="moodBox">
                            <option key='0'>   </option>
                            {this.genDropDownOptionsMood()}
                    </select>
                </div>
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
