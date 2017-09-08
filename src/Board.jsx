import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Square from './Square'

class Board extends Component {
  constructor() {
    const TOTAL_ITEMS = 9
    super()
    this.state = {
      squares: Array(TOTAL_ITEMS).fill(null)
    }
  }

  handleClick(index) {
    const squaresToModify = this.state.squares.slice()
    squaresToModify[index] = this.props.player
    this.setState({ squares: squaresToModify })
    this.props.onPlayerMove()
  }

  renderSquares() {
    return this.state.squares
      .map(
        (item, index) =>
          (<Square
            key={index.toString()}
            value={this.state.squares[index]}
            onClickSquare={
              () => {
                this.handleClick(index)
              }
            }
          />)
      )
  }

  render() {
    return (
      <div className="row Board">
        {this.renderSquares()}
      </div>
    )
  }
}

Board.propTypes = {
  player: PropTypes.string.isRequired
}

export default Board
