import './App.css'
// import MinMaxClassInput from './minmaxClassInput'
import MinMaxClass from './minmaxClass'

function App() {
  return (
    <div className="App">
      <MinMaxClass minValue="1" maxValue="7" />
      {/* <MinMaxClassInput minValue="3" maxValue="10" /> */}
    </div>
  )
}

export default App
