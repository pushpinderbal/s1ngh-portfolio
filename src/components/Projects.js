import React, { Component } from "react";


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {




        return (
      <div className="blogPage">
                <div
            className="col-sm-12 col-md-6 col-lg-4 externalLink"
            style={{ cursor: "pointer" }}
          >
             <h1 className="section-title" style={{ color: "black" }}>
            <span>BLOG</span>
          </h1>
           <a href="https://www.w3schools.com/">
           <span  className="portfolio-item d-block">
              <div className="foto">
                <div style={{background: "#7f7f7f"}}>
                <i class="fa fa-external-link" style={{fontSize:"25px", color:"white"}}></i>
                  <br />
                  <p className="project-title-settings mt-3">
                    External Link
                  </p>
                </div>
              </div>
            </span>
           </a>
          </div>
      </div>
        );

    


  }
}

export default Projects;
