import React, { Component } from 'react';

import { CenteredHeader } from './App.js'

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Hi! I'm Sophia. I'm a software developer working remotely in the US.</CenteredHeader>
        <p>
          I've worked throughout the stack, but I especially love building React UI. I've most recently worked at Spotify and The New York Times.
        </p>
        <p>
          ​Outside of code, I like to create in other ways. From <a href="https://medium.com/@sophiaciocca/latest" target="_blank">blogging</a> to <a href="https://www.youtube.com/channel/UChfrVcFHC-mfoqrJHuOYt-Q" target="_blank">music-making</a>, <a href="http://sophiacioccaphotography.tumblr.com/" target="_blank">photography</a> to <a href="https://www.instagram.com/sidewalk_poetry/" target="_blank">guerilla sidewalk chalk street art</a>, I'm always trying new ways of expressing myself. I also like to meditate, talk to strangers, and run lifestyle experiments.
        </p>
        <p>

        Previously, I've <a href="https://www.gracehopper.com/" target="_blank">taught code to women</a>, served in the Peace Corps, and management consulted for Fortune 100 companies. I also hold a degree in economics from the University of Pennsylvania.
        </p>
      </div>
    );
  }
}

export default Home;
