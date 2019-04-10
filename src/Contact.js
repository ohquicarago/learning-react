import React, { Component } from 'react';
import './App.css';
import './Assets/css/bootstrap.min.css';
import './Assets/css/templatemo-style.css';
import './Assets/fontawesome-5.5/css/all.min.css';

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="tm-section-pad-top tm-parallax-2">
      <div className="container tm-container-contact">
        <div className="row">
            <div className="col-12">
                <h2 className="mb-4 tm-section-title">Contact Us</h2>
                <div className="mb-5 tm-underline">
                  <div className="tm-underline-inner"></div>
                </div>
                <p className="mb-5">
                  Nullam tincidunt, lacus a suscipit luctus, elit turpis tincidunt dui,
                  non tempus sem turpis vitae lorem. Maecenas eget odio in sapien ultrices
                  viverra vitae vel leo. Curabitur at elit eu risus pharetra pellentesque
                  at at velit.
                </p>
            </div>
            
            <div className="col-sm-12 col-md-6 d-flex align-items-center tm-contact-item">
              <a href="tel:0100200340" className="tm-contact-item-link">
                  <i className="fas fa-3x fa-phone mr-4"></i>
                  <span className="mb-0">010-020-0340</span>
              </a>              
            </div>
            <div className="col-sm-12 col-md-6 d-flex align-items-center tm-contact-item">
              <a href="mailto:info@company.co" className="tm-contact-item-link">
                  <i className="fas fa-3x fa-envelope mr-4"></i>
                  <span className="mb-0">info@company.co</span>
              </a>              
            </div>
            <div className="col-sm-12 col-md-6 d-flex align-items-center tm-contact-item">
              <a href="https://www.google.com/maps" className="tm-contact-item-link">
                  <i className="fas fa-3x fa-map-marker-alt mr-4"></i>
                  <span className="mb-0">Location on Maps</span>
              </a>              
            </div>
            <div className="col-sm-12 col-md-6 d-flex align-items-center tm-contact-item">
              <form action="" method="get">
                <input name="email" type="email" placeholder="Subscribe your email" className="tm-input" required />
                <button type="submit" className="btn tm-btn-submit">Submit</button>
              </form>
            </div>
        </div>
      </div>
      <footer className="text-center small tm-footer">
          <p className="mb-0">
            Copyright &copy; 2019 Company Name 
            
            - Design: <a rel="nofollow" href="https://templatemo.com" className="tm-footer-link">Template Mo</a>
          </p>
        </footer>
    </section>
    );
  }
}

export default Contact;
