import React from "react";
import "./style.css";
import Character from "../character";  // Q: Is it okay to refer the directory instead of the actual file?

const Container = props => (
  <div className={
    props.shake? 
    "container d-flex flex-wrap justify-content-center shake" : "container d-flex flex-wrap justify-content-center"
  }>
    {/* props.character is given value in App.js render function */}
    {props.characters.map((a, i) => <Character name={a} key={i} clickEvt={props.clickEvt} />)}
  </div>
)

export default Container;