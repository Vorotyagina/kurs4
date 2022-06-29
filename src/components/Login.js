/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Login() {

  const [logData, setLogData] = useState({
    login: "",
    password: ""
  });
  const [error, setError] = useState('');
  

  const enter = (e) => {
    let err = false
    if (!/@/.test(logData.login) && !/.com/.test(logData.login)){
      err = true
      setError({
        login: "Введите корректный логин",
        password: error.password})
    }
    if (logData.password.length < 5 ){
      err = true
      setError({
        login: error.login,
        password: "Пароль должен быть больше 6 символов"})
    }
    if (!err) {
      setError({
        login: "",
        password: ""
      })
    }
  
  }

  function logDataCurrentStr(e) {
    console.log (e.target)
    const value = e.target.value
    setLogData(() => ({
      ...logData,
      [e.target.id]: e.target.value,
    }));
  };
  

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
                value={logData.login}
                // onBlur={isValue}
                onChange={logDataCurrentStr}
              />
              <input
                type="password"
                placeholder="Пароль"
                id="password"
                value={logData.password}
                // onBlur={isValue}
                onChange={logDataCurrentStr}
              />
              <button type="button" onClick={enter}>
                Войти
              </button>
              <div>{error.login}</div>
              <div>{error.password}</div>
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <div></div>
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Login
