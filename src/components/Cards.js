import React from 'react';
import {Translate, withLocalize} from "react-localize-redux";
import translation from "../translate";

import AnimalImg from '../images/products/animal.jpg'
import AcidsImg from '../images/products/acids.jpg'
import BiodieselImg from '../images/products/biodiesel.jpg'
import ByprodImg from '../images/products/by_prod.jpg'
import FishImg from '../images/products/fish.jpg'
import VegetableImg from '../images/products/vegetable_oil.jpg'

function Cards(props) {
    props.addTranslation(translation);
    const card = [
        {
            name: 'animal',
            image: AnimalImg
        },
        {
            name: 'acids',
            image: AcidsImg
        },
        {
            name: 'biodiesel',
            image: BiodieselImg
        },
        {
            name: 'byproducts',
            image: ByprodImg
        },
        {
            name: 'fish',
            image: FishImg,
        },
        {
            name: 'vegetable',
            image: VegetableImg,
        }
    ];
    return (
        <section id='products'>
            <div className='container'>
                <h1 className='cardd'>
                    <Translate id="cards.title"/>
                </h1>
                <div className='row'>
                    {card.map(({image, name}, id) => (
                        <div key={id} className="col-12 col-sm-6 col-md-4">
                            <div id={name} className="card-item">
                                <img src={image} className="card-img-top" alt={name}/>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <Translate id={"cards."+ name +".title"}/>
                                    </h5>
                                    <p className="card-text">
                                        <Translate id={"cards."+ name +".text"}/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default withLocalize(Cards);
