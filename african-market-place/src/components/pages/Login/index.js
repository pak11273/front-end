import * as yup from 'yup';

import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { loginSchema } from '../../../schema';
import { useDispatch } from "react-redux";
import { saveUser } from '../../../utils/actions';

export const LoginPage = () => {
  const initialForm = {
    username: '',
    password: '',
  };

  const errors = {
    username: '',
    password: '',
  };

  const [loginFormValues, setLoginFormValues] = useState(initialForm);
  const [disabled, setDisabled] = useState(true);
  const [loginErrors, setLoginErrors] = useState(errors);
  const {push} = useHistory();
  const {dispatch} = useDispatch();
  
  useEffect(() => {
    loginSchema.isValid(loginFormValues).then(valid => {
      setDisabled(!valid);
    });
  }, [loginFormValues]);

  const onChange = e => {
    const { name, value } = e.target;
    setLoginFormValues({
      ...loginFormValues,
      [name]: value,
    });
    upDateLoginForm(name, value);
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post(
        'https://african-marketplace-tt14.herokuapp.com/api/auth/login',
        loginFormValues
      )
      .then(response => {
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        dispatch(saveUser(response.data.allegedUser.id));
        push('/marketplace');
      })
      .catch(error => {
        console.log(error);
      });
    setLoginFormValues(initialForm);
  };

  const upDateLoginForm = (name, value) => {
    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(() => {
        setLoginErrors({ ...loginErrors, [name]: '' });
        setDisabled(false);
      })
      .catch(error => {
        setLoginErrors({ ...loginErrors, [name]: error.errors[0] });
      });

    setLoginFormValues({ ...loginFormValues, [name]: value });
  };

  return (
    <div id="page-wrapper">
      <div className="landing is-preload">
        <section id="banner">
          <form onSubmit={onSubmit}>
            <div className="inner">
              <h2>Login</h2>
              <label
                style={{
                  maxWidth: '200px',
                  margin: '40px auto',
                }}
              >
                username
                <input
                  type="text"
                  name="username"
                  value={loginFormValues.username}
                  onChange={onChange}
                />
              </label>
              <div style={{ color: 'red' }}>{loginErrors.username}</div>
              <label
                style={{
                  maxWidth: '200px',
                  margin: '40px auto',
                }}
              >
                password
                <input
                  type="password"
                  name="password"
                  value={loginFormValues.password}
                  onChange={onChange}
                />
              </label>
              <div style={{ color: 'red' }}>{loginErrors.password}</div>
              <ul className="actions special">
                <li>
                  <button className="button primary" disabled={disabled}>
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
