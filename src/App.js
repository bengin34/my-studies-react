// import logo from './logo.svg';
import "./App.css";
// import Header from "./Component/Header";

import Form from "./Component/Form/Form";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
const data = {
  type:["text","text", "email"],
  placeholder:["firstname","lastname","email"]
}

  return(
    <div>
      <Form type={data.type} placeholder={data.firstname}/>
    </div>
  )
  };


export default App;
