import React from 'react'

function Skills_progress(props) {
    return (
        <>
         <li>
             <div className="mh-progress mh-progress-circle" data-progress={props.progress}></div>
             <div className="pr-skill-name">{props.skill}</div>
             </li>   
        </>
    )
}

export default Skills_progress
