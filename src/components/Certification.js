import React from 'react'

import imageCCNA from '../assets/ccna.png'
import imageAWS from '../assets/aws-certified-solutions-architect-associate.png'
import imageArchitect from '../assets/7-architect-logo.png'
import imageRHCSA from '../assets/rhcsa.png'


const Certification = () => {
    return (
        <div>
               <section className='certificate-section' id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">Certifications</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon certification">
                <img src={imageCCNA} alt="" />
                <img src={imageAWS} alt="" />
                <img src={imageArchitect} alt="" />
                <img src={imageRHCSA} alt="" />
            </ul>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Certification
