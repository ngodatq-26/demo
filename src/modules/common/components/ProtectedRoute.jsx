import Cookies from 'js-cookie';
import React from 'react'
import { Redirect, Route} from 'react-router-dom'
import { ROUTES } from '../../../config/ROUTES';

const ProtectedRoute = (props) => {


  const auth = Cookies.get('key');

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