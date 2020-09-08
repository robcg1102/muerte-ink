import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="bodyHome">
          <img
            src="https://res.cloudinary.com/muerte-ink/image/upload/v1596844643/Project/png/hannia2left_zz9umy.png"
            alt="homelogo"
            className="homelogo"
          />
          <div>
            <p className="thename">muerte.ink</p>
            <img
              src="https://res.cloudinary.com/muerte-ink/image/upload/v1596839055/Project/logo2_aqmurj.png"
              alt="logohome"
              className="logohome"
            />
          </div>
          <img
            src="https://res.cloudinary.com/muerte-ink/image/upload/v1596844643/Project/png/hannia2right_jwyueu.png"
            alt="homelogo"
            className="homelogo"
          />
        </div>
        <hr />
        <div className="boxtattoo">
          <div className="desctattoo">
            <h2>Mi trabajo</h2>
            <p>
              El tatuaje es un procedimiento ancestral, el cual puede abarcar
              muchos aspectos desde la pertenencia a algún grupo social o
              étnico, es una manera de proyectar nuestras emociones y gustos en
              nuestra piel. Es por eso que en <span className="nameInk">muerte.ink</span> se busca plasmar todas
              esas ideas en tu cuerpo de manera profesional y salubre.
            </p>
            <br />
          </div>
          <div className="contenttattoo">
            <img
              src="https://res.cloudinary.com/muerte-ink/image/upload/v1596839064/Project/tattoos/tattoos_tattoo_13_tfhkoa.jpg"
              className="imgcard"
              alt="..."
            />

            <img
              src="https://res.cloudinary.com/muerte-ink/image/upload/v1596839060/Project/tattoos/tattoos_tattoo_1_cmnrgx.jpg"
              className="imgcard"
              alt="..."
            />

            <img
              className="imgcard"
              src="https://res.cloudinary.com/muerte-ink/image/upload/v1596839066/Project/tattoos/tattoos_tattoo_15_sgmdhg.jpg"
              alt="..."
            />
            <img
              className="imgcard"
              src="https://res.cloudinary.com/muerte-ink/image/upload/v1596839069/Project/tattoos/tattoos_tattoo_26_pnvhjh.jpg"
              alt="..."
            />
          </div>
          <div>
            <Link
              to="/moretattoos"
              style={{ textDecoration: "none" }}
              className="mybutton"
            >
              Más...
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
