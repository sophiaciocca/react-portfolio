import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

class Contact extends Component {

  render() {
    return (
      <div>
        <h2>Hi this is Contact!!</h2>

        <h4><a href = "/public/SophiaCioccaResume.pdf">Download my Resume</a></h4>
      </div>
    );
  }
}

export default Contact;