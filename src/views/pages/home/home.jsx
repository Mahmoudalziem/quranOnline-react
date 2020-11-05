import React, { Component, Fragment } from 'react';
import Slider from './slider';
import About from './about';
import Testmonials from './testmonials';
import Tutors from './tutors';
import Partner from './partner';

/// Styling Component
import './home.scss';

/// components Local
// import LocalizedStrings from "react-localization";

/// Fire Plugins
import './script';

class Home extends Component {

    render() {
        return (
            <Fragment>
                <Slider />
                <About />
                <Testmonials />
                <Tutors />

                <section className="certificate-section">
                    <div className="container">
                        <div className="col-md-9 col-12 mx-auto">
                            <ul className="nav nav-tabs nav_buttons p-0 mx-auto" id="myTab" role="tablist">
                                <li className="nav-item col">
                                    <a className="nav-link active" data-toggle="tab" href="#teachers" role="tab">Certified Teachers</a>
                                </li>
                                <li className="nav-item col">
                                    <a className="nav-link" data-toggle="tab" href="#custom" role="tab">Customized Curriculum</a>
                                </li>
                                <li className="nav-item col">
                                    <a className="nav-link" data-toggle="tab" href="#online" role="tab">Online Platform</a>
                                </li>
                                <li className="nav-item col">
                                    <a className="nav-link" data-toggle="tab" href="#support" role="tab">Support Team</a>
                                </li>
                            </ul>

                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="teachers" role="tabpanel">
                                    Raw denim you probably haven't heard of them jean shorts Austin.
                                    Nesciunt tofu stumptown aliqua, retro synth master cleanse. 
                                    Mustache cliche tempor, williamsburg carles vegan helvetica.
                                     Reprehenderit butcher retro keffiyeh dreamcatcher synth. 
                                     Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                                      Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                                       american apparel, butcher voluptate nisi qui.
                                </div>
                                <div className="tab-pane fade" id="custom" role="tabpanel">
                                    Raw denim you probably haven't heard of them jean shorts Austin.
                                    Nesciunt tofu stumptown aliqua, retro synth master cleanse. 
                                    Mustache cliche tempor, williamsburg carles vegan helvetica.
                                    Reprehenderit butcher retro keffiyeh dreamcatcher synth. 
                                    Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                                    Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                                    american apparel, butcher voluptate nisi qui.
                                </div>
                                <div className="tab-pane fade" id="online" role="tabpanel">
                                    Raw denim you probably haven't heard of them jean shorts Austin.
                                    Nesciunt tofu stumptown aliqua, retro synth master cleanse. 
                                    Mustache cliche tempor, williamsburg carles vegan helvetica.
                                    Reprehenderit butcher retro keffiyeh dreamcatcher synth. 
                                    Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                                    Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                                    american apparel, butcher voluptate nisi qui.
                                </div>
                                <div className="tab-pane fade" id="support" role="tabpanel">
                                    Raw denim you probably haven't heard of them jean shorts Austin.
                                    Nesciunt tofu stumptown aliqua, retro synth master cleanse. 
                                    Mustache cliche tempor, williamsburg carles vegan helvetica.
                                    Reprehenderit butcher retro keffiyeh dreamcatcher synth. 
                                    Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                                    Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                                    american apparel, butcher voluptate nisi qui.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="achivement">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-12">
                                <div className="achivement-content">
                                    <h3>Our's <span>achivement</span></h3>
                                    <p>
                                        At Quick Sell Your Car, we work to a strict time limit
                                        and can buy your car on the day of your appointment. We
                                        are one of the largest online car buyers and so can buy
                                        cars for cash which means that you will receive your payment
                                        within 24 hours of your visit. The money will be transferred
                                        directly into your bank account by direct BACS payment meaning no
                                        cheques or fraudulent notes to worry about; the process will be stress free.
                                    </p>
                                    <div className="achivement-counter">
                                        <div className="row">
                                            <div className="col-md-3 col-12">
                                                <div className="counter-content">
                                                    <div className="counter-content-count counter">300</div>
                                                    <div className="counter-content-title">Students</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-12">
                                                <div className="counter-content">
                                                    <div className="counter-content-count counter">125</div>
                                                    <div className="counter-content-title">Facebook Likes</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-12">
                                                <div className="counter-content">
                                                    <div className="counter-content-count counter">200</div>
                                                    <div className="counter-content-title">Sessions</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-12">
                                                <div className="counter-content">
                                                    <div className="counter-content-count counter">400</div>
                                                    <div className="counter-content-title">Tutors</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className="achivement-exper">
                                    <img src="" alt="" />
                                    <div className="content">
                                        <p>10</p>
                                        <p>Years of experience <br /> in this industry</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Partner />
            </Fragment>
        );
    }
}

export default Home;