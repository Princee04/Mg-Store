import React from 'react';
import './product.css'
import img from '../../images/image2.jpeg'
const Product = () => {
    return (
        <div className='product-container'>
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-name">Nom du produit</div>
            <div className="product-price">Ar 102323</div>
            <div className="product-action">
                <button className='panier'>Panier</button>
                <button className='acheter'>Acheter</button>
            </div>
        </div>
    );
}

export default Product;
