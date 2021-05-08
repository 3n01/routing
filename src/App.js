    import './App.css';
import React , {useState, useEffect} from 'react';
import Nav from './Nav';
import Bio from './Bio';
import Pinturas from './Pinturas';
import Carrusel from './Carrusel';
import Noticias from './Noticias';
import Contacto from './Contacto';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
        <Nav />
        <Switch>
          <div className="App">
            <Route path="/" exact component={Carrusel} />
            <Route path="/bio" component={Bio} />
            <Route path="/pinturas" component={Pinturas} />
            <Route path="/noticias" component={Noticias} />
            <Route path="/contacto" component={Contacto} />
          </div>
        </Switch>

    </Router>


  );
}




export default App;
