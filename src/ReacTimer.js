import React from 'react'
// import './timer.css';

const interval = 100

export default class ReacTimer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
      isCounting: false,
    }

    this.handleStart = this.handleStart.bind(this)
    this.timerStart = this.timerStart.bind(this)
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  handleStart = () => {
    if (!this.state.isCounting) {
      this.timerStart()
    }
      this.setState({isCounting: true})
  }

  handleStop = () => {
    if (this.state.isCounting) {
      this.timerStop()
    }
    this.setState({isCounting: false})
  }

  handleReset = () => {
    if (this.state.count !== 0) {
      this.timerReset()
    }
      this.setState({count: 0})
  }

  increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  timerStart() {
    this.timerId = setInterval(() => this.increment(), 1000 / interval)
  }

  timerStop() {
    clearInterval(this.timerId)
  }

  timerReset() {
    this.setState({count: 0})
  }

  render() {
      const val = this.state.count
      return (
          <div className="ReacTimer">
              <h1>React Timer</h1>
              <div>
                <p>
                  <span>{`${Math.round( val/ interval / 60 / 60)}`} : </span>
                  <span>{`${Math.round(val / interval / 60)}`} : </span>
                  <span>{`${Math.round(val / interval)}`} . </span>
                  <span>{`${val % interval}`}</span>
                </p>
              </div>
              <h3>{this.state.count}</h3>
              {!this.state.isCounting ? (
                  <button type="button" onClick={this.handleStart}>Start</button>
              ) : (
                  <button type="button" onClick={this.handleStop}>Stop</button>
              )}
              <button type="button" onClick={this.handleReset}>Reset</button>
          </div>
      )
              }
}