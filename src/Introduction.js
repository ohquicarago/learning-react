import React, { Component } from 'react';
import './App.css';
import './Assets/css/bootstrap.min.css'
import './Assets/css/templatemo-style.css'
import './Assets/fontawesome-5.5/css/all.min.css'
//import './Assets/img'
import mainImage from './Assets/img/the-town-01.jpg';

class Introduction extends Component {
  render() {
    return (
      <section id="introduction" className="tm-section-pad-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={mainImage} alt="Image" className="img-fluid tm-intro-img" />
          </div>
          <div className="col-lg-6">
            <div className="tm-intro-text-container">
                <h2 className="tm-text-primary mb-4 tm-section-title">Introduction</h2>
                <p className="mb-4 tm-intro-text">
                  The Town is <strong>simple CSS template</strong> built on Bootstrap v4.1.3 
                  and this is a little parallax layout that you can use for your websites.
              </p>
                <p className="mb-5 tm-intro-text">
                  Please tell your friends about our site 
                  <a rel="nofollow" href="https://templatemo.com">templatemo</a>. Thank you.
                  Curabitur dapibus tristique enim a imperdiet. Etiam
              tristique sem sed condimentum posuere. </p>
                <div className="tm-next">
                  <a href="#work" className="tm-intro-text tm-btn-primary">Read More</a>
                </div>
            </div>
          </div>
        </div>

        <div className="row tm-section-pad-top">
          <div className="col-lg-4">
            <i className="fas fa-4x fa-bus text-center tm-icon"></i>
            <h4 className="text-center tm-text-primary mb-4">Curabitur at elit eu risus</h4>
            <p>
              Sed ultrices sit amet mi eu malesuada. Cras ultricies gravida
              nisi, ac pellentesque nunc tincidunt quis. Aenean at ornare lacus.
              Duis imperdiet lacus justo.
            </p>
          </div>
        
        <div className="col-lg-4 mt-5 mt-lg-0">
          <i className="fas fa-4x fa-bicycle text-center tm-icon"></i>
          <h4 className="text-center tm-text-primary mb-4">Nunc sed metus vel nisi</h4>
          <p>
            Praesent ut finibus leo. Duis et tempus ipsum, id pretium nunc.
            Vivamus imperdiet sem quis orci pharetra convallis. Nunc a tempus
            nisi, sed fringilla purus. In hac habitasse platea.
          </p>
        </div>
        <div className="col-lg-4 mt-5 mt-lg-0">
          <i className="fas fa-4x fa-city text-center tm-icon"></i>
          <h4 className="text-center tm-text-primary mb-4">Fusce sed nisi sagittis</h4>
          <p>
            Donec vestibulum libero nisl. Curabitur ac orci ac lorem blandit
            volutpat. Sed ac sodales nibh, ut porttitor elit. Sed id dui mi.
            Vestibulum ante ipsum primis in faucibus.
          </p>
        </div>
      </div>
      </div>
    </section>
    );
  }
}

export default Introduction;
