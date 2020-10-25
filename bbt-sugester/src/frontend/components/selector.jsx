import React from 'react'
import { BBTComp } from './bbtComponent'
import { genBBT } from '../../bbt-selector/bbtSelector'
import { DropDownComp } from './dropDownComp'
import { WeatherComp } from './weatherComp'

export class Selector extends React.Component {
  state = {
    weatherState: {
      weather: "noneT",
      options: [
        "clear",
        "sunny",
        "foggy",
        "cloudy",
        "rainy",
        "stormy",
        "tornadoes",
        "thunderstorms",
        "sandstorms",
        "windy",
        "hail",
        "snowy",
      ],
    },
    moodState: {
      mood: "noneT",
      options: [
        "happy",
        "cheerful",
        "excited",
        "energetic",
        "accomplished",
        "blissful",
        "loving",
        "optimistic",
        "proud",
        "calm",
        "relaxed",
        "hopeful",
        "terrified",
        "hungry",
        "sad",
        "mad",
        "envious",
        "exhausted",
        "cranky",
        "angry",
        "shocked",
        "moody",
        "drained",
        "annoyed",
        "discouraged",
        "overwhelmed",
        "suspicious",
      ],
    },
    bbtState: {
      currentBBT: null,
      bbtPresented: false,
    },
  };

  updateMood(event) {
    let mood = event.target.value;
    this.state.moodState.mood = mood;
    this.setState({ mood: mood });

    console.log(this.state.moodState.mood);
  }

  updateWeather(evt) {
    let weather = evt.target.value;
    this.state.weatherState.weather = weather;
    this.setState({ weather: weather });

    console.log(this.state.weatherState.weather);
  }

  findBBT() {
    console.log("finding bbt");

    let bbt = genBBT();

    this.state.bbtState.currentBBT = bbt;
    this.state.bbtState.bbtPresented = true;
    this.setState({ bbtPresented: true });
  }

  render() {
    return (
      <div className="body">
        <DropDownComp
          moodProps={this.state.moodState}
          updateMood={this.updateMood.bind(this)} value={this.state.mood}
        />
        <WeatherComp
          weatherProps={this.state.weatherState}
          updateWeather={this.updateWeather.bind(this)} value = {this.state.weather}
        />

        <BBTComp
          BBTProps={this.state.bbtState}
          findBBT={this.findBBT.bind(this)}
        />
      </div>
    );
  }
}
