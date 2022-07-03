import React from "react";

export default function Card(props) {
  let audio = new Audio(props.cards.music);
  function toggle() {
    if (audio.paused) {
      audio.className = "play";
      audio.play();
    } else {
      audio.className = "pause";
      audio.pause();
    }
  }
  return (
    <div className="column">
      <div id="card">
        <div className="container">
          <img id="imgCard" src={props.cards.image} alt="cartoon img" />
          <div id="cardinfo">
            <h3> Cartoon Name: {props.cards.name} </h3>
            <p>
              {" "}
              Year: {props.cards.year} Studio: {props.cards.studio}
            </p>
            <p> Music:</p>
            <button id="playBtn" className="pause" onClick={toggle}>
            ▶ Play /  Pause
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
