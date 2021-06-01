import * as yup from 'yup';

import {
  CLEAR_FORM,
  SET_DISABLED,
  SET_VALUES,
  UNSET_DISABLED,
} from 'src/useReducer';
import React, { useEffect, useReducer, useState } from 'react';
import reducer, { initialState } from 'src/useReducer';

import axios from 'axios';
import { connect } from 'react-redux';
import { loginSchema } from '../../../schema';
import { setUser } from 'src/state/actions/userActions';
import { useHistory } from 'react-router-dom';
import { useUpdateLogin } from 'src/utils/UserContext';

const Login = props => {
  const updateLogin = useUpdateLogin();

  const [state, dispatch] = useReducer(reducer, initialState);

  const [loginFormValues, setLoginFormValues] = useState(state.initialForm);
  const [loginErrors, setLoginErrors] = useState(state.errors);
  const [loading, setLoading] = useState(false);

  const { push } = useHistory();

  useEffect(() => {
    loginSchema.isValid(loginFormValues).then(valid => {
      if (valid) {
        dispatch({ type: UNSET_DISABLED });
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
    dispatch({ type: SET_DISABLED });
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
        dispatch({ type: SET_DISABLED });
        setLoading(false);
        updateLogin(response.data.token);
        props.setUser({
          userId: response.data.userId,
          username: response.data.username,
        });
        push('/marketplace');
      })
      .catch(error => {
        setLoginErrors({ message: error && error.response.data.message });
        setLoading(false);
      });

    dispatch({ type: CLEAR_FORM });
  };

  const upDateLoginForm = (name, value) => {
    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(() => {
        setLoginErrors({ ...loginErrors, [name]: '' });
        dispatch({ type: SET_DISABLED });
      })
      .catch(error => {
        setLoginErrors({ ...loginErrors, [name]: error.errors[0] });
      });

    setLoginFormValues({ ...loginFormValues, [name]: value });
    dispatch({ type: SET_VALUES, name, value });
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
                username (demoUser)
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
                password (password)
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

const mapStateToProps = ({ userReducer }) => {
  return { username: userReducer.username, userId: userReducer.userId };
};

export const LoginPage = connect(mapStateToProps, { setUser })(Login);
