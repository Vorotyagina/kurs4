import './App.css'
import Book from './book'
import Hello from './hello'

const name = "JS for beginners"
const year = "2018"
const price = "1000"

const name1 = "React for beginners"
const year1 = "2019"
const price1 = "1200"

const name2 = "Vue for beginners"
const year2 = "2021"
const price2 = "1500"

function App() {
  return (
    <div className="App">
      <Hello />
      <Book name={name} year={year} price={price} />
      <Book name={name1} year={year1} price={price1} />
      <Book name={name2} year={year2} price={price2} />
    </div>
  );
}

export default App
