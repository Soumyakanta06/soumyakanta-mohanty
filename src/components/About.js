import React from 'react'
import myImage from '../images/hk.png';
import Counter from './Counter'

function About() {
    return (
        <div id="About">
            <div className="container aboutmain">
                <div className="row about" >
                    <div className="col-lg-5 col-md-12 about1 order-lg-1 order-md-2 order-sm-2 order-2">
                        <img className="img-fluid myImage" src={myImage} alt="" />
                    </div>
                    <div className="col-lg-7 col-md-12 about2 order-lg-2 order-md-1 order-sm-1 order-1">
                        <h1>About Me</h1>
                        <p><span class="quote">"I want to be a Football behind whom everyone chases..."</span> &nbsp;<br/>
                        Hello!! <img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" width="30px"/>  I am Soumyakanta Mohanty from Odisha recently pursuing my Bachelor of Technology in the field of Electronics & Instrumentation in College of Engineering and Technology, Bhubaneswar.
                        Being a self paced developer I am fond of Web technologies and Design tools and uses these design as well as Web dev skills to land a alluring website with awesome UI while incorporating data from the backend.
                        Withal, I have ardent interest in Drones and Internet of Things which I aim to dive deep in the future. </p>
                             <div className="counter">
<Counter number="5+" title="Projects" description="Completed"/>
<Counter number="2" title="Personal" description="Projects"/>
<Counter number="2+" title="Years
" description="experience"/>

                             </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
