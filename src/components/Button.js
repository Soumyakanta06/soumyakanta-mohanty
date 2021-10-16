import React from 'react'

function Button(props) {
    return (
        <div>
          <button onclick={props.ff} className={props.class}>{props.text}</button>  
        </div>
    )
}

export default Button
