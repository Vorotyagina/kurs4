/* eslint-disable react/prefer-stateless-function */
import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    console.log ("hi");}
  
  render() {
    return (
      <div>
          <h2> {this.props.name} </h2>
          <p> {this.props.year} </p>
          <p> {this.props.price} </p>
      </div>
      )
  }
}
