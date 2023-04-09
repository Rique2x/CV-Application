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
      <div className='Info'>
        <div>General Information</div>
        <input type={'text'} id='taskInput' placeholder='First Name'/>
        <input type={'text'} id='taskInput' placeholder='Last Name'/>
        <input type={'email'} id='taskInput' placeholder='Email'/>
        <input type={'number'} id='taskInput' placeholder='Phone Number'/>
      </div>
    </div>
  )
}
}

export default App;