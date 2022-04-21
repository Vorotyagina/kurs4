/* eslint-disable no-undef */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = { curCount: props.minValue }
  }

  upCount = () => {
    if (this.state.curCount < this.props.maxValue) {
      this.setState({ curCount: Number(this.state.curCount) + 1 })
    }
  }

  downCount = () => {
    if (this.state.curCount > this.props.minValue) {
      this.setState({ curCount: Number(this.state.curCount) - 1 })
    }  
  }

  render() {
    return (
      
      <div>
        <div>Первый компонент</div>
        <div> От {this.props.minValue} до {this.props.maxValue}:</div>
        <button type="button" onClick={this.downCount}>
          Down
        </button>
        <span> {this.state.curCount} </span>
        <button type="button" onClick={this.upCount}>
          Up
        </button>
        <hr />
      </div>
    )
  }
}
