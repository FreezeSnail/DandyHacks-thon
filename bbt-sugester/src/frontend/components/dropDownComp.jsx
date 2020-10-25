import React from 'react';
import './components.sass';

export class DropDownComp extends React.Component {
    
    constructor(props) {
        super(props);
    }

    genDropDownOptions() {
        let options = this.props.moodProps.options.map(function (mood, i) {
             return <option key={i} selected={mood}>{mood}</option>
        }) 

        return options;
    }

    render() {
        return (
            <div>
                <div class="zipcodeBox">
                    <label for="mood">Choose Mood </label>
                    <select 
                        name="mood" 
                        id="mood" 
                        onChange={this.props.updateMood} 
                        className="zipcodeBox">
                            <option key='0'>
                                choose a mood 
                            </option>
                            {this.genDropDownOptions()}
                    </select>
                </div>
            </div>
        );
    }
}