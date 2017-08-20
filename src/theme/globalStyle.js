import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Zilla+Slab+Highlight');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  a {
    color: black;
    transition: all .3s ease;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  h4, h5, h6 {
    font-family: 'Open Sans', sans-serif;
  }

  hr {
    width: 50%;
  }

  a {
    text-decoration: none;
    color: red;
  }

  a:hover {
    text-decoration: none;
    color: goldenrod;
  }

  input[type=text], textarea {
    border-style: groove;
    border-width: 1px;
    padding: 1px;
  }

  button {
    padding: 5px 10px;
    background: 0 0;
    border: 2px solid #00b7c7;
    border-radius: 3px;
    display: block;
    margin: 0 auto;;
    color: #00b7c7;
    font-family: Gotham,Helvetica,Arial,sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    transition: all .3s ease;
    &:hover {
    background: #00b7c7;
    color: #f2f2f2;
    }
  }

`;