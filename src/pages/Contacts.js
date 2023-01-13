import React from "react";

export const Contacts = () => {
	return ( 
		<main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Kyiv, Ukraine</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / Viber / etc.</h2>
                        <p><a href="tel:+380683131451">+38 (068) 31-31-451</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:dmitriy.vozhzhov@gmail.com">dmitriy.vozhzhov@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
	 );
}
 
