 import { useState } from 'react';

function MinMaxLazy({ min = 0, max, current, onChange}) {


  const [inputValue, setInputValue] = useState(current)

 
// меняем значение инпута
 const handleChange = (e) => {
  setInputValue(e.target.value)
 }

  function applyCurrent(num) {
    const validNum = Math.max(min, Math.min(max, num))
   
    onChange(validNum)
    setInputValue(validNum)

  }

  function parseCurrentStr(e) {
    // Прочти про parseInt ;) https://webformyself.com/chisla-v-javascript-funkciya-parseint/
    const num = parseInt(e.target.value, 10)
    
    applyCurrent(Number.isNaN(num) ? min : num)
  }



  const handleBlur = (e) => {

    parseCurrentStr(e)
  }

  const handleKeyPress = (e) => {
      if(e.charCode === 13){
 
        parseCurrentStr(e)
      }
    }

  const inc = () => applyCurrent(current + 1)
  const dec = () => applyCurrent(current - 1)

  return (
    <div>
      <button type="button" onClick={dec} className="removeButton">
        -
      </button>
      <input type="text" value={inputValue} onChange={handleChange} onBlur={handleBlur} onKeyPress={handleKeyPress}/>
      <button type="button" onClick={inc} className="addButton">
        +
      </button>
    </div>
  )
}

export default MinMaxLazy
