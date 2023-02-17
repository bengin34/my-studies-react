import React, { Component } from 'react'

export default class Button extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.click} className='bg-blue-400 text-white px-3 py-[0.3rem] rounded-md mx-2'>{this.props.btnText}</button>
      </div>
    )
  }
}