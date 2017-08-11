import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header.js'
import Footer from './Footer.js'

const AppDiv = styled.div`
    box-sizing: border-box;
    min-height: 100%;
    padding: 0 0 250px;sx
    position: relative;
`;

const ContainerDiv = styled.div`
    margin: 0 5%;
`

class App extends Component {
  render() {
    return (
      <AppDiv>
        <Header/>
          <ContainerDiv>
            {this.props.children}
          </ContainerDiv>
        <Footer/>
      </AppDiv>
    );
  }
}

export default App;
