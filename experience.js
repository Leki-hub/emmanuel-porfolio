import React from "react";
import Footer from "./footer";

export default function Experience() {
  return (
    <>
      <section id="experience" className="experience">
        <div className="section-heading text-center">
          <h2>experience</h2>
        </div>
        <div className="container">
          <div className="experience-content">
            <div className="main-timeline">
              <ul>
                <li>
                  <div className="single-timeline-box fix">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="experience-time text-right">
                          <h2>2023 - Present</h2>
                          <h3>FrontEnd Web Developer</h3>
                        </div>
                      </div>
                      <div className="col-md-offset-1 col-md-5">
                        <div className="timeline">
                          <div className="timeline-content">
                            <h4 className="title">
                              <span>
                                <i
                                  className="fa fa-circle"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              TechMpigo junior developer
                            </h4>
                            <h5>Kenya, Nairobi</h5>
                            <p className="description">
                              TechMpigo is a community of software engineers,
                              who are passionate about technology and sharing
                              their knowledge. We help each other to learn new
                              technologies by creating projects that can be used
                              as learning material.One of start ups is Grise System Solutions
                              that digitizes restaurant operations.<br/>
                              I am currently working on the front end web.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="single-timeline-box fix">
                    <div className="row">
                      <div className="col-md-offset-1 col-md-5 experience-time-responsive">
                        <div className="experience-time">
                          <h2>
                            <span>
                              <i className="fa fa-circle" aria-hidden="true"></i>
                            </span>
                            2022
                          </h2>
                          <h3>Software development Trainee</h3>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="timeline">
                          <div className="timeline-content text-right">
                            <h4 className="title">ALX Bootcamp</h4>
                            <h5>Kenya, Nairobi</h5>
                            <p className="description">
                              Software development training at ALX Bootcamp
                              provided me with skills that I've used to offer
                              freelance solutions in web design and web
                              development.
                              To gain more experience, I collaborated with other 
                              developers from different countries to build apps.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-offset-1 col-md-5 experience-time-main">
                        <div className="experience-time">
                          <h2>
                            <span>
                              <i
                                className="fa fa-circle"
                                aria-hidden="true"
                              ></i>
                            </span>
                            2022
                          </h2>
                          <h3>Software development Trainee</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="single-timeline-box fix">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="experience-time text-right">
                          <h2>2022 - 2023</h2>
                          <h3>Custormer Care Support</h3>
                        </div>
                      </div>
                      <div className="col-md-offset-1 col-md-5">
                        <div className="timeline">
                          <div className="timeline-content">
                            <h4 className="title">
                              <span>
                                <i
                                  className="fa fa-circle"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Solar Panda limited
                            </h4>
                            <h5>Nairobi, Kenya</h5>
                            <p className="description">
                              Solar Panda Limited is a company that provides
                              lighting solutions to rural and urban centers in
                              Kenya. Employed as assistant Custormer care,
                              providing ideas on designing products to
                              marketing.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
