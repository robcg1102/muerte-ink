import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h2>Acerca de mí</h2>
        <iframe width="80%" title="videoyoutube01" height="315" src="https://www.youtube.com/embed/V-AU-hdbl1I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="80%" title="videoyoutube02" height="315" src="https://www.youtube.com/embed/Ij3r5gXYBMc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    );
  }
}

export default About;