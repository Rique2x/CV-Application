import React from "react";


class Home extends React.Component{
    constructor(props){
      super(props)
  
      this.state = {
        name: '',
        email: '',
        phone: '', 
        date: '',
        lastName: '', 
        schoolName: '',
        study: '',
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
    handleLastNameChange = (e) => {
      this.setState({
        lastName: e.target.value
      });
    }
  
    handleSchoolNameChange = (e) => {
      this.setState({
        schoolName: e.target.value
      });
    }
  
    handleStudyChange = (e) => {
      this.setState({
        study: e.target.value
      });
    }
  
  render(){
    const { name, lastName, schoolName, study,
      email, phone, date } = this.state;
  
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
          required
          />
          <input 
          onChange={this.handleLastNameChange}
          value={lastName} 
          type={'text'} 
          id='taskInput' 
          placeholder='Last Name'
          required
          />
          <input 
          onChange={this.handleEmailChange}
          value={email} 
          type={'email'} 
          id='taskInput' 
          placeholder='Email'
          required
          />
          <input 
          onChange={this.handlePhoneChange}
          value={phone} 
          type={'tel'} 
          id='taskInput' 
          placeholder='Phone Number'
          required
          />
          </div>
  
          <div id='experience'>
            <h4>Experience</h4>
            <input 
            onChange={this.handleSchoolNameChange}
            value={schoolName}
            type={'text'}
            id='taskInput' 
            placeholder='School Name' 
            required
            />
            <input 
            onChange={this.handleStudyChange}
            value={study} 
            type={'text'} 
            id='taskInput' 
            placeholder='Title of Study' 
            required
            />
            <label className='start'/>
              <p>Start</p>
              <input 
              onChange={this.handleDateChange}
              value={date} 
              type={'date'} 
              id='taskInput'
              required
              />
            <label className='end'>
              <p>End</p>
              <input 
              onChange={this.handleDateChange}
              value={date} 
              type={'date'} 
              id='taskInput'
              required
              />
            </label>
          </div>
          </form>
        </div>
       
      </div>
    )
  }
  }
  
  export default Home;