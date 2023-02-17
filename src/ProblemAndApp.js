import React from 'react'

const ProblemAndApp = () => {

  let  condition  = NaN ;
  return (
    <div>
      
      <h1>React</h1>

     {condition !== NaN && <h2>Conditional Rendering</h2> }
     {/* {condition ? <h2>Conditional Rendering</h2>  :  null } */}
    
    </div>
  )
}

export default ProblemAndApp


// false
// null
// NaN
// 0
// undefined


// https://medium.com/geekculture/stop-using-for-conditional-rendering-in-react-a0f7b96200f8