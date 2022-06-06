import { useEffect } from "react";
import { NavLink, useLocation  } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';
import React from 'react';

function Nav() {

    const location = useLocation().pathname;
    console.log(location)
    useEffect(() => {
            const locationName = location === '/' ? "John's Profile": capitalizeFirstLetter(location.slice(1))
        document.title = locationName;
    }, [location]);

  return (
    <header className="flex-row px-1">
      <h1>
        <a className="title" href="/">
          John Fulghieri
        </a>
      </h1>
      <nav>
        <ul className='navButtons flex-row' >
            <li className={` navBtn mx-2`} >
                <NavLink className='navBtnLink' to="/">About</NavLink>
            </li>
            <li className={` navBtn mx-2`} >
                <NavLink className='navBtnLink' to="/portfolio">Portfolio</NavLink>
            </li>
            <li className={` navBtn mx-2`} >
                <NavLink className='navBtnLink' to="/contact">Contact</NavLink>
            </li>
            <li className={` navBtn mx-2`} >
                <NavLink className='navBtnLink' to="/resume">Resume</NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;