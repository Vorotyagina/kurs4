// На следующем изображении четные числа выделены зеленым цветом, 
// нечетные - желтым, а простые числа - красным. 
// Создайте подобный отдельный компонент 


import { Link } from 'react-router-dom'

function ColoredNumbers() {
  let numbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ]
  
  function isSimple (number) {
    for(var i = 2; i < number; i++)
      if(number % i === 0) return false;
    return number > 1;
  }

  function isDividedByTwo (number) {
    if (number%2 === 0) {
      return true
    }
    return false
  }

  function getColor (number) {
    let colorForSimpleNumber = 'red' 
    let colorForDoubleNumber = 'green' 
    let colorForNonDoubleNumber = 'yellow' 

    let dividedByTwo = false
    let simple = isSimple(number)
    dividedByTwo = false
    if (!simple) {
      dividedByTwo = isDividedByTwo(number)
    }

    if (simple) return colorForSimpleNumber
    if (dividedByTwo) return colorForDoubleNumber
    return colorForNonDoubleNumber
  }

  
  let colorsOfNumbers = numbers.map((number) => {
    return getColor(number)
  })
  
   const columns = 8
   const rows = 4

  return (
    <div>
      <h1>Colored Numbers</h1>
      <div className="container">          
      {numbers.map((number, i) => (
          <div className={colorsOfNumbers[i]} key={number.id}>{number}</div>))}
      </div>
      <Link to="/">Home</Link>
    </div>
  )
}
export default ColoredNumbers