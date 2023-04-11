import React from 'react';
import { Link } from "react-router-dom";

class ErrorPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Error</h1>
        <p>Sorry, something went wrong. Please try again later {" "}
        <Link to='/'>homepage</Link> .</p>
      </div>
    );
  }
}

export default ErrorPage;