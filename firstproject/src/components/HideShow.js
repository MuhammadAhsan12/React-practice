import React from 'react'

export default class HideShow extends React.Component{
    constructor(){
        super();
        this.state={
            show : true,
            buttonName : "Hide",
            comp : "Complete"
        }
    }

    HideShow(){
        this.setState({
            show:! this.state.show,
            buttonName: "Toogle"
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.show ?
                    <h1>Hide and Show {this.state.comp}</h1>
                    :null
                }
                <button onClick = {() => {this.HideShow()}}>{this.state.buttonName}</button>
            </div>
        );
    }
}