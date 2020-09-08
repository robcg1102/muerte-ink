import React, { Component } from "react";
import axios from 'axios'


class Footer extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  changeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  sendMail = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const email = this.state.email;
    const message = this.state.message;
    const myRegex = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/,'i')
    if (
      name === "" ||
      email === "" ||
      message === "" ||
      myRegex.test(email) === false
    ) {
      alert("Validar todos los campos");
    } else {
      axios.post("https://muerteinkserver.herokuapp.com/sendmail", {name, email, message})
        .then(()=>{
          this.setState({
            name: "",
            email: "",
            message: ""
          })
          alert("Nos pondremos en contacto contigo.")
        })
        .catch(err=>{
          alert(`${err}`)
        })
    }
  };

  render() {
    return (
      <div>
        <div className="myfooter">
          <div className="contact">
            <h3>Contáctame</h3>
            <i className="ri-phone-line imgsocial"></i>
            <span> 5549472692</span>
            <br />

            <a
              href="https://www.facebook.com/muerteink-108570804016209"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-facebook-box-fill imgsocial"></i> Facebook
            </a>
            <br />

            <a
              href="https://www.instagram.com/muerte.ink/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-instagram-fill imgsocial"></i> Instagram
            </a>
            <br />

            <a href="https://goo.gl/maps/GpRqmi2r8YXwrqfz5" target="_blank" rel="noopener noreferrer">
              <i className="ri-direction-line imgsocial"></i> Correo Mayor #12
              Centro Histórico
            </a>
          </div>
          <div className="mail">
            <h3>Manda un correo</h3>
            <p className="titmail">Déjanos tu nombre, email y un mensaje para que nos pongamos en contacto contigo</p>
            <form className="myform">
              <input
                type="text"
                placeholder="Tu nombre"
                value={this.state.name}
                onChange={this.changeInput}
                name="name"
                required
              />
              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={this.state.email}
                onChange={this.changeInput}
                name="email"
                required
              />
              <textarea
                type="text"
                placeholder="Mensaje"
                value={this.state.message}
                onChange={this.changeInput}
                name="message"
                required
              />
            </form>
            <div className="sendbutton">
              <button
                type="submit"
                onClick={this.sendMail}
                className="mybutton"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
        <p className="madeby">
          2020 | Made by{" "}
          <a
            href="https://robcg1102.netlify.app/"
            className="me"
            target="_blank"
            rel="noopener noreferrer"
          >
            robcg1102
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
