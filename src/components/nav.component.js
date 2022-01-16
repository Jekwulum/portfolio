import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

import './nav.component.css';

const Nav = () => {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);

    return(
        <div>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo"><strong>&lt;Charles /&gt;</strong></NavLink>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <NavLink exact to="/" onClick={handleClick} activeClassName="active" className="nav-links">HOME</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to="/skills" onClick={handleClick} activeClassName="active" className="nav-links">SKILLS</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to="/projects" onClick={handleClick} activeClassName="active" className="nav-links">PROJECTS</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to="/contact-me" onClick={handleClick} activeClassName="active" className="nav-links">CONTACT ME</NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;