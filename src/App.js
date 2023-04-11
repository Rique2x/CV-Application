import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import CvForm from './components/cv-form'; // assuming CvForm component is in a separate file

const App = () => {
    return (
        <div>
           <BrowserRouter>
          
          <h1>CV App</h1>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cv-form" element={<CvForm />} />
          </Routes>

          </BrowserRouter>
        </div>
    );
  }


export default App;
