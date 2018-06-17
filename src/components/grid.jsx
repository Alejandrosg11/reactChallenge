import React from "react";
import { Jumbotron, Button } from "reactstrap";
import "./grid.css";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      level: 1
    };
  }

  render() {
    const fail = (
      <Button
        color="danger"
        onClick={() => {
          console.log("Perdiste");
        }}
      />
    );
    const success = (
      <Button
        color="success"
        onClick={() => {
          console.log("Ganaste");
          this.state.score++;
          console.log("Score: " + this.seState.score);
          grid.push(fail);
        }}
      />
    );

    const grid = [fail, fail, success, fail];

    let shuffle = a => {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    shuffle(grid);

    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">React Challenge</h1>
          <p className="lead">
            Click on the Green Button in order to get to the next level
          </p>
          <hr className="my-2" />
          <div className="game">{grid}</div>
          <div>
            <p>Score: {this.state.score}</p>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Grid;
