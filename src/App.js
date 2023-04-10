import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Home from './components/home';
import Resume from './components/resume'; // assuming CvForm component is in a separate file

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>CV App</h1>
          <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/cv-form" component={Resume} />
          </Router>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
