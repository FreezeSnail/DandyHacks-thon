import React from 'react';

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
                <p>Options for mood</p>
                <div>
                    <label for="mood">Choose Mood </label>
                    <select name="mood" id="mood" onChange={this.change.bind(this)} >
                        {this.genDropDownOptions()}
                    </select>
                </div>
            </div>
        );
    }
}