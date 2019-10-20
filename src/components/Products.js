import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Translate, withLocalize} from "react-localize-redux";
import translation from "../translate";

import AnimalIcon from '../images/icons/animal-fat.svg'
import FishIcon from '../images/icons/fish-fat.svg'
import BioIcon from '../images/icons/biodiesel.svg'
import AcidIcon from '../images/icons/acids.svg'
import VegetableIcon from '../images/icons/vegetable.svg'
import ByprodIcon from '../images/icons/by-prod.svg'
import ReactSVG from "react-svg";

const prods = [
    {id: 1, to: '#animal', name: 'animal', img: AnimalIcon},
    {id: 2, to: '#acids', name: 'acids', img: AcidIcon},
    {id: 3, to: '#biodiesel', name: 'biodiesel', img: BioIcon},
    {id: 4, to: '#byproducts', name: 'byproducts', img: ByprodIcon},
    {id: 5, to: '#fish', name: 'fish', img: FishIcon},
    {id: 6, to: '#vegetable', name: 'vegetable', img: VegetableIcon},
];

function Products(props) {
    props.addTranslation(translation);
    return (
        <div className='products'>
            <div className="row container mx-auto text-center">
                {prods.map(prod => (
                    <div key={prod.id} className='col-6 col-md-4 col-lg-2'>
                        <AnchorLink href={prod.to}><ReactSVG className='products-icon' src={prod.img}
                                                             descr='icon'/></AnchorLink>
                        <h4 className='products-text'>
                            <Translate id={"cards." + prod.name + ".title"}/>
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default withLocalize(Products);
