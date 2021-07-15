import React, { Component } from 'react'
import reactDom from 'react-dom'

export default class Portal extends Component {
    render() {
        return reactDom.createPortal(
            <h1>portal</h1>,
            document.getElementById('root-portal')
        )
    }
}
