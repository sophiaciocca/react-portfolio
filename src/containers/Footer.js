import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

const FooterDiv = styled.div`
  padding: 2rem;
  background-color: #efefef;
  text-align: center;
  height: 150px;
`;

const SocialIconList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SocialIcon = styled.li`
  display: inline;
`;

const FAIcon = styled.i`
  color: black;
`;

class Footer extends Component {
  render() {
    return (
      <FooterDiv>
            <div className="row social">
              <div className="col-lg-12">
                <SocialIconList>
                  <SocialIcon><a href="mailto:sophiaciocca@gmail.com" target="_blank"><FAIcon className="fa fa-envelope fa-fw fa-2x" /></a></SocialIcon>
                  <SocialIcon><a href="http://www.linkedin.com/in/sophiaciocca" target="_blank"><FAIcon className="fa fa-linkedin fa-fw fa-2x" /></a></SocialIcon>
                  <SocialIcon><a href="https://github.com/sophiaciocca" target="_blank"><FAIcon className="fa fa-github fa-fw fa-2x" /></a></SocialIcon>
                  <SocialIcon><a href="https://medium.com/@sophiaciocca/latest" target="_blank"><FAIcon className="fa fa-medium fa-fw fa-2x" /></a></SocialIcon>
                  <SocialIcon><a href="https://twitter.com/sophiaciocca" target="_blank"><FAIcon className="fa fa-twitter fa-fw fa-2x" /></a></SocialIcon>
                </SocialIconList>
                <br />
              </div>
            </div>
            <div className="row" id="copyright">
              <div className="col-lg-12">
                <p className="small">© 2017 Sophia Ciocca</p>
              </div>
            </div>
      </FooterDiv>
        );
  }
}

export default Footer;