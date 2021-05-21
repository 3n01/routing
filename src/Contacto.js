import './App.css';
import emailjs from 'emailjs-com';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {LOCALHOST, PORT, TAB_CONTACTO} from './constants';

function Contacto() {

  useEffect(() => {
    fetchImage();
  }, [])

  const [t, i18n] = useTranslation("global");
  const [item, setItem] = useState({});

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_2kkxkj1', 'template_51eqblc', e.target, 'user_AxO7ORYJihsgfH2jT5H07')
      .then(
        result => alert("El correo ha sido enviado con éxito"),
        err => alert("Ha sido imposible enviar el correo. Por favor inténtelo mas tarde")
      );

    e.target.reset();
  }

  const fetchImage = async () => {
    const data = await fetch(`http://${LOCALHOST}:${PORT}/api/images/${TAB_CONTACTO}`, {
      method: 'GET',
      mode: 'cors'
    });
    const item = await data.json();
    setItem(item.result[0]);
  }

  return (
    <div className="contacto">
      <div className="contacto-box">
        <img className="image-contacto"
          src={item ? item.url : ''}
          alt={item ? item.name : ''}
        >
        </img>
      </div>
      <div className="contacto-box">

        <form onSubmit={sendEmail} className="contacto-form">
          <div className="form-group">
            <input type="text" className="form-control" name="user_name" placeholder="Nombre" />
          </div>
          <div className="form-group">

            <input type="text" className="form-control" name="user_email" placeholder="Correo" />
          </div>
          <div className="form-group">
            <textarea className="form-control" name="user_message" placeholder="Mensaje" />
          </div>


          <div className="form-group contacto-submit">
            <input type="submit" value="Send" />
          </div>

        </form>
      </div>

    </div>
  );
}

export default Contacto;
