import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

import { CenteredHeader } from './App.js'

class Code extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Hi this is code!!</CenteredHeader>
      </div>
    );
  }
}

export default Code;