import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mx-auto justify-center flex">
        <Form />
      </div>
    </div>
  );
}

export default App;
