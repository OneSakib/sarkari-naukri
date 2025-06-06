// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="py-5">
            <div className="b-example-divider"></div>
            <footer className="footer-section mt-5">
                <div className="container">
                    <div className="footer-main">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="footer-widget">
                                    <div className="footer-logo mb-3">
                                        <img
                                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='40' viewBox='0 0 150 40'%3E%3Crect width='150' height='40' fill='%23ffffff'/%3E%3Ctext x='75' y='25' font-family='Arial, sans-serif' font-size='16' font-weight='bold' text-anchor='middle' fill='%232c5aa0'%3ESarkari Result%3C/text%3E%3C/svg%3E"
                                            alt="Sarkari Result"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <p className="footer-text">
                                        Your trusted source for latest government job notifications,
                                        exam results, admit cards, and career guidance. Stay updated
                                        with Sarkari Result.
                                    </p>
                                    <div className="social-links">
                                        <a href="#" className="social-link facebook" title="Facebook">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="#" className="social-link twitter" title="Twitter">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="#" className="social-link instagram" title="Instagram">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        <a href="#" className="social-link youtube" title="YouTube">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                        <a href="#" className="social-link telegram" title="Telegram">
                                            <i className="fab fa-telegram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 mb-4">
                                <div className="footer-widget">
                                    <h5 className="footer-title">Quick Links</h5>
                                    <ul className="footer-links">
                                        <li><a href="#">Latest Jobs</a></li>
                                        <li><a href="#">Results</a></li>
                                        <li><a href="#">Admit Card</a></li>
                                        <li><a href="#">Answer Key</a></li>
                                        <li><a href="#">Syllabus</a></li>
                                        <li><a href="#">Previous Papers</a></li>
                                        <li><a href="#">Online Form</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 mb-4">
                                <div className="footer-widget">
                                    <h5 className="footer-title">Job Categories</h5>
                                    <ul className="footer-links">
                                        <li><a href="#">Banking Jobs</a></li>
                                        <li><a href="#">Railway Jobs</a></li>
                                        <li><a href="#">SSC Jobs</a></li>
                                        <li><a href="#">UPSC Jobs</a></li>
                                        <li><a href="#">Police Jobs</a></li>
                                        <li><a href="#">Teaching Jobs</a></li>
                                        <li><a href="#">Defense Jobs</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 mb-4">
                                <div className="footer-widget">
                                    <h5 className="footer-title">Popular States</h5>
                                    <ul className="footer-links">
                                        <li><a href="#">Uttar Pradesh</a></li>
                                        <li><a href="#">Bihar</a></li>
                                        <li><a href="#">Rajasthan</a></li>
                                        <li><a href="#">Maharashtra</a></li>
                                        <li><a href="#">West Bengal</a></li>
                                        <li><a href="#">Madhya Pradesh</a></li>
                                        <li><a href="#">Punjab</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="footer-widget">
                                    <h5 className="footer-title">Stay Connected</h5>
                                    <div className="contact-info mb-4">
                                        <div className="contact-item">
                                            <i className="fas fa-envelope"></i>
                                            <span>info@SarkariNaukri.com</span>
                                        </div>
                                        <div className="contact-item">
                                            <i className="fas fa-phone"></i>
                                            <span>+91-11-4567-8900</span>
                                        </div>
                                        <div className="contact-item">
                                            <i className="fas fa-map-marker-alt"></i>
                                            <span>New Delhi, India</span>
                                        </div>
                                    </div>

                                    <div className="newsletter">
                                        <h6>Subscribe to Newsletter</h6>
                                        <form className="newsletter-form">
                                            <div className="input-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Your email address"
                                                    required
                                                />
                                                <button className="btn btn-subscribe" type="submit">
                                                    <i className="fas fa-paper-plane"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mobile-apps-footer">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h5 className="mb-3">Download Our Mobile Apps</h5>
                                <p>Get instant notifications for latest jobs and results</p>
                            </div>
                            <div className="col-md-6">
                                <div className="app-download-buttons">
                                    <a href="#" className="app-download-btn">
                                        <img
                                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='42' viewBox='0 0 140 42'%3E%3Crect width='140' height='42' rx='8' fill='%23000000'/%3E%3Ctext x='70' y='15' font-family='Arial' font-size='10' font-weight='bold' text-anchor='middle' fill='%23ffffff'%3EGet it on%3C/text%3E%3Ctext x='70' y='30' font-family='Arial' font-size='14' font-weight='bold' text-anchor='middle' fill='%23ffffff'%3EGoogle Play%3C/text%%3E%3C/svg%3E"
                                            alt="Google Play Store"
                                        />
                                    </a>
                                    <a href="#" className="app-download-btn">
                                        <img
                                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='42' viewBox='0 0 140 42'%3E%3Crect width='140' height='42' rx='8' fill='%23000000'/%3E%3Ctext x='70' y='15' font-family='Arial' font-size='10' font-weight='bold' text-anchor='middle' fill='%23ffffff'%3EDownload on the%3C/text%3E%3Ctext x='70' y='30' font-family='Arial' font-size='14' font-weight='bold' text-anchor='middle' fill='%23ffffff'%3EApp Store%3C/text%3E%3C/svg%3E"
                                            alt="Apple App Store"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-notice">
                        <div className="notice-content">
                            <div className="row align-items-center">
                                <div className="col-md-1">
                                    <i className="fas fa-exclamation-triangle notice-icon"></i>
                                </div>
                                <div className="col-md-11">
                                    <p className="mb-0">
                                        <strong>Disclaimer:</strong> SarkariNaukri.com is not
                                        associated with any government organization. We only provide
                                        information about government job notifications for educational
                                        purposes. Please verify all details from official sources
                                        before applying.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <p className="copyright-text mb-0">
                                    © 2025 SarkariNaukri.com. All Rights Reserved.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-bottom-links">
                                    <a href="#">Privacy Policy</a>
                                    <a href="#">Terms of Service</a>
                                    <a href="#">Contact Us</a>
                                    <a href="#">About Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;
