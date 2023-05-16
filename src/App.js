import React from "react";
import AudioBox from "./components/AudioBox";
import ButtonList from "./components/ButtonList";
import YouTubeVideo from "./components/YouTubeVideo";
import logo from "./img/logo.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <div className="container">
        <div className="column">
          <AudioBox />
        </div>
        <div className="column">
          <ButtonList />
        </div>
        <p></p>
        <div className="column">
          <YouTubeVideo />
        </div>
      </div>
    </div>
  );
}

export default App;
