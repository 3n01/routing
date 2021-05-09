import './App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

function Carrusel() {

  useEffect(() => {
    fetchItems();
  }, [])

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('http://localhost:3032/api/images/1', {
      method: 'GET',
      mode: 'cors'
    });
    const items = await data.json();
    console.log(items.result);
    setItems(items.result);

  }

  return (
    <div className="carrusel">
      <Carousel>
        {items.sort((a,b) => a.sort - b.sort).map(item => {
          return <Carousel.Item key={item._id}>
            <img className="" 
                style = {{ width: '50%', height: 'auto'}}
                src={item.url} 
                alt={item.name}>
            </img></Carousel.Item>
        })}
      </Carousel>
    </div>
  );



}

export default Carrusel;
