import React from "react";
import Footer from "./footer";

export default function Profile() {
  return (
    <>
      <section id="profiles" className="profiles">
        <div className="profiles-details">
          <div className="section-heading text-center">
            <h2>profiles</h2>
          </div>
          <div className="container">
            <div className="profiles-content">
              <div className="row">
                <div className="col-sm-3">
                  <div className="single-profile">
                    <div className="profile-txt">
                      <a href="">
                        <i className="flaticon-dribbble"></i>
                      </a>
                      <div className="profile-icon-name">dribbble</div>
                    </div>
                    <div className="single-profile-overlay">
                      <div className="profile-txt">
                        <a href="">
                          <i className="flaticon-dribbble"></i>
                        </a>
                        <div className="profile-icon-name">dribbble</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="single-profile">
                    <div className="profile-txt">
                      <a href="">
                        <i className="flaticon-behance-logo"></i>
                      </a>
                      <div className="profile-icon-name">behance</div>
                    </div>
                    <div className="single-profile-overlay">
                      <div className="profile-txt">
                        <a href="">
                          <i className="flaticon-behance-logo"></i>
                        </a>
                        <div className="profile-icon-name">behance</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="single-profile profile-no-border">
                    <div className="profile-txt">
                      <a href="">
                        <i className="flaticon-github-logo"></i>
                      </a>
                      <div className="profile-icon-name">github</div>
                    </div>
                    <div className="single-profile-overlay">
                      <div className="profile-txt">
                        <a href="https://github.com/Leki-hub" target="_blank">
                          <i className="flaticon-github-logo"></i>
                        </a>
                        <div className="profile-icon-name">github</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-border"></div>
              <div className="row">
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
