import React, { useState } from 'react'
import '../assets/css/Header.css'
import { Link } from 'react-router-dom'

function Header() {

    const [isAdminPanel, setIsAdminPanel] = useState(false);

    const handleAdminClick = () => {
        setIsAdminPanel(true);
    }

    return (
        <header className='header'>
            <div>
                <h1>Movie App</h1>
            </div>
            <div className='nav-links'>
                <h2><Link to="/">Movies</Link></h2>
                <h2><Link to="admin/add-movie" >Add Movie</Link></h2>
                <h2><Link to="admin/manage-movie" >Manage Movie</Link></h2>
            </div>
        </header>
    )
}

export default Header