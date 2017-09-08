import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {this.props.msg}
          </div>
        </div>
      </div>
    )
  }
}

export default App
