import React from 'react';
import Header from '../Header/Header';
import "bootstrap/dist/css/bootstrap.min.css"

const Card = () => {
    return (
        <div>
            <Header page='panier'/>
            <div className="container mt-4">
                <h3 className='text-center text-success'>Votre Panier</h3>
                <div className="container shadow  mt-3">
                    <div className="row border">
                        <div className="col-8  p-2">
                            <div className="header">
                                <h5>Produit(s) - 5</h5>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4">
                                            <img className='card-img' src="" alt="" />
                                        </div>
                                        <div className="col-4">
                                            <p>Nom du produit</p>
                                            <p>Prix du produit</p>
                                            <p></p>
                                        </div>
                                        <div className="col-4">
                                           
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 border">
                            <div className="header p-2">
                                     <h5>Total</h5>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
           
        </div>
    );
}

export default Card;
