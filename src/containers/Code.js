import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

import { CenteredHeader } from './App.js'
import { ColorScheme } from '../theme/styleConstants';

const PortRow = styled.div`
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;
  display: block;
`

const CodeThumbnail = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

const PortTitleContainer = styled.div`
  padding: 0;
`;
// const PortTitleContainer = styled.div`
//   position: relative;
//   width: 96%;
//   margin: 0 auto;
//   -ms-flex-align: baseline;
//   align-items: baseline;
//   display: -webkit-flex;
//   -webkit-flex-wrap: nowrap;
//   -webkit-justify-content: flex-end;
//   -webkit-align-content: stretch;
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-wrap: nowrap;
//   flex-wrap: nowrap;
//   -ms-flex-direction: row;
//   flex-direction: row;
//   -ms-flex-pack: end;
//   justify-content: flex-end;
//   -ms-flex-line-pack: stretch;
//   align-content: stretch;
// `;

const PortTitle = styled.h2`
  text-transform: uppercase;
`;

// flex: 1;
// margin-bottom: 20px;
// font-family: Gotham,Helvetica,Arial,sans-serif;
// text-transform: uppercase;

export const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: Gotham,Helvetica,Arial,sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all .3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }
`;

const PortDescription = styled.p`
  display: block;
  width: 96%;
  margin: 0 auto;
  margin-bottom: 25px;
`;

const UsedList = styled.ul`
  list-style: none;
  padding: 0;
  width: 96%;
  margin: 0 auto;
`;

const UsedItem = styled.ul`
  display: inline-block;
  padding: 7px 7px 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  color: #fff;
  background: ${ColorScheme.secondary};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: .5px;
`;

class Code extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>Skills:</CenteredHeader>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Front-end:</h5>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>React</li>
                <li>Redux</li>
                <li>HTML5</li>
                <li>CSS3/Sass</li>
                <li>jQuery</li>
                <li>AJAX</li>
                <li>Material-UI</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Back-end:</h5>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL/PostgreSQL</li>
                <li>Sequelize</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Other:</h5>
              <ul>
                <li>Git</li>
                <li>Webpack</li>
                <li>JSON</li>
                <li>Mocha/Chai & Jasmine Testing</li>
                <li>Agile development</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <CenteredHeader>Recent work:</CenteredHeader>
          <PortRow>
            <a href="https://align.fun/" target="_blank">
              <CodeThumbnail src={require('../assets/AlignScreenshot.png')} />
            </a>
            <PortTitleContainer>
              <PortTitle>Align</PortTitle>
              <div>
                <PortButton href='https://align.fun' target='_blank'>Demo</PortButton>
                <PortButton href='https://github.com/align-capstone/align' target='_blank'>Code</PortButton>
              </div>
            </PortTitleContainer>
            <PortDescription>My capstone project from the Grace Hopper Program, Align is a web application for setting and managing long-term goals with a beautiful and intuitive interface. It includes image uploading capability, resource cards to save helpful links, a rich text editor, and live updating using Firebase WebSocket integration.</PortDescription>
            <PortDescription>I worked with two incredibly smart teammates to create Align in three weeks. You can read about our process building it <a href='https://medium.com/ladies-storm-hackathons/how-we-built-our-first-full-stack-javascript-web-app-in-three-weeks-8a4668dbd67c'>here</a>.</PortDescription>
            <UsedList>
              <UsedItem>React.js</UsedItem>
              <UsedItem>Firebase</UsedItem>
              <UsedItem>Material-UI</UsedItem>
              <UsedItem>Victory.js</UsedItem>
            </UsedList>
          </PortRow>
          <hr />
          <PortRow>
            <a href="https://okcollab.herokuapp.com/" target="_blank">
              <CodeThumbnail src={require('../assets/OkCollabScreenshot.png')} />
            </a>
            <PortTitleContainer>
              <PortTitle>OkCollab</PortTitle>
              <div>
                <PortButton href='https://okcollab.herokuapp.com/' target='_blank'>Demo</PortButton>
                <PortButton href='https://github.com/sophiaciocca/ok-collab' target='_blank'>Code</PortButton>
              </div>
            </PortTitleContainer>
            <PortDescription>For my hackathon project at Grace Hopper, I spent three days building an app I always wished I'd had -- a social network for musicians to find other musicians to collaborate with. It's like OkCupid, except instead of dates it's for finding people to jam with and make tracks. View all users, view each user's profile and information, play their embedded Youtube videos, and see similar users in the sidebar.</PortDescription>
            <PortDescription>OkCollab is responsive and works on devices of all sizes. You can watch me present it live <a href='https://www.youtube.com/watch?v=qyLoInHNjoc' target='_blank'>here</a>.</PortDescription>
            <UsedList>
              <UsedItem>React.js</UsedItem>
              <UsedItem>Redux</UsedItem>
              <UsedItem>PostgreSQL</UsedItem>
              <UsedItem>CSS</UsedItem>
              <UsedItem>Node.JS</UsedItem>
              <UsedItem>Express</UsedItem>
            </UsedList>
          </PortRow>
          <hr />
          <PortRow>
            <a href="https://limitless-leggings.herokuapp.com/" target="_blank">
              <CodeThumbnail src={require('../assets/LimitlessLeggingsScreenshot.png')} />
            </a>
            <PortTitleContainer>
              <PortTitle>Limitless Leggings</PortTitle>
              <div>
                <PortButton href='https://limitless-leggings.herokuapp.com/' target='_blank'>Demo</PortButton>
                <PortButton href='https://github.com/limitless-leggings/limitless-leggings' target='_blank'>Code</PortButton>
              </div>
            </PortTitleContainer>
            <PortDescription>Limitless Leggings is a full-stack e-commerce site built from scratch. It includes products filterable by category; working signup, login, and o-auth capabilities; and a working cart model built in PostgreSQL.</PortDescription>
            <UsedList>
              <UsedItem>React.js</UsedItem>
              <UsedItem>Redux</UsedItem>
              <UsedItem>PostgreSQL</UsedItem>
              <UsedItem>CSS</UsedItem>
              <UsedItem>Node.JS</UsedItem>
              <UsedItem>Express</UsedItem>
            </UsedList>
          </PortRow>

        </div>
      </div>
    );
  }
}

export default Code;