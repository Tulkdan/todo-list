import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig.js';
import Header from './components/Header';
import FormContainer from './components/FormContainer';
import './App.css';

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FormContainer db={db} />
      </div>
    );
  }
}

export default App;
