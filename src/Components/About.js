import React, { Component } from 'react';
import '../css/main.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class About extends Component {
    state = {  } 
    render() { 
        return (<>
              {/* ======= About Section ======= */}
              <section id="about" className="about mt-5">
                <div className="container" data-aos="fade-up">
                  <div className="section-header">
                    <h2>About Us</h2>
                    <p>
                      Learn More <span>About Us</span>
                    </p>
                  </div>
                  <div className="row gy-4">
                    <div
                      className="col-lg-6 position-relative about-img"
                      style={{ backgroundImage: "url(./img/about.jpg)" }}
                      data-aos="fade-up"
                      data-aos-delay={150}
                    >
                      <div className="call-us position-absolute">
                        <h4>Book a Table</h4>
                        <p>+1 5589 55488 55</p>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 d-flex align-items-end"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <div className="content ps-0 ps-lg-3">
                        <p className="fst-italic">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <ul>
                          <li>
                            <i className="bi bi-check2-all" /> Ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                          </li>
                          <li>
                            <i className="bi bi-check2-all" /> Duis aute irure dolor in
                            reprehenderit in voluptate velit.
                          </li>
                          <li>
                            <i className="bi bi-check2-all" /> Ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate trideta storacalaperda mastiro
                            dolore eu fugiat nulla pariatur.
                          </li>
                        </ul>
                        <p>
                          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute irure dolor in reprehenderit in voluptate velit esse cillum
                          dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident
                        </p>
                        <div className="position-relative mt-4">
                          <img
                            src="./img/about-2.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <a
                            href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                            className="glightbox play-btn" target={'_Blank'}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End About Section */}


               {/* ======= team Section ======= */}
               <section id="chefs" className="chefs section-bg">
                <div className="container" data-aos="fade-up">
                  <div className="section-header">
                    <p>
                      Our <span>team</span> 
                    </p>
                  </div>

                  <div className="row gy-4">
                    <div
                      className="col-lg-3 col-md-3 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="chef-member">
                        <div className="member-img">
                          <img
                            src="./img/team/raghad.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="social">
                            <a href="">
                              <i className="bi bi-twitter" />
                            </a>
                            <a href="">
                              <i className="bi bi-facebook" />
                            </a>
                            <a href="">
                              <i className="bi bi-instagram" />
                            </a>
                            <a href="">
                              <i className="bi bi-linkedin" />
                            </a>
                          </div>
                        </div>
                        <div className="member-info">
                          <h4>Raghad Karasneh</h4>
                          <span>Full-stack web developer</span>
                        </div>
                      </div>
                    </div>
                    {/* End Chefs Member */}
                    <div
                      className="col-lg-3 col-md-3 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="chef-member">
                        <div className="member-img">
                          <img
                            src="./img/team/anas.png"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="social">
                            <a href="">
                              <i className="bi bi-twitter" />
                            </a>
                            <a href="">
                              <i className="bi bi-facebook" />
                            </a>
                            <a href="">
                              <i className="bi bi-instagram" />
                            </a>
                            <a href="">
                              <i className="bi bi-linkedin" />
                            </a>
                          </div>
                        </div>
                        <div className="member-info">
                          <h4>Anas Allawafeh</h4>
                          <span>Full-stack web developer</span>
                        </div>
                      </div>
                    </div>
                    {/* End Chefs Member */}
                    <div
                      className="col-lg-3 col-md-3 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <div className="chef-member">
                        <div className="member-img">
                          <img
                            src="./img/team/dyar.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="social">
                            <a href="">
                              <i className="bi bi-twitter" />
                            </a>
                            <a href="">
                              <i className="bi bi-facebook" />
                            </a>
                            <a href="">
                              <i className="bi bi-instagram" />
                            </a>
                            <a href="">
                              <i className="bi bi-linkedin" />
                            </a>
                          </div>
                        </div>
                        <div className="member-info">
                          <h4>Dyar hunaity</h4>
                          <span>Product Owner</span>
                        </div>
                      </div>
                    </div>
                    {/* End Chefs Member */}
                    <div
                      className="col-lg-3 col-md-3 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <div className="chef-member">
                        <div className="member-img">
                          <img
                            src="./img/team/taebah.jpg"
                            className="img-fluid mt-5"
                            alt=""
                          />
                          <div className="social">
                            <a href="">
                              <i className="bi bi-twitter" />
                            </a>
                            <a href="">
                              <i className="bi bi-facebook" />
                            </a>
                            <a href="">
                              <i className="bi bi-instagram" />
                            </a>
                            <a href="">
                              <i className="bi bi-linkedin" />
                            </a>
                          </div>
                        </div>
                        <div className="member-info">
                          <h4> Taebah Bassam</h4>
                          <span>Scrum Master</span>
                        </div>
                      </div>
                    </div>
                    {/* End Chefs Member */}
                  </div>
                </div>
              </section>
              {/* End Chefs Section */}


</>
)
}
}

export default About;
