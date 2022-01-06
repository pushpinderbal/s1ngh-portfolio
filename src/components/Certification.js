import React, { Component } from "react";

class Certification extends Component {
  render() {
    if (this.props.resumeCertification && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.certification;
      var certificates = this.props.resumeCertification.map(function (certificates) {
        return (
            <img src={certificates.badge} alt="" />
        );
      });
    }

    return (
      <div>
        <section className='certificate-section' id="skills">
          <div className="col-md-12">
              <div className="col-md-12">
                  <h1 className="section-title">
                      <span className="text-white">{sectionName}</span>
                  </h1>
              </div>
              <div className="col-md-12 text-center">
                  <ul className="list-inline mx-auto skill-icon certification">
                      {certificates}
                  </ul>
              </div>
          </div>
        </section>
      </div>      
    )
  }
}

export default Certification;
