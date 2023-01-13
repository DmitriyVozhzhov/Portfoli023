import React from "react";

const Header = () => {
	return (  
		<header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Dmytro Vozhzhov</em></strong><br />
                I'm  a frontend developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and great sense of humor.</p>
            </div>
            <a href="#!" className="btn">Download CV</a>
        </div>
    </header>

	);
}
 
export default Header;