/* eslint-disable react/no-typos */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */

import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'


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
  
  
GeneralCart.PropTypes = {
  data: PropTypes.array.isRequired,
}
  
export default GeneralCart