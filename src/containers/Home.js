import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

class Home extends Component {
  render() {
    return (
      <div>
        <h4>Hi! I'm Sophia. I'm a software developer.</h4>
        <p>
          I'm a full-stack developer with a passion for the front-end. My experience includes ____. I'm based in NYC.
        </p>
        <p>
          ​I like to create—from coding to blogging to music-making, photography to guerilla sidewalk chalk street art. I also like to meditate, talk to strangers, and run lifestyle experiments.
        </p>
        <p>
          Before becoming a software developer, I served in the Peace Corps, where I was teaching entrepreneurship to high school students in Nicaragua. Before that, I worked for IBM, management consulting for large corporations. I also hold a degree in economics from the University of Pennsylvania.
        </p>
      </div>
    );
  }
}

export default Home;