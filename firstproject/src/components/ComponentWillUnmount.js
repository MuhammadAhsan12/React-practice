import React from 'react'

export default class ComponentWillUnmount extends React.Component {

    constructor() {
        super();
        this.state = {
            toogle: true,
        }
    }

    componentWillUnmount() {
        alert("Delete list");
    }

    render() {
        return (
            <div>
                {
                    this.state.toogle ?
                        <ul>
                            <li>name : Ahsan</li>
                            <li>Email : Example@gmail.com</li>
                            <li>contact : 021213131</li>
                        </ul>
                    : null
                }

                <button onClick={() => { this.setState({ toogle: !this.state.toogle }) }}>Delete</button>
            </div>
        );
    }
}