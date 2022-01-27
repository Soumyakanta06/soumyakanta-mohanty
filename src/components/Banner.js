import React from 'react'
import Hello from '../images/hello.png'
import Logo from '../images/Logo233.png'
// import Hamburger from '../images/Hamburger.png'
import Profile from '../images/Profile2.png'
import Button from './Button.js'
import { Link } from "react-router-dom";

import UseAnimations from 'react-useanimations';
import menu4 from 'react-useanimations/lib/menu4'
// import Vector2 from '../images/Vector 2.png'

// import menu4 from 'react-useanimations/lib/github'


function Banner() {
    // function menuOpen(){
    //     var add = document.getElementsByClassName('.add');

    //     add.classList.add('.toggler');
    // }
    const closeMenu = () => {
        document.getElementById("menu-icon").checked=false;
      }

    
    return (
        <div className="banner">
          
           
            
            <div className="container head">
<img className="logo2 img-fluid" src={Logo} alt="" />




             
            {/* <div className="Hamburger">
            
<UseAnimations animation={menu4} size={66} wrapperStyle={{padding: 0}} strokeColor='#FF4D05' />
</div> */}
 {/* <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label for="menu-icon"></label>
  	<nav class="nav"> 		
  		<ul class="pt-5">
  			<li><a href=".about">Work</a></li>
  			<li><a href=".about">About Me</a></li>
  			<li><a href=".about">Skills</a></li>

  			<li><a href="#">Studio</a></li>
  			<li><a href="#">News</a></li>
  			<li><a href="#">Contact</a></li>
  		</ul>
  	</nav> */}
{/* <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/> */}
<input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
  	<label for="menu-icon"></label>

  	<nav class="nav"> 		
  		<ul class="pt-5">
  			 {/* <li><Link to="/Banner">Banner</Link></li>
  			<li><Link to="/About">About Me</Link></li>
  			<li><Link to="/Skills">Skills</Link></li>
        <li><Link to="/Education">Education</Link></li>
  			<li><Link to="/Projects">Projects</Link></li>
  			<li><Link to="/Contact">Contact</Link></li>   */}

<li  onClick={() => closeMenu()}><a href="#">Home</a></li>
<li onClick={() => closeMenu()}><a href="#About">About Me</a></li>
<li onClick={() => closeMenu()}><a href="#Skills">Skills</a></li>
  			<li onClick={() => closeMenu()}><a href="#education">Education</a></li>
  			<li onClick={() => closeMenu()}><a href="#Projects">Projects</a></li>
  			<li onClick={() => closeMenu()}><a href="#Contact">Contact</a></li>
  		</ul>
  	</nav>


  	         



            
        </div>
            <div className="container-fluid" id="Home">
                <div className="row" >
                    <div className="col-lg-7 col-md-12 col-sm-12 banner1">
                        <img src={Hello} alt="" width="200px" height=""/>
                        <h1>Soumyakanta Mohanty</h1>
                        <h2>FRONTEND DEVELOPER  &nbsp;|&nbsp;  IOT ENTHUSIAST &nbsp; | &nbsp; BTECH GRADUATE</h2>
                        <div className="buttons">
<Button class="btn1 " text="Download CV"/>
<Button class="btn2" text="More info"/>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 banner2" >
{/* <img className="img-fluid pfimg2" src={Vector2} alt="" /> */}

<img className="img-fluid pfimg" src={Profile} alt="" />

                    </div>
                </div>
            </div>
            <div className="socialmedia">
                
<a href="https://www.facebook.com/soumya.mohanty.7927408"><i className="fas fa fa-facebook-f mt-5 me-5"></i></a>
<a href="https://www.instagram.com/starkxx_sou_mya167/"><i className="fab fa fa-instagram mt-5 me-5"></i></a>
{/* <i class="fab fa-linkedin-in"></i> */}
<a href="https://www.linkedin.com/in/soumyakanta-mohanty-4838371b5/"><i className="fas fa fa-linkedin mt-5 me-5"></i></a>
<a href="https://github.com/Soumyakanta06"><i className="fab fa fa-github mt-5 me-5"></i></a>
<a href="https://twitter.com/SoumyakantaMo10"><i className="fab fa fa-twitter mt-5 me-5"></i></a>
{/* <hr className="mt-5 " /> */}

</div>
        </div>
    )
}

export default Banner


