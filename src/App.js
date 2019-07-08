import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mx-auto px-20">
        <Form />
        <List />
      </div>
    </div>
  );
}

export default App;
