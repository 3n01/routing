import './App.css';
import React , { useState, useEffect }  from 'react';
import { useTranslation} from 'react-i18next';
import {LOCALHOST, PORT, TAB_BIO} from './constants';

function Bio() {

  useEffect(() => {
    fetchImage();
  }, [])

  const [t, i18n] = useTranslation("global");
  const [item, setItem] = useState({});

  const fetchImage = async() => {
    const data = await fetch(`http://${LOCALHOST}:${PORT}/api/images/${TAB_BIO}`,{
      method : 'GET',
      mode : 'cors'
    });
    const item = await data.json();
    setItem(item.result[0]);
  }

  return (
    <div className="bio">
       <div className="descripcion">
       <img className="image-carousel" 
                src={item ? item.url : ''} 
                alt={item ? item.name: ''}
                >
            </img>
       </div>
       <div className="descripcion">
        {t("bio.descripcion")}
        </div>
    </div>
  );
}

export default Bio;
