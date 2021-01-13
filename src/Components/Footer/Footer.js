import React from 'react'

import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="row">
                <div className="col-12 col-md-4 links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li> <a href="#">&gt; IIT Indore</a> </li>
                        <li> <a href="#">&gt; IRCC</a> </li>
                        <li> <a href="#">&gt; E-Cell</a> </li>
                        <li> <a href="#">&gt; DSCE</a> </li>
                        <li> <a href="#">&gt; WRCB</a> </li>
                        <li> <a href="#">&gt; TATA Centre</a> </li>
                        <li> <a href="#">&gt; BETiC</a> </li>
                        <li> <a href="#">&gt; HRC</a> </li>
                        <li> <a href="#">&gt; Careers</a> </li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 contact">
                    <h4>Contact Us</h4>
                    <p>Indian Institute of Technology Indore, Khandwa Road, Simrol, Indore 453552, India</p>
                    <li><img src="assets/call.svg" height="20" alt="call" /> 020 88292293</li>
                    <li><img src="assets/email.svg" height="20" alt="call" /> drishticps@iiti.ac.in</li>
                </div>
                <div className="col-12 col-md-4 newsletter">
                    <h4>Subscribe to our newsletter</h4>
                    <p>Sign Up to Our Newsletter to Get Latest Updates & Services</p>
                    <input type="text" placeholder="Enter Your Email" />
                </div>
            </div>
            <div className="row footer-content">
                <ul>
                    <li><a href="#"><span><img height="30" src="assets/linkedin.svg" alt="linkedin" /></span></a></li>
                    <li><a href="#"><span><img height="30" src="assets/facebook.svg" alt="facebook" /></span></a></li>
                    <li><a href="#"><span><img height="30" src="assets/twitter.svg" alt="twitter" /></span></a></li>
                    <li><a href="#"><span><img height="30" src="assets/instagram.svg" alt="instagram" /></span></a></li>
                </ul>
            </div>
            <div className="row copyright">
                <p>Copyright © 2020 DRISHTI CPS : Society for Innovation and Entrepreneurship, IIT Indore. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
