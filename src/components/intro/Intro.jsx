import React from 'react';
import { FaMobile , FaArrowAltCircleRight} from 'react-icons/fa';

const Intro = () => {
    return (
        <div className='intro-container'>
            <h1>Madagascar Store</h1>
            <h2>Plateforme Malagasy de vente </h2>
            <div className="text-container">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, facilis fuga? Reprehenderit dolorem explicabo earum 
                    quis vitae perspiciatis at quasi unde, corrupti vel accusamus ipsum commodi cupiditate? Dolore, fugiat dolorem.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex recusandae dolorem non in quidem veniam, quisquam iusto 
                    tempora, magni, quae harum alias sed. Cum, maiores consequuntur. Consequuntur saepe aspernatur repellat?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore ipsam rerum officiis, pariatur perspiciatis
                     tenetur magni! Ipsam neque quam eum, animi rerum amet eius, corporis, quae consequuntur obcaecati tempore.
                </p>
            </div>
            <div className="btns-container">

            <button className='start-btn'>Commencer <FaArrowAltCircleRight className='arrow'/></button>
            <button className='start-btn'>Sur Mobile <FaMobile /></button>
            </div>
           
        </div>
    );
}

export default Intro;
