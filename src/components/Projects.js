import React from 'react'
import Learn2Infy from '../images/Learn2Infy.png'
import Spectrum from '../images/SPECTRUM.png'
import WordScout from '../images/Word-Scout.png'
import Tubik from '../images/tubik-1.png'

export default function Projects() {
    return (
        <div>
            <div className="container-fluid projects" id="Projects">
            <h2 className="pb-3">Projects I have Contributed</h2>
                <div className="row ps-4 pe-2">
                
                    <div className="col-md-4 ov_1 pb-5">
                        <img src={Learn2Infy} alt="" height="300px"/>
                        <div className="img-title1">
                            {/* <p>here we hv brick wall</p> */}
                            <a href="https://www.learn2infy.tech/"><button>View Website</button>  </a>
                        </div>
                    </div>
                    <div className="col-md-4 ov_1 pb-5">
                    <img src={Spectrum} alt="" height="300px"/>
                    <div className="img-title1">
                            {/* <p>here we hv brick wall</p> */}
                            <a href="https://internship.spectrumcet.com/"><button>View Website</button>  </a>

                        </div>

                    </div>
                    <div className="col-md-4 ov_1 pb-5">
                        <img src={WordScout} alt="" height="300px"/>
                        <div className="img-title1">
                            {/* <p>here we hv brick wall</p> */}
                            <a href="https://chrome.google.com/webstore/detail/word-scout/afadageagbibngcfbpbgfhjpjdnjlffl"><button>View Extension</button>  </a>

                        </div>
                    </div>
                    <div className="col-md-4 ov_1 pb-5">
                    <img src={Tubik} alt="" height="300px"/>
                    <div className="img-title1">
                            {/* <p>here we hv brick wall</p> */}
                            <a href="https://soumyakanta06.github.io/Tubik-Travel-Website/"><button>View Website</button>  </a>

                        </div>

                    </div>
                    <div className="col-md-4 ov_1 pb-5">
                    <img src={Spectrum} alt="" height="300px"/>
                    <div className="img-title1">
                            {/* <p>here we hv brick wall</p> */}
                            <a href="https://git-code-orcin.vercel.app/"><button>View Website</button>  </a>

                        </div>

                    </div>
                    </div>

                </div>
                </div>
            
            
        
    )
}
