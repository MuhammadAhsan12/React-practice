import React from 'react'

export default class HideShow extends React.Component{
    constructor(){
        super();
        this.state={
            activate : null,
            how : null
        }
    }

    componentDidUpdate(){
        if(this.state.how === null){
            this.setState({
                how: "update",
            })
        }
    }

    render(){
        return(
            <div>
                <h1>Component did {this.state.how}</h1>
                <button onClick = {() => {this.setState({activate:"yes"})}}>activate</button>
            </div>
        );
    }
}