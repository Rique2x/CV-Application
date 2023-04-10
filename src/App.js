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

 

render(){
  const { name, email, phone } = this.state;

  return(
    
    <div className='cvContainer'>

      <div className='cvHeader'>
        CV-Container
      </div>

      <div className='info'>

      <form onSubmit={handleSubmit}>
        <div id='generalInfo'>
          <h4>General Information</h4>
        <input value={name} type={'text'} id='taskInput' placeholder='First Name'/>
        <input value={name} type={'text'} id='taskInput' placeholder='Last Name'/>
        <input value={email} type={'email'} id='taskInput' placeholder='Email'/>
        <input value={phone} type={'tel'} id='taskInput' placeholder='Phone Number'/>
        </div>
        <div id='experience'>
          <h4>Experience</h4>
          <input type={'text'} id='taskInput' placeholder='School Name' />
          <input type={'text'} id='taskInput' placeholder='Title of Study' />
          <label className='start'/>
            <p>Start</p>
            <input type={'date'} id='taskInput'/>
          <label className='end'>
            <p>End</p>
            <input type={'date'} id='taskInput'/>
          </label>
        </div>
        </form>
      </div>
     
    </div>
  )
}
}

export default App;