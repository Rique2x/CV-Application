import React from "react";
import PropTypes from 'prop-types';
import ErrorPage from './errorpage';

class CvForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: props.result,
    };
  }

  handlePrint = () => {
    alert('Print Successful!');
  }

  render() {
    const { result } = this.state;
    if (JSON.stringify(result) === '{}') {
      return <ErrorPage />;
    }

    return (
      <>
        <button onClick={this.handlePrint}>Print Page</button>
        <main className='container'>
          <p>Hello!</p>
        </main>
      </>
    );
  }
}

Resume.propTypes = {
  result: PropTypes.object.isRequired,
};

export default CvForm