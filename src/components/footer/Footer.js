import React from 'react'
import telegram from '../../img/icons/telegram.svg'
import gitHub from '../../img/icons/gitHub.svg'
import instagram from '../../img/icons/instagram.svg'
import linkedIn from '../../img/icons/linkedIn.svg'

const Footer = () => {
	return ( 
<footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://www.instagram.com/dmitriy.vozhzhov/"><img src={instagram} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://t.me/dzim4ik1"><img src={telegram} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://github.com/DmitriyVozhzhov"><img src={gitHub} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/dmitriy-vozhzhov-56291415a/"><img src={linkedIn} alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                    <p>2023</p>
                </div>
            </div>
        </div>
    </footer>

	 );
}
 
export default Footer;