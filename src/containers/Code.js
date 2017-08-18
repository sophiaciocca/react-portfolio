import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

import { CenteredHeader } from './App.js'

const PortRow = styled.div`
  margin: 0;
  padding-top: 50px;
  display: block;
`

const CodeThumbnail = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

const PortTitleContainer = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  -ms-flex-align: baseline;
  align-items: baseline;
  display: -webkit-flex;
  -webkit-flex-wrap: nowrap;
  -webkit-justify-content: flex-end;
  -webkit-align-content: stretch;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
`;

const PortTitle = styled.h2`
  flex: 1;
  margin-bottom: 20px;
  font-family: Gotham,Helvetica,Arial,sans-serif;
  text-transform: uppercase;
`;

const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid #00b7c7;
  border-radius: 3px;
  margin: 0 5px;
  color: #00b7c7;
  font-family: Gotham,Helvetica,Arial,sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all .3s ease;
  &:hover {
    background: #00b7c7;
    color: #f2f2f2;
  }
`;

const PortDescription = styled.p`
  display: block;
  width: 90%;
  margin-top: 15px;
  margin-left: 1rem;
  margin-bottom: 25px;
  font-size: 1.1em;
  color: #cbcbcb;
`;

const UsedList = styled.ul`
  list-style: none;
  padding: 0;
`;

const UsedItem = styled.ul`
  display: inline-block;
  padding: 7px 7px 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  color: #777;
  background: #333;
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
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3/Sass</li>
                <li>React</li>
                <li>Redux</li>
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
        <hr/>
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
            <PortDescription>Hello desription</PortDescription>
            <UsedList>
              <UsedItem>React.js</UsedItem>
            </UsedList>
          </PortRow>

        </div>
      </div>
    );
  }
}

export default Code;