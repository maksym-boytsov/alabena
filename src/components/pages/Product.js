import React from 'react';

const Product = (props) => {
    return (
        <div className='col-6 col-sm-4 col-lg-2 my-2'>
            <img className='products-icon' src={props.img} alt=""/>
            <h4 className='products-text'>{props.title}</h4>
        </div>
    );
};

export default Product;
