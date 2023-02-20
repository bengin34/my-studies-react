import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {useState} from 'react'
const Main=()=> {
  
	const [state, setState] = useState(
	 {
    firstName: '',
    message: '',
    key: '',
  })

  handleClick = (e) => {
   
    setState({...state,
      message: 'Welcome to the world of events',
    })
  }
    handleMouseMove = (e) => {
    setState({ message: 'mouse is moving' })
  }
  
  handleChange = (e) => {
	setState({
      firstName: e.target.value,
      message: e.target.value,
    })
  }

    
  handleKeyPress = (e) => {
    setState({
      message:
        `${e.target.value} has been pressed and the keycode is` + e.charCode,
    })
  }
    handleBlur = (e) => {
    setState({ message: 'Input field has been blurred' })
  }
  
  handleCopy = (e) => {
    setState({
      message: 'Using 30 Days Of React for commercial purpose is not allowed',
    })
  }
  
    return (
      <div>
        <h1>Welcome to the World of Events</h1>

        <button onClick={handleClick}>Click Me</button>
        <button onMouseMove={handleMouseMove}>Move mouse on me</button>
        <p onCopy={handleCopy}>
          Check copy right permission by copying this text
        </p>

        <p>{state.message}</p>
        <label htmlFor=''> Test for onKeyPress Event: </label>
        <input type='text' onKeyPress={handleKeyPress} />
        <br />

        <label htmlFor=''> Test for onBlur Event: </label>
        <input type='text' onBlur={handleBlur} />

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='firstName'>First Name: </label>
            <input
              onChange={handleChange}
              name='firstName'
              value={state.value}
            />
          </div>

          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    )
  }

export default Main