import React, { useEffect, useState } from 'react'

const StateAndLifeCycleInFunction = () => {
    const[count , SetCount] = useState(1);

    useEffect(() => {
        console.warn(count)
    },[count === 3]);

    return (
        <div>
            <h1>Use state in function .......{count}</h1>
            <button onClick = {() => SetCount(count + 1)}>Click</button>
        </div>
    )
}

export default StateAndLifeCycleInFunction;