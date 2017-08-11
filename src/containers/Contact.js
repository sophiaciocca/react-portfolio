import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

import { CenteredHeader } from './App.js'

// const FormDiv =

class Contact extends Component {

  render() {
    return (
      <div>
        <CenteredHeader>Get in touch with me!</CenteredHeader>

        <div>
          <form action="https://formspree.io/sophiaciocca@gmail.com" method="POST">
            <div>
              <label>Name:</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="_replyto" />
            </div>
            <div>
              <label>Comment:</label>
              <input type="text" name="comment" />
            </div>
            <input type="submit" value="Send" />
          </form>
        </div>

        <p>Or, just email me directly at <a href="mailto:sophiaciocca@gmail.com" target="_blank">sophiaciocca@gmail.com</a>.</p>

        <CenteredHeader><a href="/public/SophiaCioccaResume.pdf">Download my Resume</a></CenteredHeader>
      </div>
    );
  }
}

export default Contact;