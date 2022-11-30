import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Alert from './coponent/alert';
import Form from './coponent/form';
import Navbar from './coponent/navbar';
import About from './coponent/about';

const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
      setAlert({
        msg:message,
        type:type
      });

      setTimeout(() => { 
        setAlert(null);
      }, 3000);
  }

  return (
    <Router>
    <Navbar/>
    <Alert alert={alert}/>
    
    <Routes>
          <Route exact path="/" element={<Form showAlert={showAlert} />} />
          <Route exact path="/about" element={ <About />} />       
          
    </Routes>
    

    
    </Router>
    
  )
}

export default App