import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (     
        <footer class="footer">
            <div class="footer__content">
                <div class="footer__logo">
                    <a href="./index.html" class="text-decoration-none">
                        <img class="logoFooter" src="/imgs/brandLogo/Logo Perichon no slogan.jpg" alt="Perichon brand logo"/>
                    </a> 
                </div>

                <div class="footer__quickMenu">                    
                    <ul class="quickMenu__content">
                        <li class="quickMenu__title">
                            <h4>Quick Menu</h4>
                        </li>
                        <li class="quickMenu__item">
                            <Link to="/">Todos</Link>
                        </li>
                        <li class="quickMenu__item">
                            <Link to="/category/trapos">Trapos</Link>
                        </li>
                        <li class="quickMenu__item">
                            <Link to="/category/rejilla">Rejillas</Link>
                        </li>
                        <li class="quickMenu__item">
                         <Link to="/category/paño">Paños</Link>
                        </li>
                        <li class="quickMenu__item">
                            <Link to="/category/franela">Franela</Link>
                        </li>
                    </ul>
                </div>

                <ul class="footer__socialMedia">
                    <li class="socialMedia__item">
                        <a class="socialMedia__item-content a" href="https://wa.me/543794809317">
                            <img class="a__img" src="/imgs/footerImg/whatsapp.png" alt="whatsapp icon"/>
                        </a>
                    </li>
                    <li class="socialMedia__item">
                        <a class="socialMedia__item-content a" href="https://www.instagram.com/trapos_perichon/">
                            <img class="a__img" src="/imgs/footerImg/instagram.png" alt="instagram icon"/>
                        </a>
                    </li>
                    <li class="socialMedia__item">
                        <a class="socialMedia__item-content a" href="https://www.facebook.com/traposperichon">
                            <img class="a__img" src="/imgs/footerImg/facebook.png" alt="facebook icon"/>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footer__rights">
                <span></span>
                <div >
                    <p class="rights__text">
                        © 2023 PERICHON Todos los derechos reservados - by <a href="https://github.com/BernardoQ">BERQ</a>
                    </p>          
                </div>
            </div>
        </footer>    
    );
  }
  
  export default Footer;