import React from 'react';

export class WeatherComp extends React.Component {
    
    constructor(props){
        super(props);
    }


    render() {
        console.log(this.props);
        const choseArea = this.props.weatherProps.areaChosen;
                let Render = (
                <div> 
                    <div>
                        Enter your zipcode
                    </div>
                    <div>
                        <input type="text" pattern="[0-9]*" id="zipcode" 
                        onInput={ this.props.updateLocation}/>

                    </div>
                </div>
                );

                let conditional;

                if(choseArea) {
                   conditional = (
                       <div>
                           area selected
                       </div>
                   );

                } else {
                    //defualt
                    

                }

        return ( 
            <div>
            {Render}
            {conditional}
            </div>
        );
    }
}