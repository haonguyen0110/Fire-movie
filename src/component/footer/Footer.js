import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import logo from '../../assets/logo.png'
export default function Footer() {
    return (
        <div className="footer"
            style={{ backgroundImage: `url('../../assets/banner/banner01.jpg')` }}>

            <div className="footer__content container">

                <div className="footer__content__menus">
                  
                        <div className="footer__content__logo">
                            <div className="logo">
                                <img src={logo} alt="" />
                                <Link to="/">FireMovie</Link>
                            </div>
                        </div>
                  

                    <div className="footer__content__menu">
                        <p>Created by HaoNguyen</p>
                        <p><i class="fas fa-phone-alt"></i> (+84) 383850438</p>
                        <p><i class="far fa-envelope"></i> haonguyen011099@gmail.com</p>
                    </div>

                </div>


            </div>
        </div>
    )
}
