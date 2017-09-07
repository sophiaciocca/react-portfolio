import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

import { CenteredHeader } from './App.js'
import { PortButton } from './Code.js'

const FormDiv = styled.div`
  margin: 0 auto;
  width: 50%;
`

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

        <hr/>
        <CenteredHeader><PortButton href="https://drive.google.com/file/d/0B-Wn-csD32OpVmUyVXFVa0JJakE/view" target="_blank">Download My Resume</PortButton></CenteredHeader>
      </div>
    );
  }
}

export default Contact;