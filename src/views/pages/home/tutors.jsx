import React, { Component } from 'react';

//// Tutors

import tutor1 from '../../../assets/images/tutors/unnamed.png';

import tutor2 from '../../../assets/images/tutors/abdelabst.jpg';

import tutor3 from '../../../assets/images/tutors/download (1).jpeg';

import tutor4 from '../../../assets/images/tutors/download (2).jpeg';

import tutor5 from '../../../assets/images/tutors/download.jpeg';

import tutor6 from '../../../assets/images/tutors/hza.jpg';

import tutor7 from '../../../assets/images/tutors/images.jpeg';

import tutor8 from '../../../assets/images/tutors/als.jpg';

const Tutor = ({column,image,name,href}) => (
    <div className={column}>
        <div className="tutor-content">
            <div className="tutor-image">
                <img src={image} alt=""/>
            </div>
            <div className="tutor-details">
                <p>{name}</p>
                <a className="btn" href={href}>
                    <i className="fa fa-arrow-circle-right"></i>
                    Show Tutor
                </a>
            </div>
        </div>
    </div>
);

class Tutors extends Component{
    render() {
        return (
            <section className="tutors">
                <div className="container-fluid">
                    
                    <div className="row">
                        <Tutor column="col" image={tutor1} name="Mahmoud Abd Alziem" href="ahmed" />
                        <Tutor column="col" image={tutor2} name="Mahmoud Abd Alziem" href="ahmed" />
                        <Tutor column="col" image={tutor8} name="Mahmoud Abd Alziem" href="ahmed" />
                        <Tutor column="col" image={tutor4} name="Mahmoud Abd Alziem" href="ahmed" />
                        <Tutor column="col" image={tutor5} name="Mahmoud Abd Alziem" href="ahmed" />
                        <Tutor column="col" image={tutor6} name="Mahmoud Abd Alziem" href="ahmed" />
                    </div>

                    <div className="row">
                        
                        <div className="col-md-4 col-12">
                            <div className="row">
                                <Tutor column="col-md-6 m-0 p-0" image={tutor6} name="Mahmoud Abd Alziem" href="ahmed" />
                                <Tutor column="col-md-6 m-0 p-0" image={tutor7} name="Mahmoud Abd Alziem" href="ahmed" />
                                <Tutor column="col-md-6 m-0 p-0" image={tutor8} name="Mahmoud Abd Alziem" href="ahmed" />
                                <Tutor column="col-md-6 m-0 p-0" image={tutor3} name="Mahmoud Abd Alziem" href="ahmed" />
                            </div>
                        </div>

                        <div className="col-md-4 col-12 m-0 p-0">
                            <div className="tutor-content-center">
                                Here Check The First Tutors To
                                apply With
                                     <br />
                                    Quoran Online
                                    <br />
                                    Platform
                                    <br />
                                <a href="#" className="btn">
                                    <i className="fa fa-arrow-circle-right"></i>
                                        Show All
                                    </a>
                            </div>
                        </div>

                        <div className="col-md-4 col-12">
                            <div className="row">
                                <Tutor column="col-md-6 m-0 p-0" image={tutor3} name="Mahmoud Abd Alziem" href="ahmed" />
                                <Tutor column="col-md-6 m-0 p-0" image={tutor5} name="Mahmoud Abd Alziem" href="ahmed" />
                                <Tutor column="col-md-6 m-0 p-0" image={tutor2} name="Mahmoud Abd Alziem" href="ahmed" />
                                <Tutor column="col-md-6 m-0 p-0" image={tutor1} name="Mahmoud Abd Alziem" href="ahmed" />
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <Tutor column="col" image={tutor1} name="Mahmoud Abd Alziem" href="ahmed" />
                        <Tutor column="col" image={tutor2} name="Mahmoud Abd Alziem" href="ahmed" />
                        <Tutor column="col" image={tutor8} name="Mahmoud Abd Alziem" href="ahmed" />
                        <Tutor column="col" image={tutor4} name="Mahmoud Abd Alziem" href="ahmed" />
                        <Tutor column="col" image={tutor5} name="Mahmoud Abd Alziem" href="ahmed" />
                        <Tutor column="col" image={tutor6} name="Mahmoud Abd Alziem" href="ahmed" />    
                    </div>

                </div>
            </section>
        );
    }
}

export default Tutors;