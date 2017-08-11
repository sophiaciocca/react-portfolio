import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

const LifeThumbnail = styled.img`
  width: 70%;
  display: block;
  margin: 0 auto;
`;

const LifeHeader = styled.h4`
  font-size: 1.25em;
  text-align: center;
`;

class Life extends Component {
  render() {
    return (
      <div>
        <div>
          <h4>I like to create, regardless of medium. Here are some of my current artistic projects:</h4>
        </div>
        {/*Row 1*/}
        <div className="row">
          <div className="col-lg-6">
            <a href="http://sophiacioccaphotography.tumblr.com/" target="_blank">
              <LifeThumbnail src="http://i66.tinypic.com/2q80nia.jpg"/>
              <LifeHeader>my photography</LifeHeader>
            </a>
            Here's where i keep some of my photographs. Check it out!
          </div>
          <div className="col-lg-6">
            <a href="https://www.instagram.com/sidewalk_poetry/" target="_blank">
              <LifeThumbnail src="http://i65.tinypic.com/2rcbtb6.jpg"/>
              <LifeHeader>sidewalk_poetry</LifeHeader>
            </a>
            I write poetry on the sidewalks, because street art makes the world a better place.
          </div>
        </div>
        {/*Row 2*/}
        <div className="row">
          <div className="col-lg-6">
            <a href="http://artandfragments.tumblr.com/" target="_blank">
              <LifeThumbnail src="http://i65.tinypic.com/ezh3eh.jpg"/>
              <LifeHeader>art and fragments</LifeHeader>
            </a>
            I'm into creative writing. Here's where i put all of my unfinished poetic tidbits. And hey -- all art is unfinished, right?
          </div>
          <div className="col-lg-6">
            <a href="https://www.youtube.com/channel/UChfrVcFHC-mfoqrJHuOYt-Q" target="_blank">
              <LifeThumbnail src="http://i64.tinypic.com/16lw755.jpg"/>
              <LifeHeader>jenny & sophia sing</LifeHeader>
            </a>
            My best friend and i make acoustic covers of songs. Listen to us here!
          </div>
        </div>
      </div>
    );
  }
}

export default Life;