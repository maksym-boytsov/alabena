import React from 'react';
import translation from "../translate.json";
import {Translate, withLocalize} from "react-localize-redux";

import Truck from '../images/graphics/oil-truck.png';
import Ship from '../images/graphics/cargo-ship.png';
import Products from "./Products";

const About = (props) => {
    props.addTranslation(translation);
    return (
        <>
            <section id='about' className='container'>
                <div className='about'>
                    <h1 className='about-back text-center'>
                        <Translate id="about.back"/>
                    </h1>
                    <h1 className='about-title'>
                        <Translate id="about.title.first"/>
                    </h1>
                    <div className='text-center'>
                        <p>
                            <Translate id='about.text.first'/>
                        </p>
                        <p>
                            <Translate id='about.text.second'/>
                        </p>
                    </div>
                    <h1 className='about-title text-right'>
                        <Translate id="about.title.second"/>
                    </h1>
                </div>
                <hr/>
                <div className='row px-5'>
                    <div className='col-12 col-md-6'>
                        <img className='responsive-img w100' src={Truck} alt=""/>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='about-block'>
                            <h1>
                                <Translate id="about.block.first.title"/>
                            </h1>
                            <p>
                                <Translate id="about.block.first.text.first"/>
                            </p>
                            <p>
                                <Translate id="about.block.first.text.second"/>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Products/>
            <div className='container'>
                <div className='row px-5 mt-5'>
                    <div className='col-12 col-md-6 order-2 order-md-1'>
                        <div className='about-block'>
                            <h1>
                                <Translate id="about.block.second.title"/>
                            </h1>
                            <p>
                                <Translate id="about.block.second.text.first"/>
                            </p>
                            <p>
                                <strong>
                                    <Translate id="about.block.second.text.second"/>
                                </strong>
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 order-1 order-md-2'>
                        <img className='responsive-img w100' src={Ship} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withLocalize(About);
