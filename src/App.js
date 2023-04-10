import React from 'react';
import Home from './components/home';
import Resume from './components/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1>CV App</h1>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;