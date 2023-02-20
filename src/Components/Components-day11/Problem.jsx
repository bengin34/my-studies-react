
const Problem = () => {
	const changePosition=()=>{
	konum = ["+", "-"]
let X = (Math.random() * 300)
let Y = (Math.random() * 300)
let topP = konum[(Math.round(Math.random()))].concat(X)
let rightP = konum[(Math.round(Math.random()))].concat(Y)

  

	}
	return (
	  <div>		
		<div onMouseEnter={changePosition} className="problem">30 Days of React</div>
  	  
	  </div>
	)
  }
  
  export default Problem






