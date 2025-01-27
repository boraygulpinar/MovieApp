import React from 'react'
import '../assets/css/Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <div>
                <h1>Movie App</h1>
            </div>
            <div className='nav-links'>
                <h2><Link to="/">Filmler</Link></h2>
                <h2><Link to="add-movie" >Film Ekle</Link></h2>
                <h2><Link to="manage-movie" >Manage Movie</Link></h2>
            </div>
        </header>
    )
}

export default Header