import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travel
          destination="Sintra"
          country="Portugal"
          photo="http://www.sintra-portugal.com/Images/750px/pena-palace-sintra.jpg"
          distance="1169 km"
        />
        <Travel
          destination="Zante"
          country="Greece"
          photo="https://www.friendshiptravel.com/images/destination/greece/Zante/zante.jpg"
          distance="2617 km"
        />
      </div>
    );
  }
}

export default App;
