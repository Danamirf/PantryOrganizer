import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

window.axios = axios;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
