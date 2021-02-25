import * as yup from 'yup';

import React, { useEffect, useState } from 'react';

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

  const [loginFormValues, setLoginFormValues] = useState(initialForm);
  const [disabled, setDisabled] = useState(true);
  const [loginErrors, setLoginErrors] = useState(errors);
  const [loading, setLoading] = useState(false);

  const { push } = useHistory();

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
    setLoading(true);
    setDisabled(true);
    e.preventDefault();
    axios
      .post(
        process.env.NODE_ENV === 'production'
          ? 'https://african-marketplace-tt14.herokuapp.com/api/auth/login'
          : 'http://localhost:5000/api/auth/login',
        loginFormValues
      )
      .then(response => {
        setDisabled(false);
        setLoading(false);
        updateLogin(response.data.token);
        push('/marketplace');
      })
      .catch(error => {
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
        setDisabled(false);
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
                    <div style={{ color: 'red' }}>{loginErrors.message}</div>
                    <button
                      className="button primary"
                      style={{ margin: '0 auto' }}
                      disabled={disabled}
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
