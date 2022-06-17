import  { useState } from "react";
import { Link} from 'react-router-dom'

function LoginPass() {
  const [errorMessageStr, errorMessageSet] = useState('');
  const [inputValue, setInputField] = useState({
    login: '',
    password: '',
  })
  

  const inputHandler = (e) => {
    setInputField(() => ({
      ...inputValue,
      [e.target.name]: e.target.value,
    }));
  };

  const submitButton = () => {
    if(!/@/.test(inputValue.login) && !/.com/.test(inputValue.login) ) {
      errorMessageSet(`Логин должен быть примерно таким "@domain.com"`)
    
    } else if(inputValue.password.length < 5) {
      errorMessageSet(`Пароль должен быть больше 6 символов!`)
    
    } else {
      errorMessageSet(`Ваш логин: ${inputValue.login}  Ваш пароль: ${inputValue.password}`)
    }
  }
  
    return (
    <div className="listView">
      <label htmlFor='login'>
        Логин:
      <input type="email"   name="login"  onChange={inputHandler}  className="login" placeholder='login' id='login'/>
      </label>
      <label htmlFor='password'>
        Пароль:
      <input type="password" name="password" onChange={inputHandler} className="password" placeholder='password' id='password'/>
      </label>
      <div>{errorMessageStr}</div>
      <button type="button" onClick={submitButton} style={{width: "150px"}} >
            Залогиниться
        </button>
      <Link to="/">Main Page</Link>
    </div>
    )
}

export default LoginPass