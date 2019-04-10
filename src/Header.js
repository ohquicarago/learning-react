import React, { Component } from 'react';
import './App.css';
import './Assets/css/bootstrap.min.css'
import './Assets/css/templatemo-style.css'

class Header extends Component {
  render() {
    return (
      <section id="hero" className="text-white tm-font-big tm-parallax">
      {/* Navigation */}
      <nav className="navbar navbar-expand-md tm-navbar" id="tmNav">              
        <div className="container">   
          <div className="tm-next">
              <a href="#hero" className="navbar-brand">The Town</a>
          </div>             
            
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars navbar-toggler-icon"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <a className="nav-link tm-nav-link" href="#introduction">Introduction</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link tm-nav-link" href="#work">Our Work</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link tm-nav-link" href="#contact">Contact Us</a>
              </li>                    
            </ul>
          </div>        
        </div>
      </nav>
      
      <div className="text-center tm-hero-text-container">
        <div className="tm-hero-text-container-inner">
            <h2 className="tm-hero-title">The Town</h2>
            <p className="tm-hero-subtitle">Parallax Bootstrap Theme<br />by TemplateMo
            </p>
        </div>        
      </div>

      <div className="tm-next tm-intro-next">
        <a href="#introduction" className="text-center tm-down-arrow-link">
          <i className="fas fa-3x fa-caret-down tm-down-arrow"></i>
        </a>
      </div>      
    </section>
    );
  }
}

export default Header;
