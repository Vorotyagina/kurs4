/* eslint-disable react/no-typos */
import {PropTypes} from 'prop-types'

function DelButton({ item, onClick }) {
  

    function deleteBook(num) {
        onClick(num)
    }

   const del = () => deleteBook(item)

    return (
      <div>
        <button type="button" onClick={del} className="removeBook">
          X
        </button>
      </div>
    )
  }

  
DelButton.PropTypes = {
  item: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
}
  
  export default DelButton
  