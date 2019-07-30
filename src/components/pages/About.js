import React from 'react';
import Truck from '../../images/oil-truck.png';
import Ship from '../../images/cargo-ship.png'
import Products from "./Products";

const About = () => {
    return (
        <>
            <div className='container'>
                <div className='row px-5'>
                    <div className='col-12 col-md-6'>
                        <img className='responsive-img w100' src={Truck} alt=""/>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='about-block'>
                            <h1>Amazing business offers for you</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi cupiditate delectus
                                dicta fuga porro possimus qui quos repellat, voluptas!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, pariatur!</p>
                            <button className='next-btn'>Go next</button>
                        </div>
                    </div>
                </div>
            </div>
            <Products/>
            <div className='container'>
                <div className='row px-5 mt-5'>
                    <div className='col-12 col-md-6 order-2 order-md-1'>
                        <div className='about-block'>
                            <h1>We can do more together</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi cupiditate delectus
                                dicta fuga porro possimus qui quos repellat, voluptas!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, pariatur!</p>
                            <button className='next-btn'>Discover our products</button>
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

export default About;
