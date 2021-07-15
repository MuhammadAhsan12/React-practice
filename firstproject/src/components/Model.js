import React, { Component } from 'react'
import {Button, Modal} from 'react-bootstrap'

export default class Model extends Component {
    constructor(){
        super();
        this.state = {
            show : false,
        }
    }

    handleModel(){
        this.setState({show :! this.state.show})
    }

    render() {
        return (
            <div>
                <Button onClick = {() => this.handleModel()}>Model click</Button>
                <Modal show = {this.state.show} onHide = {() => this.handleModel()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick = {() => this.handleModel()} variant="secondary">Close</Button>
                        <Button onClick = {() => this.handleModel()} variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
