import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Experience from './components/Experience';
import Education from './components/Education';

class App extends Component {
  render() {
    return (
      <div id='container'>
          <h1 className="no-print">CV Application</h1>
        <div id="components" className="no-print">
                  <GeneralInfo />
                  <Experience />
                  <Education />
                  <button id="button"  className="no-print" onClick={() => {window.print()}}>Print to PDF</button>
                </div>
      </div>
    );
  }
}

export default App;
