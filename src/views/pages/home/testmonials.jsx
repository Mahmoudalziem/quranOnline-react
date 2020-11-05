import React, { Component, Fragment } from 'react';

/// owl Carousel

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

///// Import Images testmonials


import test1 from '../../../assets/images/testmonials/1.jpg';

import test2 from '../../../assets/images/testmonials/2.jpg';

import test3 from '../../../assets/images/testmonials/3.jpg';

import test4 from '../../../assets/images/testmonials/4.jpg';

const Test = ({image,name,title,content}) => (

    <div className="item">
        <div className="body-content">
            <div className="content-image">
                <img src={image} alt="" />
            </div>
            <div className="content-qoute">
                <i className="fa fa-quote-right"></i>
            </div>
            <div className="content-name">
                {name} <span>{title}</span>
            </div>
            <div className="content-details">{content}</div>
        </div>
    </div>
);

class Testmonials extends Component {


    render() {
        return (
            <Fragment>
                <section className="testmonials">
                    <div className="testmoni-body">
                        <h3>More <span>25,600</span> Happy Clients</h3>
                        <div className="container">
                            <OwlCarousel className="testmonials-body owl-carousel owl-loaded owl-theme owl-drag" loop items={2} margin={20}>

                                <Test image={test1} name="Eng/Enas" title="Software Engineer"
                                    content="Excellent and prompt  customer service.
                                            A truly professional car rental company.
                                            Cars are in up-to-date condition. In case of emergency,
                                            the response from the team is quick,"
                                />

                                <Test image={test2} name="Eng/Enas" title="Software Engineer"
                                    content="Excellent and prompt  customer service.
                                            A truly professional car rental company.
                                            Cars are in up-to-date condition. In case of emergency,
                                            the response from the team is quick,"
                                />

                                <Test image={test3} name="Eng/Enas" title="Software Engineer"
                                    content="Excellent and prompt  customer service.
                                            A truly professional car rental company.
                                            Cars are in up-to-date condition. In case of emergency,
                                            the response from the team is quick,"
                                />

                                <Test image={test4} name="Eng/Enas" title="Software Engineer"
                                    content="Excellent and prompt  customer service.
                                            A truly professional car rental company.
                                            Cars are in up-to-date condition. In case of emergency,
                                            the response from the team is quick,"
                                />
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Testmonials;