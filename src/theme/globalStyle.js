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

`;