import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // whether to use dark mode or not
  
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode has been selected", "success");
      document.title="TextUtils - Dark Mode";
      setInterval(()=>{
        document.title="TextUtils is working great";
      }, 2000);
      setInterval(()=>{
        document.title="Install TextUtils now";
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been selected", "success");
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
    {/* props are properties that is required by a component containing some info
    and they are read-only. In below example title , aboutText is props */}
    <Router>
     <Navbar title ="TextUtils" aboutText = "About Us" mode={mode} toggleMode ={toggleMode}/>
     <Alert alert={alert} />
     <div className='container my-3'>
        <Routes>
          <Route path='/about' element={<About mode ={mode} />} />
          <Route path="/" element={<TextForm heading ='Enter the text to analyze below' mode={mode} showAlert ={showAlert} />}/>
        </Routes>
      </div> 
    </Router>

    </>
  );
}

export default App;
