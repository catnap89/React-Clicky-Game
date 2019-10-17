import React from "react";
import "./style.css";

const Navbar = props => (
  <div className="navbar">
    <div>Clicky Game</div>
    <div className={props.navMsgColor}>{props.navMsg}</div>
    <div>Score: {props.score} <span className="pipe">|</span> High Score: {props.highscore}</div>
  </div>
);

export default Navbar;