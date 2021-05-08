import React from 'react';
import {Link } from 'react-router-dom';

function Nav(){

    const navStyle = {
        color : 'gray',
        fontWeight : 'bold',
        fontSize: '15px',
        textDecoration: 'none'
    }

    const mainNavStyle = {
        color : 'gray',
        fontWeight : 'bold',
        fontSize: '16px',
        textDecoration: 'none'
    }

    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link  style={mainNavStyle} to="/">EFRÉN GARCÍA IGLESIAS</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-links">
              <li class="nav-item"></li>
              <li class="nav-item"></li>
              <li class="nav-item"></li>
              <li class="nav-item">
                <Link  style={navStyle} to="/bio"><li>BIO</li></Link>
              </li>
              <li class="nav-item">
                <Link  style={navStyle} to="/pinturas"><li>PINTURAS</li></Link>
              </li>
                <li class="nav-item">
                    <Link  style={navStyle} to="/noticias"><li>NOTICIAS</li></Link>
                </li>
              <li class="nav-item">
                   <Link  style={navStyle} to="/contacto"><li>CONTACTO</li></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
/*        <nav>
            <ul className="nav-links">
                <Link  style={navStyle} to="/"><li>EFRÉN GARCÍA IGLESIAS</li></Link>
                <Link  style={navStyle} to="/bio"><li>BIO</li></Link>
                <Link  style={navStyle} to="/pinturas"><li>PINTURAS</li></Link>
                <Link  style={navStyle} to="/noticias"><li>NOTICIAS</li></Link>
                <Link  style={navStyle} to="/contacto"><li>CONTACTO</li></Link>
            </ul>
        </nav>*/
    )
}

export default Nav