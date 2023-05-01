import React from 'react';
import '../App.css';
import Nav from './Nav';
import Body from './Body';

import { useSelector, useDispatch } from 'react-redux';
import { navValue, Off, On } from './Reducer/navSlice';
import { nameValue, firstName, fullName } from './Reducer/nameSlice';

function App() {
  const name = useSelector(nameValue) 
  const nav = useSelector(navValue)
  const dispatch = useDispatch()

  const handleNameChange = () => {
    name === "Tomas" ? dispatch(fullName()) : dispatch(firstName())
  }

  const handleNavChange = () => {
    nav === true ? dispatch(Off()) : dispatch(On())
  }

  return (
      <div className="App">
        <Nav />
        <h1>{name}</h1>
        <Body />
          
        <div>
        <button onClick={handleNavChange}>Change Nav State</button>
        <button onClick={handleNameChange}>Change Name State</button>
        </div>
      </div>
  );
}

export default App;
