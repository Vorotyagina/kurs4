/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */

import { Link } from 'react-router-dom'



function GeneralCart({data}) {

  const quantity = data.reduce((result, item) =>
    (result += Number(item.quantity))
  , 0)

  const summa = data.reduce((result, item) => 
    (result += Number(item.price) * Number(item.quantity)),0)

    return (
      <div>
      <h1>Total: {summa}</h1>
      <h1>Total quantity: {quantity}</h1>
      <Link to="/">Home</Link>
      </div>
    )
  }
  
  export default GeneralCart