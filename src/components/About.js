import React from "react";
import { image } from "../data/data";
console.log(image)

function About() {
  return (<div id="about">
      <h2>About Me</h2>
      <p>Hi, it's me</p>
      <img src={image} alt="I made this"/>
    </div>);
}

export default About;
