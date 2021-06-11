import './App.css';
import emailjs from 'emailjs-com';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LOCALHOST, TAB_CONTACTO } from './constants';

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
    const data = await fetch(`${LOCALHOST}/api/images/${TAB_CONTACTO}`, {
      method: 'GET'
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
      <div className="contacto-box-form">


        <div className="contact-card">
          <div className="contact-card-title">
            CONTACT INFO
            </div>


          <div className="contact-card-media-images">
            <div className="contact-card-media" data-toggle="tooltip" title="efrengari@gmail.com ">
              <i className="fas fa-envelope"></i> <span className="contact-card-email">E-mail</span>
            </div>
            <div className="contact-card-media" data-toggle="tooltip" title="Ir a instagram">
              <a href="https://www.instagram.com/pintor_efren/"><i className="fab fa-instagram"></i><span style={{ marginLeft: '18px' }} className="contact-card-email">Instagram</span></a>
            </div>
            <div className="contact-card-media" data-toggle="tooltip" title="Ir a facebook">
              <a href="https://www.facebook.com/efrengarciaiglesias.pintor"><i className="fab fa-facebook-square"></i><span style={{ marginLeft: '18px' }} className="contact-card-email">Facebook</span></a>
            </div>
            <div className="contact-card-media" data-toggle="tooltip" title="Ir a gmail">
              <a href="https://www.youtube.com/channel/UCYQDZSSqtaSYg1OmoRhfHXA"><i className="fab fa-youtube"></i><span style={{ marginLeft: '12px' }} className="contact-card-email">Youtube</span></a>
            </div>



          </div>

        </div>
        <form onSubmit={sendEmail} className="contacto-form">
          <div className="form-group">
            <input type="text" className="form-control" name="user_name" placeholder={t("contacto.nombre")} />
          </div>
          <div className="form-group">

            <input type="text" className="form-control" name="user_email" placeholder={t("contacto.correo")} />
          </div>
          <div className="form-group">
            <textarea className="form-control" name="user_message" placeholder={t("contacto.mensaje")} />
          </div>


          <div className="form-group contacto-submit">
            <input className="btn-dark" type="submit" value={t("contacto.enviar")} />
          </div>

        </form>
      </div>

    </div>
  );
}

export default Contacto;
