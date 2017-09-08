import React from 'react'

function Square(props) {
  return (
    <div className="square">
      <button className="btn btn-default" onClick={() => props.onClickSquare()}>
        {props.value}
      </button>
    </div>
  )
}

export default Square
