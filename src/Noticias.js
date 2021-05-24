import './App.css';
import React , {useState, useEffect} from 'react';
import {LOCALHOST, PORT} from './constants';
import { useTranslation} from 'react-i18next';

function Noticias() {

  useEffect( () => {
    fetchItems();
  }, []);

  const [ items, setItems ] = useState([]);
  const [t, i18n] = useTranslation("global");

  const fetchItems = async() => {
    const data = await fetch(`http://${LOCALHOST}:${PORT}/api/news`, {
      method: 'GET',
      mode: 'cors'
    });
    const items = await data.json();
    console.log(items.result);
    setItems(items.result);
  }

  return (
    <div className="noticias-container">
      {items.map( item => {
          return(
          <div class="card">
           <div class="card-header">{item.date}</div>
           <div class="card-body">
            <h5 class="card-title">{item.name}</h5>
            <p class="card-text">{item.description}</p>
            <a href={item.link} class="btn btn-dark">{t("noticias.ir")}</a>
          </div>
        </div>
        )
      })}
      
    </div>
  );
}

export default Noticias;
