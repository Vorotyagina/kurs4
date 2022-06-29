import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h3>Упс, такой страницы нет</h3>
      <Link to="/">Home</Link>
    </div>
  )
}
export default NotFound