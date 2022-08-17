import React, { Component } from 'react';

import { CenteredHeader } from './App.js'

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Hi! I'm Sophia. I believe that connection to our bodies can save the world.</CenteredHeader>
        <p>
          I spent my 20s working in big corporations and on my computer, leaning into my mental gifts, and neglecting my biggest gifts of all: my intuition, my capacity for empathy, my passion, and my visceral connection to my body.
        </p>
        <p>
          ​I like to create and consider myself an artist of life. I'm a musician currently working on my first album.
        </p>
        <p>
        In previous iterations of my life, I <a href="https://www.gracehopper.com/" target="_blank">taught code to women</a>, served in the Peace Corps, and management consulted for Fortune 100 companies. I also hold a B.A. from the University of Pennsylvania.
        </p>
      </div>
    );
  }
}

export default Home;
