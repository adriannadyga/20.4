import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import uuid from 'uuid';

//renderowanie głównego komponentu aplikacji i umieszczenie w elemencie DOM o id app
ReactDOM.render (
    <App />,
    document.getElementById('app')
); 