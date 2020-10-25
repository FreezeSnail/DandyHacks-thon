import React from 'react'
import { BBTComp } from './bbtComponent'
import { genBBT } from '../../bbt-selector/bbtSelector'
import { DropDownComp } from './dropDownComp'
import { WeatherComp } from './weatherComp'

export class Selector extends React.Component {
    state = {
        weatherState : {
            areaChosen: false,
            zipcode: 0
        },
        moodState : {
            mood: "noneT",
            options: [
                "happy",
                "sad",
                "envious",
            ],
        },
        bbtState : {
            currentBBT: null,
            bbtPresented: false,
        }
    };

    updateMood(event) {
        let mood = (event.target.value);
        this.state.moodState.mood = mood;
        this.setState({mood: mood});

        console.log(this.state.moodState.mood);
    }

    findBBT() {
        console.log("finding bbt")

        let bbt = genBBT();

        this.state.bbtState.currentBBT = bbt;
        this.state.bbtState.bbtPresented = true;
        this.setState({bbtPresented: true})
    }

    change
    updateLocation(evt) {
        //call the weather api and do stuff
        //console.log("parent updating loc");
        const zip = evt.target.value;
        if(zip.length === 5){


            this.state.weatherState.zipcode =  zip;
            this.state.weatherState.areaChosen = true;

            this.setState({zipcode: zip});
            console.log("a zip");
            console.log(this.state.zipcode);
        }
        else{

            this.state.weatherState.zipcode =  0;
            this.state.weatherState.areaChosen = false;

            this.setState({zipcode: zip});
 
            console.log("not a zip");
        }
        
    }

    render() {
        return (
            <div className="body">
                <DropDownComp 
                    moodProps = {this.state.moodState} 
                    updateMood={this.updateMood.bind(this)}/>
                <WeatherComp 
                    weatherProps={this.state.weatherState} 
                    updateLocation={this.updateLocation.bind(this)}/>
                <BBTComp 
                    BBTProps={this.state.bbtState} 
                    findBBT={this.findBBT.bind(this)}/>

            </div>
        );
    }
    
}