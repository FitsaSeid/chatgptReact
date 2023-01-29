import React from 'react'
import logo from '../img/chatgptEthiopia.png'

function Header() {
    return (
        <header className='nav-top'>
            <img src={logo} alt="logo" />
            <div class="ds-text-button">
                <a href="/chatgpt">Goto ChatGPT</a>
            </div>
        </header>
    )
}

export default Header