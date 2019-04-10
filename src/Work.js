import React, { Component } from 'react';
import './App.css';
import './Assets/css/bootstrap.min.css';
import './Assets/css/templatemo-style.css';
import './Assets/fontawesome-5.5/css/all.min.css';
// import './Assets/js/jquery-1.9.1.min.js';
// import './Assets/js/jquery.singlePageNav.min.js';
// import './Assets/js/bootstrap.min.js';
// import './Assets/slick/slick.min.js';
// import './Assets/magnific-popup/jquery.magnific-popup.min.js';
//import './Assets/img'
import moto1 from './Assets/img/gallery-img-01.jpg';
import moto2 from './Assets/img/gallery-tn-01.jpg';
import bus1 from './Assets/img/gallery-img-02.jpg';
import bus2 from './Assets/img/gallery-tn-02.jpg';
import square1 from './Assets/img/gallery-img-03.jpg';
import square2 from './Assets/img/gallery-tn-03.jpg';
import vespa1 from './Assets/img/gallery-img-04.jpg';
import vespa2 from './Assets/img/gallery-tn-04.jpg';
import carousel1 from './Assets/img/gallery-img-05.jpg';
import carousel2 from './Assets/img/gallery-tn-05.jpg';

class Work extends Component {
  render() {
    return (
      <section id="work" className="tm-section-pad-top">
      <div className="container tm-container-gallery">
        <div className="row">
          <div className="text-center col-12">
              <h2 className="tm-text-primary tm-section-title mb-4">Our Work</h2>
              <p className="mx-auto tm-work-description">
                "Curabitur ac orci ac lorem blandit volutpat. Sed ac sodales nibh, ut
                porttitor elit. Sed id dui mi. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia."
              </p>
          </div>            
        </div>
        <div className="row">
            <div className="col-12">
                <div className="mx-auto tm-gallery-container">
                    <div className="grid tm-gallery">
                      <a href={moto1}>
                        <figure className="effect-honey tm-gallery-item">
                          <img src={moto2} alt="Image" className="img-fluid" />
                          <figcaption>
                            <h2><i>Dreamy <span>Honey</span> Now</i></h2>
                          </figcaption>
                        </figure>
                      </a>
                      <a href={bus1}>
                        <figure class="effect-honey tm-gallery-item">
                          <img src={bus2} alt="Image" class="img-fluid" />
                          <figcaption>
                            <h2><i>Second <span>Honey</span> Now</i></h2>
                          </figcaption>
                        </figure>
                      </a>
                      <a href={square1}>
                        <figure class="effect-honey tm-gallery-item">
                          <img src={square2} alt="Image" class="img-fluid" />
                          <figcaption>
                            <h2><i>Third <span>Honey</span> Now</i></h2>
                          </figcaption>
                        </figure>
                      </a>
                      <a href={vespa1}>
                        <figure class="effect-honey tm-gallery-item">
                          <img src={vespa2} alt="Image" class="img-fluid" />
                          <figcaption>
                            <h2><i>Dreamy <span>Honey</span> Now</i></h2>
                          </figcaption>
                        </figure>
                      </a>
                      <a href={carousel1}>
                        <figure class="effect-honey tm-gallery-item">
                          <img src={carousel2} alt="Image" class="img-fluid" />
                          <figcaption>
                            <h2><i>Fifth <span>Honey</span> Now</i></h2>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                </div>                
            </div>        
          </div>
      </div>
    </section>
    );
  }
}

export default Work;
