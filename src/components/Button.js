import React from 'react'

function Button(props) {
    return (
        <div>
          <button onclick={props.ff} className={props.class}>
            <h3 className='btntext'>{props.text}</h3></button>  
        </div>
    )
}

export default Button
