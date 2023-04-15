import React from "react";

class CVForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      degree: '',
      university: '',
      year: '',
      company: '',
      position: '',
      duration: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.name === '') {
      this.setState({ error: 'Name is required!' }); // setting error message in state
    } else {
    // You can handle form submission logic here, e.g. sending data to an API or storing in a database
    this.setState({ error: null });
    // Handle form submission logic here
    console.log('Form data:', this.state);
  }
}

  render() {

    const { error } = this.state; // getting error state from component state

    return (
      <div>
        <h2>CV Form</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* render error message if error state is not null */}
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" value={this.state.phone} onChange={this.handleChange} />
          </label>
          <h3>Education</h3>
          <label>
            Degree:
            <input type="text" name="degree" value={this.state.degree} onChange={this.handleChange} />
          </label>
          <label>
            University:
            <input type="text" name="university" value={this.state.university} onChange={this.handleChange} />
          </label>
          <label>
            Year:
            <input type="text" name="year" value={this.state.year} onChange={this.handleChange} />
          </label>
          <h3>Experience</h3>
          <label>
            Company:
            <input type="text" name="company" value={this.state.company} onChange={this.handleChange} />
          </label>
          <label>
            Position:
            <input type="text" name="position" value={this.state.position} onChange={this.handleChange} />
          </label>
          <label>
            Duration:
            <input type="text" name="duration" value={this.state.duration} onChange={this.handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}


export default CVForm