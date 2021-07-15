import React from 'react'

export default class Forms extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null,
            password: null,
            invaliduser: null,
            invalidpassword: null,
        }
    }

    valid(){
        if(!this.state.user.includes("@") && this.state.password.length < 5){
            this.setState({
                invaliduser : "Invalid name",
                invalidpassword : "invalid password",
            })
        }
        else if(!this.state.user.includes("@")){
            this.setState({
                invaliduser : "Invalid name",
            })
        }
        else if(this.state.password.length < 5){
            this.setState({
                invalidpassword : "invalid password",
            })
        }
        else{
            return true;
        }
    }

    submit() {
        if (this.valid()) {
            console.warn(this.state);
            alert("Form submited");
        }
    }

    render() {
        return (
            <div>
                <br /><br /><br />
                <input type="text" name="user" onChange={(e) => { this.setState({ user: e.target.value }) }} />
                <p style = {{color : "red" , fontSize : 12}}>{this.state.invaliduser}</p>
                <br />
                <input type="password" name="password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                <p style = {{color : "red" , fontSize : 12}}>{this.state.invalidpassword}</p>
                <br />
                <button onClick={() => this.submit()}>Submit</button>
            </div>
        )
    }
}
