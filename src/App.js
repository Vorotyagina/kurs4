import './App.css'
import { Routes, Route } from 'react-router-dom'
// import { createBrowserHistory } from 'history'
import About from './page/About'
import NotFound from './page/NotFound'
import BookCart from './components/BookCart'
import Login from './components/Login'
import ColoredNumbers from './components/ColoredNumbers'

// const history = createBrowserHistory()

function App() {
  return (
    <div className="1">
      <div className="App">
        <Routes>
          <Route path="/" element={<BookCart />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={ <Login /> } />
          <Route path="colored__numbers" element={<ColoredNumbers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
