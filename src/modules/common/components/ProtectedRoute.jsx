import Cookies from 'js-cookie';
import React from 'react'
import { Redirect, Route} from 'react-router-dom'
import { ROUTES } from '../../../config/ROUTES';
import { ACCESS_TOKEN_KEY } from '../../../utils/constant';

const ProtectedRoute = (props) => {


  const auth = React.useMemo(() => Cookies.get(ACCESS_TOKEN_KEY));

  if (auth) {
    return <Route path = {props.path} component = {props.component} />
  }
  return (
    <Redirect 
        to = {{ pathname : ROUTES.login}}
    />
  )
}

export default ProtectedRoute