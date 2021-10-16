import React from 'react'
import Skills from './Skills'
import { FaBeer } from "react-icons/fa";
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { DiJavascript1 } from 'react-icons/di';
import { SiBootstrap } from 'react-icons/si';
import { DiPhp } from 'react-icons/di';
import { SiMysql } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { FiFigma } from 'react-icons/fi';
import { SiArduino } from 'react-icons/si';





function Skillscontent() {
    return (
        <>
        <div className="container-fluid">
             <div className="row skillsmain">
                 <div className="col-lg-5 col-12 skills-about"><h2>SKILLS</h2>
             <p>Since the beginnning of my journey as a frontend developer I am really fond of 
                 the animations in the website, the page transitions and letter effects really 
                 fascinates me the most. I try to put maximum animations on the websites i build as it adds a tempest look 
                 to the website.<br/><br/>
                 Perhaps, sometime i think that I would have been a designer rather than a developer and then a positive thought comes into my mind that I have a 
                 an advantage that I love designing which helps me a lot while designing my websites.
            
                  
             </p>




                 </div>
                 <div className="col-lg-7 col-12">
                     <div className="container-fluid">
                         <div className="row">

                         
                 
                 <Skills icon={<AiFillHtml5 color="orange" size={56} />} sname="HTML" />
                 <Skills icon={<IoLogoCss3 color="orange" size={50} />} sname="CSS" />
                 <Skills icon={<DiJavascript1 color="orange" size={56} />} sname="Javascript" />
                 <Skills icon={<SiBootstrap color="orange" size={56} />} sname="Bootstrap" />
                 <Skills icon={<DiPhp color="orange" size={56} />} sname="PHP" />
                 <Skills icon={<SiMysql color="orange" size={56} />} sname="MYSQL" />
                 <Skills icon={<GrReactjs color="orange" size={56} />} sname="ReactJS" />
                 <Skills icon={<FiFigma color="orange" size={56} />} sname="Figma" />
                 {/* <Skills icon={<SiMysql color="orange" size={56} />} sname="C++" /> */}
                 <Skills icon={<SiArduino color="orange" size={56} />} sname="Arduino" />
                 </div>
                     </div>
                 </div>





             </div>
             </div>  
            
        </>
    )
}

export default Skillscontent
