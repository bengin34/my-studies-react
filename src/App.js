
// import Header from './Components-day9/Header';
// import Main from './Components-day8/Main';
// import Footer from './Components-day8/Footer'; 

// import Greeting from "./Components-day9/Greeting";
// import LoginControl from "./Components-day9/LoginControl"
import React from "react";
import Rendering from "./Components-day9/GeeksForGeeks";
import MailBox from "./Components-day9/MailBox";


const messages = [
  "React",
  "Re: React",
  "Re:Re: React",
  "React",
  "Re: React",
  "Re:Re: React",
  "React",
  "Re: React",
  "Re:Re: React",
  "React",
  "Re: React",
  "Re:Re: React",
  "React",
  "Re: React",
  "Re:Re: React",
];


function App() {


  return(
    <div>
    {/* <Greeting  isLoggedIn={true}/> */}
    {/* <LoginControl /> */}

    {/* <MailBox unreadMessages= {messages} /> */}
    <Rendering />
    </div>
  )
  };


export default App;
