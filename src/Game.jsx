import React, { Component } from 'react'
import Board from './Board'

class Game extends Component {
  constructor() {
    super()
    this.state = {
      xIsNext: true,
      winner: null
    }
  }

  getWinner() {
    return this.state.winner ? `Ganador: ${this.state.winner}` : ''
  }

  currentPlayer() {
    return this.state.xIsNext ? 'X' : 'O'
  }

  handleNextPlayer() {
    const newState = !this.state.xIsNext
    this.setState({ xIsNext: newState })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-md-6">{this.props.msg}</div>
                  <div className="col-md-6">
                    Next Player: <span className="badge">{this.currentPlayer()}</span>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <Board
                  player={this.currentPlayer()}
                  onPlayerMove={() => this.handleNextPlayer()}
                />
              </div>
              <div className="panel-footer">
                <div className="row">
                  <div className="col-md-6">
                    <button className="btn btn-default">Jugar de nuevo</button>
                  </div>
                  <div className="col-md-6">{this.getWinner()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Game
