import React from "react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Sub from "./components/Sub"
import Ads from "./components/Ads"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <div className = "bot">
          <Nav />
          <Main>
            <div className = "in-main">
              <Sub />
              <Sub />
              <Sub />
            </div>
              <Ads />
          </Main>
        </div>
    </div>
  );
}

export default App;
