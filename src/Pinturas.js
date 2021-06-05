import './App.css';
import React, { useState, useEffect } from 'react';
import {SRLWrapper} from 'simple-react-lightbox';
import {LOCALHOST, TAB_PINTURAS} from './constants';

function Pinturas() {
    useEffect(() => {
      fetchItems();
    }, [])

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
     const data = await fetch(`${LOCALHOST}/api/images/${TAB_PINTURAS}`, {
      method: 'GET'
    });
    const items = await data.json();
    console.log(items.result);
    setItems(items.result);

  }


  return (
  <SRLWrapper>
    <div className="pinturas">
        { items.sort((a,b) => a.sort - b.sort).map( item => {
                let alt =`${item.name}: ${item.description} ${item.m1}x${item.m2} ${item.year}`;
                return (<div key={item._id} className="image-card">
                    <img className="image" src={item.url} alt={alt}></img>
                </div>)
            }
        )}
    </div>
   </SRLWrapper>
  );
}

export default Pinturas;
