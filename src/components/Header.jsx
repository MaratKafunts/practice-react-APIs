import React from 'react'
import headerPic from './headerPic.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <header className="div-header">
                <img src={headerPic} alt="" />
                <div className="header-buttons">
                    <NavLink to={'/stati'} className="header-button">Articles</NavLink>
                    <NavLink to={'/info'} className="header-button">Inforamtion</NavLink>
                    <NavLink to={'/otzivi'} className="header-button">Reviews</NavLink>
                </div>
        </header>
    )
}

export default Header