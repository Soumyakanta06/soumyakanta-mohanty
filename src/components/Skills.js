import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
AOS.init();

function Skills(props) {
    return (
        <>
         
                 
                 <div className="col-lg-4 col-md-4 col-12 skills">
                 {props.icon}
                 <div className="skills-content">
                     <h2>{props.sname}</h2>
                     <div className="scale" data-aos="fade-right" data-aos-duration="800"></div>
                 </div>

                 </div>
                 

             
        </>
    )
}

export default Skills
