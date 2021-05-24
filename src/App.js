import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Bio from './Bio';
import Pinturas from './Pinturas';
import Carrusel from './Carrusel';
import Noticias from './Noticias';
import Contacto from './Contacto';
import Legales from './Legales';
import CookieConsent from 'react-cookie-consent';
import { useTranslation} from 'react-i18next';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <div className="App">
            <Route path="/" exact component={Carrusel} />
            <Route path="/bio" component={Bio} />
            <Route path="/pinturas" component={Pinturas} />
            <Route path="/noticias" component={Noticias} />
            <Route path="/contacto" component={Contacto} />
            <Route path="/legales" component={Legales} />
          </div>
        </Switch>

      </Router>
      <CookieConsent
        enableDeclineButton flipButtons
        debug={false}
        location="bottom"
        style={{ color: 'white', background: 'black', opacity: '0.9'}}
        buttonText={t("cookies.aceptar")}
        declineButtonText={t("cookies.rechazar")}
        >
         {t("cookies.titulo")}{t("cookies.contenido")}
         <a style={{color: 'yellow'}} href="/legales">{t("cookies.link")}</a>
      </CookieConsent>
    </div>


  );
}




export default App;
