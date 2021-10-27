import React from 'react'
import Hello from '../images/hello.png'
import Logo from '../images/Logo23.png'
import Hamburger from '../images/Hamburger.png'
import Profile from '../images/Profile2.png'
import Button from './Button.js'
import UseAnimations from 'react-useanimations';
import settings2 from 'react-useanimations/lib/settings2'
// import Vector2 from '../images/Vector 2.png'

// import menu4 from 'react-useanimations/lib/github'


function Banner() {
    return (
        <div className="banner">
          
           
            
            <div className="container head">
<img className="logo img-fluid" src={Logo} alt="" width="400px" height="100px"/>
<div className="Hamburger">
            <UseAnimations animation={settings2} size={66} wrapperStyle={{padding: 0}} strokeColor='#FF4D05' />
            </div>

            
        </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 col-md-12 col-sm-12 banner1">
                        <img src={Hello} alt="" width="200px" height=""/>
                        <h1>Soumyakanta Mohanty</h1>
                        <h2>FRONTEND DEVELOPER  &nbsp;|&nbsp;  IOT ENTHUSIAST &nbsp; | &nbsp; BTECH GRADUATE</h2>
                        <div className="buttons">
<Button class="btn1" text="Download CV"/>
<Button class="btn2" text="More info"/>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 banner2" >
{/* <img className="img-fluid pfimg2" src={Vector2} alt="" /> */}

<img className="img-fluid pfimg" src={Profile} alt="" />
<div className="socialmedia">
<i class="fas fa fa-facebook-f"></i>
</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
