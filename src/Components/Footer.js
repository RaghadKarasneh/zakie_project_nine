import React, { Component } from 'react';
import '../css/main.css';
import { UilTwitter } from '@iconscout/react-unicons'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilLinkedinAlt } from '@iconscout/react-unicons'

class Footer extends Component {
    state = {  } 
    render() { 
        return (
<>
            {/* ======= Footer ======= */}
            <footer id="footer" className="footer">
              <div className="container">
                <div className="row gy-3">
                  <div className="col-lg-3 col-md-6 d-flex">
                    <i className="bi bi-geo-alt icon" />
                    <div>
                      <h4>Address</h4>
                      <p>
                      Ash Shumaysani
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-links d-flex">
                    <i className="bi bi-telephone icon" />
                    <div>
                      <h4>Reservations</h4>
                      <p>
                        <strong style={{ color:'white'}}>Phone:</strong> +1 5589 55488 55
                        <br />
                        <strong style={{ color:'white'}}>Email:</strong> Zakie@gmail.com
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-links d-flex">
                    <i className="bi bi-clock icon" />
                    <div>
                      <h4>Opening Hours</h4>
                      <p>
                        <strong style={{ color:'white'}}>Mon-Sat: 11AM</strong> - 23PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Follow Us</h4>
                    <div className="social-links d-flex">
                      <a href="#" className="twitter">
                      <UilTwitter/>
                      </a>
                      <a href="#" className="facebook">
                      <UilFacebookF/>
                      </a>
                      <a href="#" className="instagram">
                      <UilInstagram/>
                      </a>
                      <a href="#" className="linkedin">
                      <UilLinkedinAlt/>                      
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="copyright">
                  © Copyright{" "}
                  <strong style={{ color:'white'}}>
                    <span>Zakie</span>
                  </strong>
                  . All Rights Reserved
                </div>
              </div>
            </footer>
            {/* End Footer */}
            {/* End Footer */}
</>
)
}
}

export default Footer;