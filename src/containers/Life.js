import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

import { CenteredHeader } from './App.js'

const LifeThumbnail = styled.img`
  width: 70%;
  display: block;
  margin: 0 auto;
`;

const LifeHeader = styled.h4`
  font-size: 1.25em;
  text-align: center;
`;

const LifeProjectBlurb = styled.div`
  padding: 4% 0;
  width: 75%;
  margin: auto;
`

const LifeRow = styled.div`
  margin: 20px -15px;
`

class Life extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>I like to create, regardless of medium. Here are some of my current artistic projects:</CenteredHeader>
        </div>
        {/*Row 1*/}
        <LifeRow className="row">
          <div className="col-md-6 col-sm-12">
            <a href="http://sophiacioccaphotography.tumblr.com/" target="_blank">
              <LifeThumbnail src="http://i66.tinypic.com/2q80nia.jpg"/>
              <LifeHeader>my photography</LifeHeader>
            </a>
            <LifeProjectBlurb>Here's where i keep some of my photographs. Check it out!</LifeProjectBlurb>
          </div>
          <div className="col-md-6 col-sm-12">
            <a href="https://www.instagram.com/sidewalk_poetry/" target="_blank">
              <LifeThumbnail src="http://i65.tinypic.com/2rcbtb6.jpg"/>
              <LifeHeader>sidewalk_poetry</LifeHeader>
            </a>
            <LifeProjectBlurb>I write poetry on the sidewalks, because street art makes the world a better place.</LifeProjectBlurb>
          </div>
        </LifeRow>
        {/*Row 2*/}
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <a href="http://artandfragments.tumblr.com/" target="_blank">
              <LifeThumbnail src="http://i65.tinypic.com/ezh3eh.jpg"/>
              <LifeHeader>art and fragments</LifeHeader>
            </a>
            <LifeProjectBlurb>I'm into creative writing. Here's where i put all of my unfinished poetic tidbits. And hey -- all art is unfinished, right?</LifeProjectBlurb>
          </div>
          <div className="col-md-6 col-sm-12">
            <a href="https://www.youtube.com/channel/UChfrVcFHC-mfoqrJHuOYt-Q" target="_blank">
              <LifeThumbnail src="http://i64.tinypic.com/16lw755.jpg"/>
              <LifeHeader>jenny & sophia sing</LifeHeader>
            </a>
            <LifeProjectBlurb>My best friend and i make acoustic covers of songs. Listen to us here!</LifeProjectBlurb>
          </div>
        </div>
      </div>
    );
  }
}

export default Life;