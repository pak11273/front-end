import * as yup from 'yup';

import React, { useEffect, useState } from 'react';

import axios from 'axios';
import schema from '../../../schema';

export const SignUpPage = () => {
  const errors = {
    username: '',
    email: '',
    country: '',
    password: '',
    first_name: '',
    last_name: '',
    user_role: '',
  };

  const formValues = {
    username: '',
    email: '',
    password: '',
    country: '',
    first_name: '',
    last_name: '',
    user_role: false,
  };

  const [disabled, setDisabled] = useState(false);
  const [signUpErrors, setSignUpErrors] = useState(errors);
  const [signUpFormValues, setSignUpFormValues] = useState(formValues);

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

    console.log('signup: ', signUpFormValues);
    axios
      .post(
        "https://african-marketplace-tt14.herokuapp.com/api/signup",
        signUpFormValues
      )
      .then(response => {
        localStorage.setItem("token", response.data.token);
        return PaymentResponse.history.push("/login");
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
    <div id="page-wrapper">
      <div className="landing is-preload">
        <section id="banner">
          <form onSubmit={onSubmit}>
            <div className="inner">
              <h2>Sign Up</h2>
              <label
                style={{
                  maxWidth: '200px',
                  margin: '40px auto',
                }}
              >
                
                <input
                  type="text"
                  name="username"
                  value={signUpFormValues.username}
                  onChange={onChange}
                  placeholder='Username'
                />
              </label>
              <div style={{ color: 'red' }}>{signUpErrors.username}</div>
              <label
                style={{
                  maxWidth: '200px',
                  margin: '40px auto',
                }}
              >
                
                <input
                  type="text"
                  name="first_name"
                  value={signUpFormValues.first_name}
                  onChange={onChange}
                  placeholder='First name'
                />
              </label>
              <div style={{ color: 'red' }}>{signUpErrors.first_name}</div>
              <label
                style={{
                  maxWidth: '200px',
                  margin: '40px auto',
                }}
              >
                
                <input
                  type="text"
                  name="last_name"
                  value={signUpFormValues.last_name}
                  onChange={onChange}
                  placeholder='Last Name'
                />
              </label>
              <div style={{ color: 'red' }}>{signUpErrors.last_name}</div>
              <label
                style={{
                  maxWidth: '200px',
                  margin: '40px auto',
                }}
              >
                
                <input
                  type="email"
                  name="email"
                  value={signUpFormValues.email}
                  onChange={onChange}
                  placeholder='Email'
                />
              </label>
              <div style={{ color: 'red' }}>{signUpErrors.email}</div>
              <label
                style={{
                  maxWidth: '200px',
                  margin: '40px auto',
                }}
              >
                
                <input
                  type="text"
                  name="country"
                  value={signUpFormValues.country}
                  onChange={onChange}
                  placeholder='Country'
                />
              </label>
              <div style={{ color: 'red' }}>{signUpErrors.country}</div>
              <label
                style={{
                  maxWidth: '200px',
                  margin: '40px auto',
                }}
              >
                
                <input
                  type="password"
                  name="password"
                  value={signUpFormValues.password}
                  onChange={onChange}
                  placeholder='Password'
                />
              </label>
              <div style={{ color: 'red' }}>{signUpErrors.password}</div>
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
