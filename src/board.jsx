import { Component } from "react";
import Button from "./button";
import "./board.css";
import * as utils from "./utils";
import gif from "./photos/confetti.gif";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: Array(9).fill(null),
      history: [],
      xisNext: true,
    };
  }

  // handling box clicking event at the time of rendering

  handleBoxClicked(index) {
    const boxes = this.state.boxes.slice();

    // checking for duplicates click
    if (boxes[index] !== null) {
      return;
    }

    // checking for winning combination
    if (utils.winnerCombination(boxes)) {
      return;
    }

    boxes[index] = this.state.xisNext ? "x" : "o";

    //  setting the states after every re - rendering
    this.setState({
      boxes: boxes,
      xisNext: !this.state.xisNext,
    });

    // checking for all boxes are clicked or not
    if (utils.allBoxesAreClicked(boxes) === true) {
      return;
    }
  }

  handleRestart() {

    this.setState({
      boxes: Array(9).fill(null),
      xIsNext: true,
    });
    
  }

  render() {
    // checking for winner at every rendering
    const winner = utils.winnerCombination(this.state.boxes);
    const isFilled = utils.allBoxesAreClicked(this.state.boxes);
    let status;

    if (winner) {
      status = winner + " is the Winner";
    } else if (!winner && isFilled) {
      status = "Game Draw";
    } else {
      status = `${this.state.xisNext ? "x " : "o "} chance`;
    }

    return (
      <div>
        <div className="board">
          {winner && <img src={gif} alt="gifs" className="gifAnimation" />}
          <div className="heading">{status}</div>
          <div className="boxBoard">
            <div className="boardrow">
              <Button
                value={this.state.boxes[0]}
                handleBoxClicked={() => this.handleBoxClicked(0)}
                border-top="none"
              />
              <Button
                value={this.state.boxes[1]}
                handleBoxClicked={() => this.handleBoxClicked(1)}
              />
              <Button
                value={this.state.boxes[2]}
                handleBoxClicked={() => this.handleBoxClicked(2)}
              />
            </div>
            <div className="boardrow">
              <Button
                value={this.state.boxes[3]}
                handleBoxClicked={() => this.handleBoxClicked(3)}
              />
              <Button
                value={this.state.boxes[4]}
                handleBoxClicked={() => this.handleBoxClicked(4)}
              />
              <Button
                value={this.state.boxes[5]}
                handleBoxClicked={() => this.handleBoxClicked(5)}
              />
            </div>
            <div className="boardrow">
              <Button
                value={this.state.boxes[6]}
                handleBoxClicked={() => this.handleBoxClicked(6)}
              />
              <Button
                value={this.state.boxes[7]}
                handleBoxClicked={() => this.handleBoxClicked(7)}
              />
              <Button
                value={this.state.boxes[8]}
                handleBoxClicked={() => this.handleBoxClicked(8)}
              />
            </div>
          </div>
        {winner && (
          <button className="restartBtn" onClick={this.handleRestart}>
            Restart
          </button>
        )}
        </div>
      </div>
    );
  }
}

export default Board;
