import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (     
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__logo">
                    <Link to="/">
                        <img src="/imgs/brandLogo/Logo Perichon no slogan.jpg" alt="brand Logo" className="brandLogoHeader"/>
                    </Link>
                </div>

                <div className="footer__quickMenu">                    
                    <ul className="quickMenu__content">
                        <li className="quickMenu__title">
                            <h4>Quick Menu</h4>
                        </li>
                        <li className="quickMenu__item">
                            <Link to="/">Todos</Link>
                        </li>
                        <li className="quickMenu__item">
                            <Link to="/category/trapos">Trapos</Link>
                        </li>
                        <li className="quickMenu__item">
                            <Link to="/category/rejilla">Rejillas</Link>
                        </li>
                        <li className="quickMenu__item">
                         <Link to="/category/paño">Paños</Link>
                        </li>
                        <li className="quickMenu__item">
                            <Link to="/category/franela">Franela</Link>
                        </li>
                    </ul>
                </div>

                <ul className="footer__socialMedia">
                    <li className="socialMedia__item">
                        <a className="socialMedia__item-content a" href="https://wa.me/543794809317">
                            <img className="a__img" src="/imgs/footerImg/whatsapp.png" alt="whatsapp icon"/>
                        </a>
                    </li>
                    <li className="socialMedia__item">
                        <a className="socialMedia__item-content a" href="https://www.instagram.com/trapos_perichon/">
                            <img className="a__img" src="/imgs/footerImg/instagram.png" alt="instagram icon"/>
                        </a>
                    </li>
                    <li className="socialMedia__item">
                        <a className="socialMedia__item-content a" href="https://www.facebook.com/traposperichon">
                            <img className="a__img" src="/imgs/footerImg/facebook.png" alt="facebook icon"/>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="footer__rights">
                <span></span>
                <div >
                    <p className="rights__text">
                        © 2023 PERICHON Todos los derechos reservados - by <a href="https://github.com/BernardoQ">BERQ</a>
                    </p>          
                </div>
            </div>
        </footer>    
    );
  }
  
  export default Footer;