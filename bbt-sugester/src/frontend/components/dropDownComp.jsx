import React from 'react';
import './components.sass';

export class DropDownComp extends React.Component {
    state = {
        mood: "",
        options: [
            "happy",
            "sad",
            
        ],
    };

    genDropDownOptions() {
        let options = this.state.options.map(function (mood, i) {
             return <option key={i}>{mood}</option>
        }) 

        return options;

        
    }

    change(event) {
        this.setState({mood: event.target.value});
        console.log("current selected mood: ", this.state.mood);
    }

    render() {
        return (
            <div>
                <div class="zipcodeBox">
                    <label for="mood">Choose Mood </label>
                    <select name="mood" id="mood" onChange={this.change.bind(this)} className="zipcodeBox">
                        {this.genDropDownOptions()}
                    </select>
                </div>
            </div>
        );
    }
}