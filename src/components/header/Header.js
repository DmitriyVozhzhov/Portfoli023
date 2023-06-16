import React from "react";
import CV from '../../img/cv/VozhzhovDmytroFrontendCV.pdf'
import Typed from "typed.js";
import { useEffect, useRef } from "react";


const Header = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Web Developer", "Ukrainian", "Frontend Developer"], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 300,
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 100
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);
	return (  
		<header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Dmytro Vozhzhov</em></strong><br />
                I'm  a <span ref={el}></span>
            </h1>
            <div className="header__text">
                <p>with passion for learning and great sense of humor.</p>
            </div>
            <a href={CV} download className="btn">Download CV</a>
        </div>
    </header>

	);
}
 
export default Header;