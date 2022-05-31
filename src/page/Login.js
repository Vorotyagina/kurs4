import { Link, useLocation } from 'react-router-dom'

function Login() {
  const location = useLocation();

  const login = location.state?.login;
  const password = location.state?.password;
  const error = location.state?.error

  console.log(login);
  console.log(password);
  console.log(error);


  // const logData1 = location.state?.logData;
  // console.log(logData1)
  return (
    <div>
      <h1>Вход</h1>
      <Link to="/">Home</Link>
    </div>
  )
}
export default Login
