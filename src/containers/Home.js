import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

import { CenteredHeader } from './App.js'

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Hi! I'm Sophia. I'm a full-stack software developer based in NYC.</CenteredHeader>
        <p>
          I'm comfortable throughout the stack, but my passion lies in the front end, at the intersection of code and design. I strive to create software that not only functions efficiently under the hood, but also provides intuitive, beautiful user experiences.
        </p>
        <p>
          ​Outside of code, I like to create in other ways. From <a href="https://medium.com/@sophiaciocca/latest" target="_blank">blogging</a> to <a href="https://www.youtube.com/channel/UChfrVcFHC-mfoqrJHuOYt-Q" target="_blank">music-making</a>, <a href="http://sophiacioccaphotography.tumblr.com/" target="_blank">photography</a> to <a href="https://www.instagram.com/sidewalk_poetry/" target="_blank">guerilla sidewalk chalk street art</a>, I'm always trying new ways of expressing myself. I also like to meditate, talk to strangers, and run lifestyle experiments.
        </p>
        <p>
          I currently work as a teaching fellow at <a href="https://www.fullstackacademy.com" target="_blank">Fullstack Academy</a>, and am seeking a new full-time opportunity as I come upon the end of my fellowship. Before becoming a software developer, I served in the Peace Corps, and before that, I worked for IBM, management consulting for Fortune 100 companies. I also hold a degree in economics from the University of Pennsylvania.
        </p>
      </div>
    );
  }
}

export default Home;