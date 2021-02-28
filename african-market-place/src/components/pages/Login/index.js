import * as yup from 'yup';

import React, { useEffect, useReducer, useState } from 'react';

import axios from 'axios';
import { loginSchema } from '../../../schema';
import { useHistory } from 'react-router-dom';
import { useUpdateLogin } from 'src/utils/UserContext';

export const LoginPage = () => {
  const updateLogin = useUpdateLogin();
  const initialForm = {
    username: '',
    password: '',
  };

  const errors = {
    username: '',
    password: '',
  };

  const UNSET_DISABLE = 'UNSET_DISABLE';
  const SET_DISABLE = 'SET_DISABLE';

  const reducer = (state, action) => {
    switch (action.type) {
      case UNSET_DISABLE:
        return {
          disabled: false,
        };
      case SET_DISABLE:
        return {
          disabled: true,
        };
      default:
        return state;
    }
  };

  const initialState = {
    disabled: true,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [loginFormValues, setLoginFormValues] = useState(initialForm);
  const [loginErrors, setLoginErrors] = useState(errors);
  const [loading, setLoading] = useState(false);

  const { push } = useHistory();

  useEffect(() => {
    loginSchema.isValid(loginFormValues).then(valid => {
      if (valid) {
        dispatch({ type: 'UNSET_DISABLE' });
      }
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
    setLoading(true);
    dispatch({ type: 'SET_DISABLED' });
    e.preventDefault();
    axios
      .post(
        process.env.NODE_ENV === 'production'
          ? // ? 'https://african-marketplace-tt14.herokuapp.com/api/auth/login'
            'http://localhost:5000/api/auth/login'
          : 'http://localhost:5000/api/auth/login',
        loginFormValues
      )
      .then(response => {
        console.log(response);
        dispatch({ type: 'SET_DISABLED' });
        setLoading(false);
        updateLogin(response.data.token);
        push('/marketplace');
      })
      .catch(error => {
        console.log('error: ', error.response.data.message);
        setLoginErrors({ message: error.response.data.message });
        setLoading(false);
      });

    setLoginFormValues(initialForm);
  };

  const upDateLoginForm = (name, value) => {
    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(() => {
        setLoginErrors({ ...loginErrors, [name]: '' });
        dispatch({ type: 'SET_DISABLED' });
      })
      .catch(error => {
        setLoginErrors({ ...loginErrors, [name]: error.errors[0] });
      });

    setLoginFormValues({ ...loginFormValues, [name]: value });
  };

  return (
    <div id="page-wrapper">
      <div className="landing is-preload" id="login">
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
                  <div>
                    <div style={{ color: 'red', marginBottom: '40px' }}>
                      {loginErrors.message}
                    </div>
                    <button
                      className="button primary"
                      style={{ margin: '0 auto' }}
                      disabled={state.disabled}
                    >
                      Login
                      <span className={loading ? 'lds-ring' : ''}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
