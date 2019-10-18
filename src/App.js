import React, { Component } from "react";
import Navbar from "./components/navbar";
import Wrapper from "./components/wrapper";
import Jumbotron from "./components/jumbotron";
import Container from "./components/container";
import Footer from "./components/footer";
import images from "./assets/javascript/images";

class App extends Component {

  state = {
    score: 0,
    highscore: 0,
    navMsg: "Click an image to start the game!",
    navMsgColor: '',
    allCharacters: this.randomArray(),
    clickedCharacter: [],
    shake: false
  }

  randomArray() {
    // make new copy of images array
    const newCharacterArray = images.slice();
    // stores random (shuffled) image array
    const randomArr = [];

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
        <Jumbotron />
        <Container 
          shake={this.state.shake}
          characters={this.state.allCharacters}
          clickEvt={this.state.clickEvt}
        />
        <Footer />
      </Wrapper>
    )
  }
}

export default App;
