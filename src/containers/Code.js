import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

import { CenteredHeader } from './App.js'

class Code extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>Skills:</CenteredHeader>
          <div className="row">
            <div className="col-lg-4">
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
            <div className="col-lg-4">
              <h5>Back-end:</h5>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL/PostgreSQL</li>
                <li>Sequelize</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5>Other:</h5>
              <ul>
                <li>Git</li>
                <li>Webpack</li>
                <li>JSON</li>
                <li>Mocha/Chai</li>
                <li>Agile development</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <CenteredHeader>Recent work:</CenteredHeader>
          <h4>Align</h4>
          <p>Description here</p>

        </div>
      </div>
    );
  }
}

export default Code;