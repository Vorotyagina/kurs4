/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'

function loginData() {
  return [
    {
      login: "",
      password: "",
    },
    {
      error: "",
    },
  ];
}
  

function Login({ login, password, error, onChange, onBlur }) {

 
  console.log("onChange" + " " + onChange)

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
                value={login}
                onBlur={isValue}
                onChange={loginCurrentStr}
              />
              <input
                type="password"
                placeholder="Пароль"
                id="password"
                value={password}
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
