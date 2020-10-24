import React from 'react';

export class WeatherComp extends React.Component {
    state = { 
        areaChosen: false,
        zipcode: 0
        //idk depends on what the api spits out


    }

    updateLocation(evt) {
        //call the weather api and do stuff
        const reg = RegExp('[0-9][0-9][0-9][0-9][0-9]');
        const zip = evt.target.value;
        if(reg.test(zip)){
            this.setState({zipcode: zip })
            this.setState({areaChosen: true});
            console.log("a zip");
        }
        else{
            this.setState({zipcode: zip })
            console.log("not a zip");
        }
        
    }

    render() {
        const choseArea = this.state.areaChosen;
                let Render = (
                <div> 
                    <div>
                        Enter your zipcode
                    </div>
                    <div>
                        <input type="text" pattern="[0-9]*" id="zipcode" onInput={this.updateLocation.bind(this)} value={this.state.zipcode}/>

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