import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import './loginForm.css'

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className='login-outermost-container'>
      <form onSubmit={onLogin} className='login-form'>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div className='login-input-container'>
          <label htmlFor="email" className='login-input-label'>Email</label>
          <input
            name="email"
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
            className='login-input'
          />
        </div>
        <div className='password-input-container'>
          <label htmlFor="password" className='password-input-label'>Password</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
            className='password-input'
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
