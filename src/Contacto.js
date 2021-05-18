import './App.css';
import emailjs from 'emailjs-com';
import React from 'react';

function Contacto() {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_2kkxkj1', 'template_51eqblc', e.target, 'user_AxO7ORYJihsgfH2jT5H07')
      .then(
        result => console.log(result.text),
        err => console.log(err.text)
      );

    e.target.reset();
  }

  return (
    <div className="Contacto">
      {/* <form className="contacto-form" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Nombre"/>
          <input type="text" name="user_email" placeholder="Email"/>
          <input type="text" name="user_message" placeholder="Mensaje"/>
          <input type="submit" value="Send"/>
        </form> */}
      <form onSubmit={sendEmail}> 
        <div className="form-row">
          <div className="col-6">
            <input type="text" className="form-control" name="user_name" placeholder="Nombre" />
          </div>
          <div className="col-6">
            <input type="text" className="form-control" name="user_email" placeholder="Correo" />
          </div>
        </div>
        <div className="form-row">
          <div className="col-12">
            <input type="text" className="form-control" name="user_message" placeholder="Mensaje" />
          </div>
        </div>
        <div className="form-row">
        <div className="col-2">
          <input type="submit" value="Send" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contacto;
