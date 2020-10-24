import React from 'react';
import { genBBT, BBT } from "../../bbt-selector/bbtSelector";

export class BBTComp extends React.Component {
    

    drawBBT() {
        let bbt = this.props.BBTProps.currentBBT;
        return (
            <div>
                <div>
                    {bbt.milk ? "milk" : "no milk"}
                </div>
                <div>
                    base: {bbt.base}
                </div>
                <div>
                    flavor: {bbt.flavor}
                </div>
                <div>
                    topping: {bbt.topping}
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
                        <button onClick={this.props.findBBT}>Find your BBT</button>
                    </div>
                </div>  
            )
        }
            else {
                render = (
                    <div>
                        {this.drawBBT()}
                        <div>
                        <button onClick={this.props.findBBT}>Find another BBT</button>
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