import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Components/navigation';
import Home from './Components/home';
import Education from './Components/education';
import Profile from './Components/profile';
import Portfolio from './Components/portfolio';
import Contact from './Components/contact';
import Experience from './Components/experience';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Navigation/>} >
     <Route index element={<Home/>} />
     <Route path="education" element={<Education/>} />
     <Route path="experience" element={<Experience/>} />
     <Route path="profile" element={<Profile/>} />
     <Route path="portfolio" element={<Portfolio/>} />
     <Route path="contact" element={<Contact/>} />
     
    </Route>
     

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
