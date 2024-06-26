import xxx from '/xxx.png'
import { FaShopify } from 'react-icons/fa';
// import Link  from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="logo">
               
                    <img className='logo-img' width={100} height={100} src={xxx} alt="" /><h3 className="logo-title">  MG-Store </h3>
               
            </div>
            <div className="link">
                {/* <Link to="">Acceuil</Link>
                <Link to="}>Articles</Link>
                <Link to="></Link>
                <Link to=""></Link>
                <Link to=""></Link> */}
                <a href="">Acceuil</a>
                <a href="">Articles</a>
                <a href="">Ventes</a>
                <a href="">Blog</a>
            </div>
            <div className="profil-parameters">

                <div className="profil-container">
                        <img src={xxx} alt="" />
                </div>   
                <div className="shop">
                    <FaShopify />
                </div>
            </div>
         
        </div>
    );
}

export default Header;
