import React from 'react'

function Skills(props) {
    return (
        <>
         
                 
                 <div className="col-lg-4 col-md-4 col-12 skills">
                 {props.icon}
                 <div className="skills-content">
                     <h2>{props.sname}</h2>
                     <div className="scale"></div>
                 </div>

                 </div>
                 

             
        </>
    )
}

export default Skills
