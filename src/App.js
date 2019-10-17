import React, { Component } from "react";
import Navbar from "./components/navbar";
import Wrapper from "./components/wrapper";

class App extends Component {

  state = {
    score: 0,
    highscore: 0,
    // clickCheck
    // navMsg
    navMsg: "Click an image to start the game!",
    // navMsgColor
    navMsgColor: ''
    // shakeEffect
    // 

  }

  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
          highscore={this.state.highscore}
          navMsg={this.state.navMsg}
          navMsgColor={this.state.navMsgColor}
        />
      </Wrapper>
    )
  }
}

export default App;
