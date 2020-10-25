import React from 'react';
import { genBBT, BBT } from "../../bbt-selector/bbtSelector";

export class BBTComp extends React.Component {
    

    drawBBT() {
        let bbt = this.props.BBTProps.currentBBT;
        return (
            //fix the milk part, checkbox for milk/no milk?
            <div>
                <p>Your drink today is: </p> 
                <div>
                   <p> {bbt.milk ? "milk" : "no milk"}</p>
                </div>
                <div>
                    <p> base:  {bbt.base} </p>
                </div>
                <div>
                     <p>flavor: {bbt.flavor} </p>
                </div>
                <div>
                    <p>topping: {bbt.topping}</p>
                </div>
            </div>
        )
    }

    render() {
        let presented = this.props.BBTProps.bbtPresented;

        let render = (<div></div>);
        if(!presented) {
            render = (
                <div>
                    You havent Chosen a bbt
                    <div>
                        <button onClick={this.props.findBBT}>Generate your random BBT!</button>
                    </div>
                </div>  
            )
        }
            else {
                render = (
                    <div>
                        {this.drawBBT()}
                        <div>
                            <button onClick={this.props.findBBT}>Generate another BBT!</button>
                        </div>
                    </div>
                );
            }

        return (
            <div>
            {render}
            </div>
        );
    }

}
