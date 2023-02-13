import React from 'react'

const Form = ({type, placeholder}) => {
  return (
    <div>
    <form className="container w-50">
      <div className="mb-3 mt-3">
        <input
          type={type.map((item) =>{
            return (
                item
            )
          })}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder={placeholder.map((item) =>{
            return (
                item
            )
          })}
        />
      </div>
     
      <div className=" text-center">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default Form
