import React from 'react';
import Product from './Product';
import AnimalIcon from '../../images/icons/animal-fat.png'
import FishIcon from '../../images/icons/fish.png'
import BioIcon from '../../images/icons/biodiesel.png'
import AcidIcon from '../../images/icons/acids.png'
import VegetableIcon from '../../images/icons/vegetable.png'
import ByprodIcon from '../../images/icons/by-prod.png'

const prods = [
    {title: 'Biodiesel', img: BioIcon},
    {title: 'Animal Fat', img: AnimalIcon},
    {title: 'Fish Fat', img: FishIcon},
    {title: 'Vegetable Oil', img: VegetableIcon},
    {title: 'By-products of oil', img: ByprodIcon},
    {title: 'Fatty acids', img: AcidIcon},
];

function Products() {
    return (
        <div className='products'>
            <div className="row container mx-auto text-center">
                    {prods.map((prod) => (
                        <Product key={prod.title} title={prod.title} img={prod.img}/>
                    ))}
            </div>
        </div>
    );
}

export default Products;
