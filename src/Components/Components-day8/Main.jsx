import React, { Component } from "react";
import Button from "./Button";
export default class Main extends Component {
  state = {
    greet: false,
    date: false,
    bg: false,
  };
  changeTheme = () => {
    let bg = !this.state.bg
    this.setState({bg})
}
render() {
    if (this.state.bg){
        document.querySelector('div').classList.add('bg-gray-700')
        document.querySelector('div').classList.add('text-white')
    }
    else{
        document.querySelector('div').classList.remove('bg-gray-700')
        document.querySelector('div').classList.remove('text-white')
    }
    console.log(this.state);
    return (
      <div className="flex mt-10">
        <div className="w-[50%] flex items-center justify-center gap-10">
          <ul>
            <li>Html</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
          <img
            className="w-52 rounded-3xl"
            src="https://welovedoodles.com/wp-content/uploads/2022/02/walter-dog-meme-original-790x1024.jpeg"
            alt="dog"
          />
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <Button btnText={"greet"} />
          <Button btnText={"show date"} />
          <Button btnText={"change theme"} click={this.changeTheme} />
        </div>
        <div></div>
      </div>
    );
  }
}