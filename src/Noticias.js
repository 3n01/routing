import './App.css';
import React , {useState, useEffect} from 'react';
import {LOCALHOST} from './constants';
import { useTranslation} from 'react-i18next';

function Noticias() {

  useEffect( () => {
    fetchItems();
  }, []);

  const [ items, setItems ] = useState([]);
  const [t, i18n] = useTranslation("global");

  const fetchItems = async() => {
    const data = await fetch(`${LOCALHOST}/api/news`, {
      method: 'GET'
    });
    const items = await data.json();
    console.log(items.result);
    setItems(items.result);
  }

  return (
    <div className="noticias-container">
      {items.map( item => {
          return(
          <div className="card">
           <div className="card-header">{item.date}</div>
           <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <a href={item.link} className="btn btn-dark">{t("noticias.ir")}</a>
          </div>
        </div>
        )
      })}
      
    </div>
  );
}

export default Noticias;
