import React from 'react';
import Header from "../Header/Header"
import Caroussel from '../caroussel/Caroussel';


// import images from '../../../public/images.jpeg'
import "bootstrap/dist/css/bootstrap.min.css"

const Articles = () => {
    return (
        <div>
            <Header />
            <div className="caroussel-container">
                <Caroussel />
            </div>
        </div>
    );
}

export default Articles;

