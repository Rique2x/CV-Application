import React from "react";
import Loading from "./loading";

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
      isLoading: false, 
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

  handleSubmit = (e) => {
    this.setState({ 
      isLoading: true 
    });
    e.preventDefault();
   
    setTimeout(() => {
      // Set isLoading state to false after a delay (simulating API call or processing)
      this.setState({ isLoading: false });
      // Do something with the form data or handle success
    }, 2000); // Delay for 2 seconds (for demonstration purposes)
  }

  
  
render(){
  const { name, lastName, schoolName, study,
    email, phone, date, isLoading } = this.state;

  return(

    <div className='cvContainer'>


      <div className='cvHeader'>
        CV-Application
      </div>
      
      {isLoading ? (
          <Loading /> // Render the Loading component when isLoading is true
        ) : (

      <form onSubmit={this.handleSubmit}>
        
          <h4>General Information</h4>

          <div className='info'>
        <label htmlFor="name"> First-Name:
        <input 
        onChange={this.handleNameChange}
        value={name} 
        type={'text'} 
        id='taskInput' 
        required
        />
        </label>
       
       <label htmlFor="lastName"> Last-Name:
       <input 
        onChange={this.handleLastNameChange}
        value={lastName} 
        type={'text'} 
        id='taskInput' 
        required
        />
        </label>

        <label htmlFor="lastName"> Email:
        <input 
        onChange={this.handleEmailChange}
        value={email} 
        type={'email'} 
        id='taskInput' 
        required
        />
        </label>
        
        <label htmlFor="lastName"> Phone-Number:
        <input 
        onChange={this.handlePhoneChange}
        value={phone} 
        type={'tel'} 
        id='taskInput' 
        required
        />
        </label>
        </div>
        
        <h4>Experience</h4>

        <div className='experience'>
          <label htmlFor="lastName"> School-Name:
          <input 
          onChange={this.handleSchoolNameChange}
          value={schoolName}
          type={'text'}
          id='taskInput' 
          required
          />
          </label>

          <label htmlFor="lastName"> Title of Study:
          <input 
          onChange={this.handleStudyChange}
          value={study} 
          type={'text'} 
          id='taskInput' 
          required
          />
          </label>
          
          <label htmlFor="lastName"> Start:
            <input 
            onChange={this.handleDateChange}
            value={date} 
            type={'date'} 
            id='taskInput'
            required
            />
            </label>

            <label htmlFor="lastName"> Start:
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
        )}
      </div>
  )
}
}

export default Home;