import React from 'react'
import './Style.css'

export const Stylecs = (prop) => {
    return (
        <div>
            <h1 className={prop.data == "apply"? 'header' :""}>Ahsan</h1>
        </div>
    )
}

