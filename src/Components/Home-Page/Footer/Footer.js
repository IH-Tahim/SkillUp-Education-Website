import React from 'react';
import logo from '../../../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faFacebookMessenger, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <footer className="bg-dark pt-4 pb-2 text-center position-relative mt-2">

            <img src={logo} alt="" width="250px" className="" />
            <div className="d-block mt-2">
                <button className="btn btn-secondary rounded-circle mx-2"><FontAwesomeIcon icon={faFacebook} size="lg" /></button>
                <button className="btn btn-secondary rounded-circle mx-2"><FontAwesomeIcon icon={faInstagram} size="lg" /></button>
                <button className="btn btn-secondary rounded-circle mx-2"><FontAwesomeIcon icon={faFacebookMessenger} size="lg" /></button>
                <button className="btn btn-secondary rounded-circle mx-2"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></button>
            </div>
            <p className="text-secondary copywrite">Copywrite &copy;2021 Made With ❤️ By Tahim</p>

        </footer>
    );
};

export default Footer;