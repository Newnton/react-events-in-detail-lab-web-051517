import React from 'react'

export default class CoordinatesButton extends React.Component {
  callback = (e) => {
    let coordinates = [
      e.screenX,
      e.screenY
    ]
    this.props.onReceiveCoordinates(coordinates)
  }

  render(){
    return(
      <button onClick={this.callback}></button>
    )
  }
}
