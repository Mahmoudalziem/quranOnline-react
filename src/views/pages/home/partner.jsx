import React, { Component, Fragment } from 'react';

/// owl Carousel

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


//// Import Images Partners

import part1 from '../../../assets/images/partners/bmw.jpg';

import part2 from '../../../assets/images/partners/chevr.jpg';

import part3 from '../../../assets/images/partners/ford.jpg';

import part4 from '../../../assets/images/partners/jeep.jpg';

import part5 from '../../../assets/images/partners/jeep.jpg';


const Part = ({image}) => (

    <div className="item">
        <div className="partners_content_image">
            <img src={image} alt="Partners_image" />
        </div>
    </div>
);

class Partner extends Component {


    render() {
        return (
            <Fragment>

                <div className="partners_content">
                    <div className="container">
                        <h3 className="partners_header">
                            Our <span>Partners</span>
                        </h3>
                        <div className="our-partenrs">
                            <OwlCarousel className="home-slider owl-carousel owl-loaded owl-theme owl-drag" loop items={5}>
                                <Part image={part1} />
                                <Part image={part2} />
                                <Part image={part3} />
                                <Part image={part4} />
                                <Part image={part5} />
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Partner;