import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header.js'
import Footer from './Footer.js'

const AppDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const ContainerDiv = styled.div`
  margin: 1% 17% 3% 17%;
  flex: 1;
  font-family: 'Open Sans', sans-serif;
`

class App extends Component {
  render() {
    return (
      <AppDiv>
        <Header />
        <ContainerDiv>
          {this.props.children}
        </ContainerDiv>
        <Footer />
      </AppDiv>
    );
  }
}

export default App;
