import React from "react";
import Loading from "./loading";



class CvForm extends React.Component{
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
  
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
  

    handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission, e.g., send data to API, etc.
        console.log('Form submitted:', this.state);
      }
  
  render(){
    const { name, lastName, schoolName, study,
      email, phone, date } = this.state;
  
    return(
  
      <div className='cvContainer'>
        
        <Loading /> 
        <div className='cvHeader'>
          CV-Container
        </div>
  
        <div className='info'>
  
        <form onSubmit={this.handleSubmit}>
          <div id='generalInfo'>
            <h4>General Information</h4>
           
         <label htmlFor="name">Name:</label>
          <input 
          onChange={this.handleChange}
          value={name} 
          type={'text'} 
          id='taskInput' 
          placeholder='First Name'
          required
          />

         <label htmlFor="lastName">Last-Name:</label>
          <input 
          onChange={this.handleChange}
          value={lastName} 
          type={'text'} 
          id='taskInput' 
          placeholder='Last Name'
          required
          />

          <label htmlFor="email">Email:</label>
          <input 
          onChange={this.handleChange}
          value={email} 
          type={'email'} 
          id='taskInput' 
          placeholder='Email'
          required
          />

         <label htmlFor="phone">Phone:</label>
          <input 
          onChange={this.handleChange}
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
            onChange={this.handleChange}
            value={schoolName}
            type={'text'}
            id='taskInput' 
            placeholder='School Name' 
            required
            />
            <input 
            onChange={this.handleChange}
            value={study} 
            type={'text'} 
            id='taskInput' 
            placeholder='Title of Study' 
            required
            />
            <label className='start'/>
              <p>Start</p>
              <input 
              onChange={this.handleChange}
              value={date} 
              type={'date'} 
              id='taskInput'
              required
              />
            <label className='end'>
              <p>End</p>
              <input 
              onChange={this.handleChange}
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
  
  export default CvForm;