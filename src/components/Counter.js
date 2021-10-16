import React from 'react'

function Counter(props) {
    return (
        <div className="counter">
            <h1 className="counter1">{props.number}</h1><br/>
            <h2 className="counter2">{props.title}<br/>{props.description}</h2>
        </div>
    )
}

export default Counter
