/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import { Link, useLocation } from 'react-router-dom'

function Login({ login, password, error, onChange, onBlur }) {
  const location = useLocation()

  const isRequied = true

  function isValue(e) {
    const value = e.target.value

    onChange(value, isRequied, e.target.id)
  }

  const enter = (e) => {}

  function loginCurrentStr(e) {
    console.log('login')
    const value = e.target.value
    onChange(value, 'login', 0)
  }

  function passwordCurrentStr(e) {
    const value = e.target.value
    onChange(value, 'password', 0)
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td width="10" />
            <td>
              <input
                type="text"
                id="login"
                placeholder="Логин"
                onBlur={isValue}
                onChange={loginCurrentStr}
              />
              <input
                type="password"
                placeholder="Пароль"
                id="password"
                onBlur={isValue}
                onChange={passwordCurrentStr}
              />
              <button type="button" onClick={enter}>
                Войти
              </button>
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <div>{error}</div>
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Login
