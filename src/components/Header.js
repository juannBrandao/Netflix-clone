import React from 'react'
import './Header.css'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"  alt="Netflix" />
                </a>
            </div>
            <div className="header-user">
                <a href="/">
                    <img src="https://exitoina.uol.com.br/media/_versions/thor_kYHi90f_widelg.jpg" alt="Usuario" />
                </a>

            </div>
        </header>
    )
}