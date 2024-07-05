import React from 'react';
import Header from "../Header/Header"
import Caroussel from '../caroussel/Caroussel';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../product/Product';



// import images from '../../../public/images.jpeg'
import "bootstrap/dist/css/bootstrap.min.css"

const Articles = () => {
    return (
        <div>
            <Header page='articles'/>
            <div className="caroussel-container">
                <Caroussel />
            </div>

            <div className="container mt-4">
                <h3 className='text-center text-success mb-3'>Listes Des Articles</h3>
                <div className="row">
                    <div className="col-1 mx-2"><button className='btn btn-success'>Rechercher</button></div>
                    <div className="col-4">
                     <input type="text" className="form-control" placeholder='trouver un article specifique ici...' />
                    </div>
                    <div className="col-6">
                            <ListGroup horizontal>
                      
                            <ListGroup.Item id='active-filtre'>Tout</ListGroup.Item>
                            <ListGroup.Item>Vetements</ListGroup.Item>
                            <ListGroup.Item>Chaussures</ListGroup.Item>
                            <ListGroup.Item>Informatiques</ListGroup.Item>
                            </ListGroup>
                    </div>
                </div>
                <div className="container p-4 d-flex flex-wrap gap-3">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="container text-center">
                    <button className='btn btn-success'>Plus</button>
                </div>
            </div>
        </div>
    );
}

export default Articles;

