import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web';

function Education() {
    const container = useRef(null)
    useEffect(() => {
lottie.loadAnimation({
container: container.current,
renderer: 'svg',
  loop: true, 
  autoplay: true, 
  animationData: require('./lottie4.json')
})
    }, [])
    return (
        <>
        <div className="container-fluid" id="education">
            <div className="row education" >
                
                <div className="col-lg-6 content-part order-2 order-md-1">
                    <div className="mm mm1">
                        <h2>Matriculation</h2>
                        <p>Carmel School
                            <br/>2005 - 2017
                        </p>
                    </div>
                    <div className="mm mm2">
                    <h2>Higher Secondary</h2>
                    <p>Mothers Public School
                            <br/>2017 - 2019
                        </p>
                    </div>
                    <div className="mm mm3">
                    <h2>Graduation</h2>
                    <p>College of Engineering and Technology
                            <br/>2019 - Present
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 animatn-part order-1 order-md-2">
                <h2>EDUCATION</h2>

                    <div className="lottie" ref={container}></div>
                </div>

            </div>
        </div>
            
        </>
    )
}

export default Education
