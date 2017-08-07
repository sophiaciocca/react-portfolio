import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

const ProfileImage = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 50%;
`;

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Zilla Slab Highlight', sans-serif;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
`


class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <ProfileImage src={require('../assets/confettiCropped.jpg')} alt='Sophia Ciocca'/>
        <h1>SOPHIA CIOCCA</h1>
        <div>
          <NavLink to='/'>ABOUT</NavLink>
          <NavLink to='/code'>CODE</NavLink>
          <NavLink to='/life'>LIFE</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
        </div>
      </HeaderDiv>
    );
  }
}

export default Header;