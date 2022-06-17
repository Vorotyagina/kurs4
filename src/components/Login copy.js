/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import { useState } from 'react'

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
  

function Login() {

  const [logData, setLogData] = useState(loginData());
  const isRequied = true

const dologData = (value, isRequired, what, e) => {

  console.log(value)
  if (isRequired) {
    if (logData[1].error) {console.log(logData[1].error);}
    if (value === "") {
      setLogData([
        {
          login: value,
          password: logData[0].password,
        },
        {
          error: "Введите логин или пароль",
        },
      ]);
    } else {
      setLogData([
        {
          login: logData[0].login,
          password: logData[0].password,
        },
        {
          error: "",
        },
      ]);
      if (what === "login") {
        console.log('login')
        setLogData([
          {
            login: value,
            password: logData[0].password,
          },
          {
            error: logData[1].error,
          },
        ]);
      }
      if (what === "password") {
        setLogData([
          {
            login: logData[0].login,
            password: value,
          },
          {
            error: logData[1].error,
          },
        ]);
      }
    }
  }
};

  function isValue(e) {
    const value = e.target.value

    dologData(value, isRequied, e.target.id)
  }

  const enter = (e) => {
    const value = e.target.value
    // if (!!/@/.test(logData[0].login) && !/.com/.test(logData[0].login)){
      setLogData([
        {
          [e.target.name]: e.target.value,
        },
        {
          error: logData[1].error,
        }
      ])
    // }
  
  }

  function loginCurrentStr(e) {
    const value = e.target.value
    dologData(value, 'login', 0)
    console.log(value, 'login', 0)
  }

  function passwordCurrentStr(e) {
    const value = e.target.value
    dologData(value, 'password', 0)
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
                value={logData[0].login}
                // onBlur={isValue}
                onChange={loginCurrentStr}
              />
              <input
                type="password"
                placeholder="Пароль"
                id="password"
                value={logData[0].login}
                // onBlur={isValue}
                onChange={passwordCurrentStr}
              />
              <button type="button" onClick={enter}>
                Войти
              </button>
              <div>{logData[1].error}</div>
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <div>{logData[1].error}</div>
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Login
