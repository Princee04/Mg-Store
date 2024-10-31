import React from "react"
import Carousel from "react-bootstrap/Carousel"
import images from "../../images/image1.webp"
import image2 from "../../images/image2.jpeg"
import image3 from "../../images/image3.jpeg"

const Caroussel = () => {
  return (
    <Carousel
      interval={3000}
      fade
      className="shadow-lg rounded"
      style={{ marginBottom: "20px" }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={image3}
          alt="First slide"
          style={{
            height: "400px",
            objectFit: "cover",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
          <h3>Vêtements</h3>
          <p>Vendre tout article vestimentaire.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={images}
          alt="Second slide"
          style={{
            height: "400px",
            objectFit: "cover",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
          <h3>Matériel Informatiques</h3>
          <p>Les matériels et outils informatiques sont les bienvenus.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={image2}
          alt="Third slide"
          style={{
            height: "400px",
            objectFit: "cover",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
          <h3>Alimentaires</h3>
          <p>On dit pas non à la nourriture, soyez rassuré.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Caroussel
