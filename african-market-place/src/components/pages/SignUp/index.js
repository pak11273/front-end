import * as yup from 'yup';

import React, { useEffect, useState } from 'react';

import { SignupInput } from './SignupInput';
import axios from 'axios';
import schema from '../../../schema';
import { useHistory } from 'react-router-dom';

export const SignUpPage = () => {
  const errors = {
    username: '',
    email: '',
    country: '',
    password: '',
    confirm: '',
    first_name: '',
    last_name: '',
    user_role: '',
  };

  const formValues = {
    username: '',
    email: '',
    password: '',
    confirm: '',
    country: '',
    first_name: '',
    last_name: '',
    user_role: false,
  };

  const [disabled, setDisabled] = useState(true);
  const [signUpErrors, setSignUpErrors] = useState(errors);
  const [signUpFormValues, setSignUpFormValues] = useState(formValues);
  const { push } = useHistory();

  useEffect(() => {
    schema.isValid(signUpFormValues).then(valid => {
      setDisabled(!valid);
    });
  }, [signUpFormValues]);

  const onChange = e => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    updateSignInForm(name, valueToUse);
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post(
        process.env.NODE_ENV === 'production'
          ? 'https://african-marketplace-tt14.herokuapp.com/api/auth/register'
          : 'http://localhost:5000/api/auth/register',
        signUpFormValues
      )
      .then(response => {
        localStorage.setItem('token', response.data.token);
        push('/login');
      })
      .catch(error => {
        console.log(error);
      });
    setSignUpFormValues(formValues);
  };

  const updateSignInForm = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setSignUpErrors({ ...signUpErrors, [name]: '' });
        setDisabled(false);
      })
      .catch(error => {
        setSignUpErrors({ ...signUpErrors, [name]: error.errors[0] });
      });

    setSignUpFormValues({ ...signUpFormValues, [name]: value });
  };

  return (
    <div id="page-wrapper" style={{ padding: 0 }}>
      <div className="landing is-preload">
        <section id="banner" style={{ height: '100%' }}>
          <form style={{ margin: '90px 0 2em 0' }} onSubmit={onSubmit}>
            <div className="inner signup_inner">
              <h2>Sign Up</h2>
              <div className="signup">
                <div className="signup_row">
                  <SignupInput
                    name="First Name"
                    api="first_name"
                    value={signUpFormValues.first_name}
                    error={signUpErrors.first_name}
                    onChange={onChange}
                  />
                  <SignupInput
                    name="Last Name"
                    api="last_name"
                    value={signUpFormValues.last_name}
                    error={signUpErrors.last_name}
                    onChange={onChange}
                  />
                </div>
                <div className="signup_row">
                  <SignupInput
                    name="Username"
                    api="username"
                    value={signUpFormValues.username}
                    error={signUpErrors.username}
                    onChange={onChange}
                  />
                  <SignupInput
                    name="Email"
                    api="email"
                    value={signUpFormValues.email}
                    error={signUpErrors.email}
                    onChange={onChange}
                  />
                </div>
                <div className="signup_row">
                  <SignupInput
                    name="Password"
                    api="password"
                    value={signUpFormValues.password}
                    error={signUpErrors.password}
                    onChange={onChange}
                  />
                  <SignupInput
                    name="Confirm Password"
                    api="confirm"
                    value={signUpFormValues.confirm}
                    error={signUpErrors.confirm}
                    onChange={onChange}
                  />
                </div>
                <SignupInput
                  name="Country"
                  api="country"
                  value={signUpFormValues.country}
                  error={signUpErrors.country}
                  onChange={onChange}
                />
              </div>
              <label
                style={{
                  maxWidth: '200px',
                  margin: '40px auto',
                }}
              >
                {' '}
                Market Owner?
                <input
                  style={{
                    opacity: 1,
                    height: '20px',
                    marginRight: '10px',
                    width: '20px',
                    border: '1px solid white',
                    appearance: 'auto',
                  }}
                  type="checkbox"
                  name="user_role"
                  value={signUpFormValues.user_role}
                  onChange={onChange}
                />
              </label>
              <ul className="actions special">
                <li>
                  <button className="button primary" disabled={disabled}>
                    Sign Up
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
