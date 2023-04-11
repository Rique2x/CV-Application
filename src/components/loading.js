import React from 'react';

class Loading extends React.Component {
  render() {
    return (
      <div>
        <h2>Loading...</h2>
        {/* You can customize the loading spinner or text as needed */}
        {/* For example, you can use a library like react-spinners for a spinner */}
        {/* Or you can simply display a text message like "Please wait..." */}
      </div>
    );
  }
}

export default Loading;
