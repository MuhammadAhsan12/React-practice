import React, { Component } from 'react'

export default class Api extends Component {
    constructor() {
        super();
        this.state = {
            user : null,
        }
    }

    componentDidMount() {
        fetch('https://reqres.in/api/users').then((resp) => {
            resp.json().then((result) => {
                console.warn(result.data);
                this.setState({user : result.data})
            })
        })
    }

    render() {
        return (
            <div>
                <h1>API</h1>
                {
                    this.state.user ?
                    this.state.user.map((item , i) =>
                    <div><p>{"ID"} : {i}, {"Name"} : {item.first_name} {item.last_name}, {"Email"} : {item.email}, {"Avatar"} : {item.avatar}</p></div>
                    )
                    :null
                }
            </div>
        )
    }
}

