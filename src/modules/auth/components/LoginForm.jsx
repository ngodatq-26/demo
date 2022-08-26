import React from 'react'

const LoginForm = (props) => {

  const [formValues, setFormValues] = React.useState({
    email : '',
    password : ''
  })

  const HandleLogin = React.useCallback(() => {
    props.OnLogin(formValues.email, formValues.password);
    console.log('ok');
  },[formValues]);

  const GoogleHandle = React.useCallback(() => {
    console.log('google');
  })

  return (
    <div>
        <form onSubmit={(e) => {
                          e.preventDefault();
                          HandleLogin() }}>
            <div>
                <input type="text" onChange={(e) => { setFormValues({...formValues, email : e.target.value })}} />
            </div>
            <div>
                <input type="text" onChange={(e) => { setFormValues({ ...formValues, password: e.target.value }) }} />
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
        <input type="submit"value="button google" onClick={GoogleHandle}/>
    </div>
  )
}

export default React.memo(LoginForm)