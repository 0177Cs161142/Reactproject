import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Comps/Home';
import About from "./Comps/About";
import Contact from "./Comps/Contact";
import Navbar from "./Navbar";
import "./index.css"
import Not from "./pageNotFound";
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import AddUser from "./AddUser";
import Edit from "./Edit";
import User from "./User";


const App=()=> {
  return (
    <>
    <Router>
  <Navbar/>
 
  
      
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/user/add" element={<AddUser/>}/>
          <Route exact path="/user/edit/:id" element={<Edit/>}/>
          <Route exact path="/user/:id" element={<User/>}/>
          <Route element={<Not/>}/>
           
          
         
        </Routes>
      
    </Router>
   
   </>
  );
}

export default App;
