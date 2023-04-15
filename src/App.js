import React from 'react';
import CvForm from './components/cv-form'; // assuming CvForm component is in a separate file


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to My CV App</h1>
        <CvForm />
      </div>
    );
  }
}

export default App;
