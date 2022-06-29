/* eslint-disable react/prefer-stateless-function */
import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    console.log ("hi");}
  
  render() {
    return (
        <h1 id="hello" className="class1">
            Hello from React
        </h1>
      )
  }
}
