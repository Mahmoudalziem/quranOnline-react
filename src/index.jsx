import React from 'react';
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.scss';
import App from "./views/layouts/browser/browser.jsx";
import './js/default';

ReactDOM.render( <App /> , document.getElementById("root"));

serviceWorker.unregister(); 