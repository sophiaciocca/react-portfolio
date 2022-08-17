import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './App.js'
import { ColorScheme } from "../theme/styleConstants";


const FormDiv = styled.div`
  margin: 0 auto;
  width: 50%;
`

const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;

const FormLabel = styled.label`
  display: block;
`

const FormInput = styled.input`
  width: 100%;
`

const CommentInput = styled.textarea`
  width: 100%;
  height: 6em;
`

const EmailMe = styled.p`
  text-align: center;
  padding: 4%;
`

class Contact extends Component {

  render() {
    return (
      <div>
        <CenteredHeader>Get in touch with me!</CenteredHeader>

        <FormDiv>
          <form action="https://formspree.io/sophiaciocca@gmail.com" method="POST" id="contactform">
            <div>
              <FormLabel>Name:</FormLabel>
              <FormInput type="text" name="name" />
            </div>
            <div>
              <FormLabel>Email:</FormLabel>
              <FormInput type="text" name="_replyto" />
            </div>
            <div>
              <FormLabel>Comment:</FormLabel>
              <CommentInput name="comment" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </FormDiv>

        <EmailMe>Or, just email me directly at <a href="mailto:sophiaciocca@gmail.com" target="_blank"><strong>sophiaciocca@gmail.com</strong></a>.</EmailMe>

        {/* <hr/> */}
        {/* <CenteredHeader><PortButton href="https://drive.google.com/file/d/0B-Wn-csD32OpVmUyVXFVa0JJakE/view" target="_blank">Download My Resume</PortButton></CenteredHeader> */}
      </div>
    );
  }
}

export default Contact;
