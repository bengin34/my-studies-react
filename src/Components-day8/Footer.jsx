import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className='h-12 bg-blue-400 flex items-center justify-center fixed bottom-0 w-[100%]'>
        <p>© Copyright 2023</p>
      </div>
    )
  }
}