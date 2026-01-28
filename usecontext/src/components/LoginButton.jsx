import React from 'react';
import { useAlert } from './useAlert';

function LoginButton() {

  const {addNotification} = useAlert()
  const onClickHandler = ()=> {
  addNotification("Logged in Successfully!")
  }

  return <button onClick={onClickHandler}>Login</button>
}

export default LoginButton;
