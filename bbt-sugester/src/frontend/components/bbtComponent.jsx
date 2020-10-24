import React from 'react';
import { genBBT, BBT } from "../../bbt-selector/bbtSelector";

export class BBTComp extends React.Component {
    state = {
        currentBBT: null,
        bbtPresented: false,
    };

    findBBT() {
        console.log("finding bbt")

        let bbt = genBBT();

        this.setState({currentBBT: bbt});
        this.setState({bbtPresented: true})
    }

    drawBBT() {
        let bbt = this.state.currentBBT;
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
        let presented = this.state.bbtPresented;

        let render = (<div></div>);
        if(!presented) {
            render = (
                <div>
                    You havent Chosen a bbt
                    <div>
                        <button onClick={this.findBBT.bind(this)}>Find your BBT</button>
                    </div>
                </div>  
            )
        }
            else {
                render = this.drawBBT();
            }

        return (
            <div>
            {render}
            </div>
        );
    }

}