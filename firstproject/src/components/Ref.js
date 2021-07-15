import React, { Component, createRef } from 'react'

export default class Ref extends Component {
    constructor(){
        super();
        this.userRef = createRef();
    }

    editvalue(){
        console.warn(this.userRef)
        this.userRef.current.focus()
        this.userRef.current.value = "Ahsan"
    }

    render() {
        return (
            <div>
                <input ref = {this.userRef} type = "text" name = "user"/>
                <button onClick = {() => this.editvalue()}>Click me</button>
            </div>
        )
    }
}
