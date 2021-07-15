import React from 'react';

// function Header() {
//     return <h1>Header</h1>
// }

// const Header = function () {
//     return <h1>Header</h1>
// }

export const Header = (prop) => {
    function call(){
        alert("ahsan");
    }
    return <div>
        <h1 onClick={call}>{prop.text}</h1>
        <h1 onClick={call}>{prop.data.name}</h1>
        
        <input type = "file" name = "img" />
    </div>
}

//export default Header;