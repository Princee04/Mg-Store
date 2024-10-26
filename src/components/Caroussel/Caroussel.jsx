import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import images from '../../images/image1.webp'
import image2 from '../../images/image2.jpeg'
import image3 from '../../images/image3.jpeg'
const style = {
    img:{width:'100%', height:'30vh'},
    carr:{width:'100%', height:'20vh'}
}
const Caroussel = () => {
    return (
     
    <Carousel   data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block"
          src={image3}
          style={style.img}

          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Vetements</h5>
          <p>Vendre toute articles vestimentaires.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={images}
          style={style.img}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Materiel Informatiques</h5>
          <p>Les materiels et Outils Informatiques sont les bienvenues.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block "
          src={image2}
          style={style.img}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Alimentaires</h5>
          <p>
           On dit pas non à la nourritures soyez rassurée.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
    );
}

export default Caroussel;
