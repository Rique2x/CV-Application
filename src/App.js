import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      name: '',
      email: '',
      phone: '',
    };  
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  handlePhoneChange = (e) => {
    this.setState({
      phone: e.target.value
    });
  }

  handleDateChange = (e) => {
    this.setState({
      date: e.target.value
    });
  }

render(){
  const { name, email, phone, date } = this.state;

  return(

    <div className='cvContainer'>

      <div className='cvHeader'>
        CV-Container
      </div>

      <div className='info'>

      <form>
        <div id='generalInfo'>
          <h4>General Information</h4>
        <input 
        onChange={this.handleNameChange}
        value={name} 
        type={'text'} 
        id='taskInput' 
        placeholder='First Name'
        />
        <input 
        onChange={this.handleNameChange}
        value={name} 
        type={'text'} 
        id='taskInput' 
        placeholder='Last Name'
        />
        <input 
        onChange={this.handleEmailChange}
        value={email} 
        type={'email'} 
        id='taskInput' 
        placeholder='Email'
        />
        <input 
        onChange={this.handlePhoneChange}
        value={phone} 
        type={'tel'} 
        id='taskInput' 
        placeholder='Phone Number'
        />
        </div>

        <div id='experience'>
          <h4>Experience</h4>
          <input 
          onChange={this.handleNameChange}
          value={name}
          type="text"
          id='taskInput' 
          placeholder='School Name' 
          />
          <input 
          onChange={this.handleNameChange}
          value={name} 
          type={'text'} 
          id='taskInput' 
          placeholder='Title of Study' 
          />
          <label className='start'/>
            <p>Start</p>
            <input 
            onChange={this.handleNameChange}
            value={date} 
            type={'date'} 
            id='taskInput'
            />
          <label className='end'>
            <p>End</p>
            <input 
            onChange={this.handleDateChange}
            value={date} 
            type={'date'} 
            id='taskInput'
            />
          </label>
        </div>
        </form>
      </div>
     
    </div>
  )
}
}

export default App;