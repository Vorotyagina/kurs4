/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
// import './timer.css';

const interval = 100;

// eslint-disable-next-line no-unused-vars
export default class Timer extends React.Component {
  // Инициализация состояния
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  componentDidMount() {
  // заводим таймер
    this.timerId = setInterval(() => this.increment(), 1000 / interval);
  }

  componentWillUnmount() {
  // наводим порядок после удаления компонента
    clearInterval(this.timerId);
  }

  increment() {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    // eslint-disable-next-line prefer-destructuring
    const value = this.state.value;
    return (
      <div>
       <p>Timer:</p>
        <p>
         <span>{`${Math.round(value / interval / 60 / 60)}`} : </span>
          <span>{`${Math.round(value / interval / 60)}`} : </span>
          <span>{`${Math.round(value / interval)}`} . </span>
          <span>{`${value % interval}`}</span>
        </p>
      </div>
    );
  }
}

