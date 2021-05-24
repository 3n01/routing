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
        textDecoration: 'none',

    }

    const dropDownStyle = {
         color : 'gray',
        fontWeight : 'bold',
        fontSize: '14px',
        textDecoration: 'none'
    }

    const checkedTab = {
      color : 'gray',
      fontWeight : 'bold',
      fontSize: '16px',
      textDecoration: 'none',
      background: 'red'
    }

    return(
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="hover-gray" style={mainNavStyle} to="/">EFRÉN GARCÍA IGLESIAS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-links">
              <li className="nav-item"></li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
              <li className="nav-item hover-gray">
                <Link  style={navStyle} to="/bio"><li>BIO</li></Link>
              </li>
              <li className="nav-item hover-gray">
                <Link  style={navStyle} to="/pinturas"><li>{t("nav.pinturas")}</li></Link>
              </li>
                <li className="nav-item hover-gray">
                    <Link  style={navStyle} to="/noticias"><li>{t("nav.noticias")}</li></Link>
                </li>
              <li className="nav-item hover-gray">
                   <Link  style={navStyle} to="/contacto"><li>{t("nav.contacto")}</li></Link>
              </li>
               <li className="nav-item">
                    <Dropdown>
                      <Dropdown.Toggle style={dropDownStyle} variant="" id="dropdown-basic">
                        {t("nav.idioma")}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item style={dropDownStyle} onClick={ () => i18n.changeLanguage("es")}>ESPAÑOL</Dropdown.Item>
                        <Dropdown.Item style={dropDownStyle} onClick={ () => i18n.changeLanguage("en")}>ENGLISH</Dropdown.Item>
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