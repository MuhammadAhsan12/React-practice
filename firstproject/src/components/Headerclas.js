import React from 'react';

export default class Headerclas extends React.Component 
{
    constructor(){
        super();
        this.state={
            name:"Saba",
            email:"Example@gmail.com",
            count: 0
        }
    }

    updatestate(){
        this.setState({
            name : "Ahsan",
            count : this.state.count + 1
        })
    }

    componentDidUpdate(){
        console.warn("Ahsan");
    }
    
    render() 
    {
        return (
            <div>
                <h1>Hello {this.state.name}</h1>
                <h1>email {this.state.email}</h1>
                <h1 onClick = {() => {this.updatestate()}}>Count {this.state.count}</h1>

                <button onClick = {() => {this.updatestate()}}>update name</button>
            </div>
        )
    }
}