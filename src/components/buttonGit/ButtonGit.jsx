import React from 'react';

import './style.css'
import gitHubIcon from '../../img/icons/gitHub-black.svg'

const ButtonGit = ({link}) => {
	return ( 
		<a href={link} target="blank" className="btn-outline">
		<img src={gitHubIcon} alt="ss" />
		GitHub repo
</a>

	 );
}
 
export default ButtonGit ;