import React, { Component } from "react";

class Certificate extends Component {
  render() {
    return (
      <div className="cert">
        <h2>Diplomas</h2>

        <div class="certBox">
          <img
            src="https://res.cloudinary.com/muerte-ink/image/upload/v1596945390/Project/Reconocimientos/Reconocimientos_masterclas_page-0001_nxg81g.jpg"
            className="imgcar"
            alt="cert01"
          />

          <img
            src="https://res.cloudinary.com/muerte-ink/image/upload/v1596945394/Project/Reconocimientos/Reconocimientos_piercing_page-0001_bhmxfx.jpg"
            className="imgcar"
            alt="cert02"
          />

          <img
            src="https://res.cloudinary.com/muerte-ink/image/upload/v1596945391/Project/Reconocimientos/Reconocimientos_lettering_page-0001_p3qwhc.jpg"
            className="imgcar"
            alt="cert03"
          />

          <img
            src="https://res.cloudinary.com/muerte-ink/image/upload/v1596949200/Project/Reconocimientos/tattt_page-0001_vdywcj.jpg"
            className="imgcar"
            alt="cert04"
          />
        </div>
      </div>
    );
  }
}

export default Certificate;
