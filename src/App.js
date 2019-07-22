import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig.js';
import Header from './components/Header';
import FormContainer from './components/FormContainer';
import LoginContainer from './components/LoginContainer';
import './App.css';

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };

    this.loginWithGoogle = this.loginWithGoogle.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  signOut() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        <Header signOut={this.signOut} user={this.state.user} />
        { this.state.user ? (
          <FormContainer user={this.state.user} db={db} />
        ) : (
          <LoginContainer login={this.loginWithGoogle} />
        )}
      </div>
    );
  }
}

export default App;
