import './App.css';
import React , {useState, useEffect} from 'react';

function Noticias() {

  useEffect( () => {
    fetchItems();
  }, []);

  const [ items, setItems ] = useState([]);

  const fetchItems = async() => {
    const data = await fetch('http://localhost:3032/api/news', {
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
            <a href={item.link} class="btn btn-primary">Ir al evento</a>
          </div>
        </div>
        )
      })}
      
    </div>
  );
}

export default Noticias;
