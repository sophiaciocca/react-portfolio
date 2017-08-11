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
  height: 200px;
`;

const SocialIconList = styled.ul`
  list-style: none;
`;

const SocialIcon = styled.li`
  display: inline;
`;

class Footer extends Component {
  render() {
    return (
      <FooterDiv>
            <div className="row social">
              <div className="col-lg-12">
                <SocialIconList>
                  <SocialIcon><a href="mailto:sophiaciocca@gmail.com" target="_blank"><i className="fa fa-envelope fa-fw fa-2x" ></i></a></SocialIcon>
                  <SocialIcon><a href="http://www.linkedin.com/in/sophiaciocca" target="_blank"><i className="fa fa-linkedin fa-fw fa-2x" ></i></a></SocialIcon>
                  <SocialIcon><a href="https://github.com/sophiaciocca" target="_blank"><i className="fa fa-github fa-fw fa-2x"></i></a></SocialIcon>
                  <SocialIcon><a href="https://medium.com/@sophiaciocca/latest" target="_blank"><i className="fa fa-medium fa-fw fa-2x" ></i></a></SocialIcon>
                  <SocialIcon><a href="https://twitter.com/sophiaciocca" target="_blank"><i className="fa fa-twitter fa-fw fa-2x" ></i></a></SocialIcon>
                  <SocialIcon><a href="http://www.facebook.com/sophia.ciocca" target="_blank"><i className="fa fa-facebook fa-fw fa-2x" ></i></a></SocialIcon>
                </SocialIconList>
                <br />
              </div>
            </div>
            <div className="row" id="copyright">
              <div className="col-lg-12">
                <p className="small">© 2017 Sophia Ciocca</p>
                <p className="small">This site was lovingly created using React.</p>
              </div>
            </div>
      </FooterDiv>
        );
  }
}

export default Footer;