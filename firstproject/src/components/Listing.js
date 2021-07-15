import React from 'react'

export default class listing extends React.Component {
    constructor(){
        super();
        this.state = {
            list:[
                {name:'ashan', phone:'0121212121', email:'ashan@gmail.com'},
                {name:'ashan', phone:'0121212121', email:'ashan@gmail.com'},
                {name:'ashan', phone:'0121212121', email:'ashan@gmail.com'},
            ]
        }
    }
    render() {
        return (
            <div>
                <br/><br/>
                {
                    this.state.list.map((item) =>
                    <div>
                        <span>name : {item.name}  Email : {item.email}</span>
                    </div>
                    )
                }
            </div>
        )
    }
}
