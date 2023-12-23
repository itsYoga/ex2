import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import {useEffect, useState} from'react';
function App() {
  const [catFact, setCatFact] = useState("")
  useEffect(()=>{Axios.get("https://catfact.ninja/fact").then((res)=>{console.log(res.data);setCatFact(res.data.fact);   }); }, []);
  
  return (
    <div className="App">{catFact}</div> );
  
}

export default App;