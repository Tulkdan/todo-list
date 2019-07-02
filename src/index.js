import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase'
import credentials from './firebaseConfig'

firebase.initializeApp(credentials);

ReactDOM.render(<App/>, document.getElementById('root'));
