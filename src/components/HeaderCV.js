import React from 'react'

import logo from '../assets/img/logo-transparent.png';

const Header = (props) => (
    <header id="header" className="alt">
         {/* Brand and toggle get grouped for better mobile display */}
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand scroll" href="/"><img src={logo} alt="Optimus Dental" /></a>
        </div>


    </header>
)

export default Header
