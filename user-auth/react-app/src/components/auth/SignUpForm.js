import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './signUpForm.css'

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className='signup-outermost-container'>
      <form onSubmit={onSignUp} className='signup-form'>
        <div className='name-input-container'>
          <label htmlFor="name" className='name-label'>User Name</label>
          <input
            type="text"
            id="name"
            name="username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className='email-input-container'>
          <label htmlFor="email" className='email-label'>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className='password-input-container'>
          <label htmlFor="password" className='password-label'>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className='repeat-password-input-container'>
          <label htmlFor="repeat-password" className='repeat-password-label'>Repeat Password</label>
          <input
            type="password"
            id="repeat-password"
            name="repeat-password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
