import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {LocalizeProvider} from "react-localize-redux";

import App from './components/App';

ReactDOM.render(
    <LocalizeProvider>
        <App/>
    </LocalizeProvider>,
    document.querySelector('#root')
);
