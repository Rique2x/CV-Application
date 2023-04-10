import React, { Component } from 'react';

class App extends Component{
  constructor(){
    super()
  }


render(){

  return(
    <div className='cvContainer'>
      <div className='cvHeader'>
        CV-Container
      </div>
      <div className='info'>
      <form>
        <div id='generalInfo'>
          <h4>General Information</h4>
        <input type={'text'} id='taskInput' placeholder='First Name'/>
        <input type={'text'} id='taskInput' placeholder='Last Name'/>
        <input type={'email'} id='taskInput' placeholder='Email'/>
        <input type={'number'} id='taskInput' placeholder='Phone Number'/>
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