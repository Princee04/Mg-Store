import xxx from '/xxx.png'
import { FaShoppingCart } from 'react-icons/fa';
import {Link}  from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="logo">
               
                    <img className='logo-img' width={100} height={100} src={xxx} alt="" /><h3 className="logo-title">  MG-Store </h3>
               
            </div>
            <div className="link">

                <Link style={{textDecoration:'none',color:'#13405a'}} to="/">Acceuil</Link>
                <Link style={{textDecoration:'none',color:'#13405a'}} to="">Articles</Link>
                <Link style={{textDecoration:'none',color:'#13405a'}} to="">Ventes</Link>
                <Link style={{textDecoration:'none',color:'#13405a'}} to="">Blog</Link>      
           
            </div>
            <div className="profil-parameters">
                    
                <div className="profil-container">
                    <img src={xxx} alt="" />
                </div>   
                <div className="shop">
                    <FaShoppingCart className='shoppingCart'  fill='grey'/>
                </div>
                <div className="menu">
                    <div className="un">Profil</div>
                    <div className="deux">Logout</div>
                </div>
            </div>
         
        </div>
    );
}

export default Header;
