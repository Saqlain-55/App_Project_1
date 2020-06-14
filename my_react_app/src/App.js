import React from 'react';
import './App.css';
import Diner from './Diner';
function App() {
  return (
    <div classname="App">
      {/* <Diner></Diner> */ }
      <Diner dishname="Biryani" sweetdish="kheer" allign />
      <Diner dishname="krahi chiken" sweetdish="kulf" />
       
    </div>
  );
}

export default App;
