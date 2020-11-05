import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';

/// owl Carousel

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//// Import Images

import slider1 from '../../../assets/images/slider/slide1.jpg';

import slider2 from '../../../assets/images/slider/slide2.jpg';

import slider3 from '../../../assets/images/slider/slide3.jpg';

const Item = ({ image, header, content, link }) => (
    
    <div className="item">
        <div className="slider-body carousel-item active">
            <div className="slider-body-image">
                <img className="d-block w-100" src={image} alt="First slide" />
            </div>
            <div className="slider-body-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="body-content">
                                <h5>{header}</h5>
                                <p>{content}</p>
                                <NavLink to="/register" className="btn">Get Started Now</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
); 



class Slider extends Component{
    render(){
        return (
            <div className="slider-content">
                <OwlCarousel className="home-slider owl-carousel owl-loaded owl-theme owl-drag" loop items={1} margin={0}>

                    <Item image={slider1} header='Rent Car Sell Your Car is the place for you.'
                        content="Rent Car Sell Your Car is the place for you.
                                    We make the whole procedure incredibly simple
                                    so that our customers can have peace of mind."
                    />

                    <Item image={slider2} header='Rent Car Sell Your Car is the place for you.'
                        content="Rent Car Sell Your Car is the place for you.
                                    We make the whole procedure incredibly simple
                                    so that our customers can have peace of mind."
                    />

                    <Item image={slider3} header='Rent Car Sell Your Car is the place for you.'
                        content="Rent Car Sell Your Car is the place for you.
                                    We make the whole procedure incredibly simple
                                    so that our customers can have peace of mind."
                    />

                </OwlCarousel>

                <div className="slider-info">
                    <div className="container">
                        <div className="col-md-9 mx-auto">
                            <div className="row">
                                <div className="col-md-4 col-12">
                                    <div className="mail info">
                                        Email : mostafatarek@gmail.com
                                        </div>
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="phone info">
                                        Phone : <span>(020) 012 764 115 89</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="socail info">
                                        Follow us :
                                        <ul className="info-social">
                                            <li><NavLink to="#">
                                                <i className="fa fa-twitter"></i>
                                            </NavLink>
                                            </li>
                                            <li><NavLink to="#"><i className="fa fa-facebook"></i></NavLink></li>
                                            <li><NavLink to="#"><i className="fa fa-instagram"></i></NavLink></li>
                                            <li><NavLink to="#"><i className="fa fa-twitch"></i></NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Slider;