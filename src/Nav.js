import React from 'react';
import {Link } from 'react-router-dom';
import { useTranslation} from 'react-i18next';
import './App.css';
import { Dropdown } from 'react-bootstrap';

function Nav(){
    const [t, i18n] = useTranslation("global");

    const navStyle = {
        color : 'gray',
        fontWeight : 'bold',
        fontSize: '15px',
        textDecoration: 'none',
        borderBottom: '1px solid gray'
    }

    const mainNavStyle = {
        color : 'gray',
        fontWeight : 'bold',
        fontSize: '16px',
        textDecoration: 'none'
    }

    return(
      <nav class="navbar navbar-expand-lg navbar-light">
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
                <Link  style={navStyle} to="/pinturas"><li>{t("nav.pinturas")}</li></Link>
              </li>
                <li class="nav-item">
                    <Link  style={navStyle} to="/noticias"><li>{t("nav.noticias")}</li></Link>
                </li>
              <li class="nav-item">
                   <Link  style={navStyle} to="/contacto"><li>{t("nav.contacto")}</li></Link>
              </li>
               <li class="nav-item">
                    <Dropdown>
                      <Dropdown.Toggle variant="" id="dropdown-basic">
                        {t("nav.idioma")}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={ () => i18n.changeLanguage("es")}>Español</Dropdown.Item>
                        <Dropdown.Item onClick={ () => i18n.changeLanguage("en")}>English</Dropdown.Item>
                        <Dropdown.Item onClick={ () => i18n.changeLanguage("fr")}>Français</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>


                </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav