import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

const FooterDiv = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
`;


class Footer extends Component {
  render() {
    return (
      <FooterDiv>
        FOOTER HERE
      </FooterDiv>
    );
  }
}

export default Footer;