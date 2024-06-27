import React from 'react';
import { FaMobile , FaArrowAltCircleRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

            <Link className='test' to="/articles"><button id='start' className='start-btn '>Commencer <FaArrowAltCircleRight className='arrow'/></button></Link>
            <Link  className='test2' to="/telechargements"><button className='start-btn'>Sur Mobile <FaMobile /></button></Link>
            </div>
           
        </div>
    );
}

export default Intro;
