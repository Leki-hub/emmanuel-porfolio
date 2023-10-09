import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
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
    {/* we can use Hashrouter instead of BrowseRouter if want to have ease deploying on github pages where only static sites are supported */}
     <HashRouter>
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
    </HashRouter>
    </>
  );
}

export default App;
