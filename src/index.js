// import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import './theme/globalStyle'

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
