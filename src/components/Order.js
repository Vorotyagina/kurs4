/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */

import React from 'react'
import OrderDetail from './OrderDetail'

export default class Order extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: 0, // сумма
      quantity: 0, // количество
      details: [
        // описание
        {
          id: 1,
          productName: 'Война и мир — Л.Н.Толстой',
          price: 800,
          quantity: 0,
        },
        {
          id: 2,
          productName: 'Две жизни — К.Е.Антарова',
          price: 700,
          quantity: 0,
        },
        {
          id: 3,
          productName: 'Разговор с богом — Н.Д.Уолша',
          price: 1000,
          quantity: 0,
        },
        {
          id: 4,
          productName: 'Хохот Шамана — В.П.Серкин',
          price: 600,
          quantity: 0,
        },
        {
          id: 5,
          productName: 'Хроники Ехо — Макс Фрай',
          price: 400,
          quantity: 0,
        },
      ],
    }

// const IncrementQuantityWithPrice = (index) => {
//   this.setState((prevState) => ({ quantity: (Number(prevState.quantity) + 1) }))
//   console.log('@')
// }

  const incrementQuantityWithPrice = (index, e) => {
    console.log('+', index)
  }

  const DecrementQuantityWithPrice = (index, e) => {
    console.log("-", index)
  }

}

  render() {
    
    return (
      <div className='cards'>
        <OrderDetail items = {this.state.details} increment={this.incrementQuantityWithPrice}/>
        <div className="order">
          <div className="clear" />
          <p className="total">
            Total Quantity : <b> </b>
          </p>
          <p className="total">
            Total Price : <b> /- </b>
          </p>
        </div>
      </div>
    )
  }
}
