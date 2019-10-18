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
    clickedCharacters: [],
    shake: false
  }


  // binds the current this context to clickCheck() to have access to the current state
  // when passed down to the Character component
  clickEvt = this.clickCheck.bind(this);

  randomArray() {
    // make new copy of images array
    const newCharacterArray = images.slice();
    // stores random (shuffled) image array
    const randomArr = [];

    while (newCharacterArray.length > 0) {
      randomArr.push(newCharacterArray.splice(Math.floor(Math.random() * newCharacterArray.length), 1)[0]);
    }

    return randomArr;
  }

  clickCheck(clickedElem) {
    // copy clickedCharacter array as a new prevState array
    // to modify it by value, and not by reference. clickedCharacters stores all previous clicked images
    const prevClickedCharacters = this.state.clickedCharacters.slice();

    // shuffles the Character Image Array
    const shuffledCharacterArr = this.randomArray();

    // tracks score
    let score = this.state.score;
    let highscore = this.state.highscore;

    // if the clicked element is not in clickedCharacters, then it hasn't been clicked and the score is increased
    if (!this.state.clickedCharacters.includes(clickedElem)) {
      // if score and highScore are the same, then there is a new highScore value
      if (score === highscore) {
        score++;
        highscore++;

        // if they are not equal, then only increase the score value
      } else {
        score++;
      }

      // adds the clicked element to clickedCharacters to track that it has been clicked
      prevClickedCharacters.push(clickedElem);
    }

    // resets the current score if the same element was clicked twice
    if (this.state.clickedCharacters.includes(clickedElem)) {
      let score = 0;
      return this.setState({
        score: score,
        highscore: highscore,
        navMsg: 'Incorrect guess!',
        navMsgColor: 'incorrect',
        allCharacters: shuffledCharacterArr,
        clickedCharacters: [],
        shake: true
      });
    }

    // if this runs, then the same element has not been clicked twice and the score is increased
    this.setState({
      score: score,
      highscore: highscore,
      navMsg: 'You Guessed Correctly!',
      navMsgColor: 'correct',
      allCharacters: shuffledCharacterArr,
      clickedCharacters: prevClickedCharacters,
      shake: false
    });

    // removes the green correct indicator on a successful click after .5s to re-render the class on each success
    return setTimeout(() => this.setState({ navMsgColor: '' }), 500);
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
          clickEvt={this.clickEvt}
        />
        <Footer />
      </Wrapper>
    )
  }
}

export default App;
