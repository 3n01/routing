import './App.css';
import React , { useState, useEffect }  from 'react';
import { useTranslation} from 'react-i18next';
import {LOCALHOST, PORT, TAB_BIO} from './constants';


function Bio() {

  useEffect(() => {
    fetchImage();
    fetchBioDesc();
  }, [])

  const [t, i18n] = useTranslation("global");
  const [item, setItem] = useState({});
  const [desc, setDesc] = useState('');

  const fetchBioDesc= async() => {
    const data = await fetch(`http://${LOCALHOST}:${PORT}/api/bio`,{
      method : 'GET',
      mode : 'cors'
    });
    const desc = await data.json();
    const es = desc[0].espanol;
    const en = desc[0].english;
    console.log(`Es: ${es} En: ${en}`);

    setDesc(desc[0]);
  }

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
        {t("bio.flag").toString() === 'es' ? desc.espanol: desc.english}
        </div>
    </div>
  );
}

export default Bio;
