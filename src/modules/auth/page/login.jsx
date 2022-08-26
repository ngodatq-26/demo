import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = () => {

  const [loading,setLoading] = React.useState(false);

  const OnLogin = React.useCallback((email, password) => {
    setLoading(true);
    console.log(email, password);
    setLoading(false);
  });

  return (
    <div>
      logo
      <LoginForm OnLogin = {OnLogin} />
    </div>
  )
}

export default Login