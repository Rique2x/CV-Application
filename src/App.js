import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Home from './components/home';
import CvForm from './components/cv-form'; // assuming CvForm component is in a separate file

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>CV App</h1>
          <Router>
            <Route exact path="/" element={Home} />
            <Route exact path="/cv-form" element={CvForm} />
          </Router>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
