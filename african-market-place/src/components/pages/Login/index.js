import * as yup from 'yup';

import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { loginSchema } from '../../../schema';

export const LoginPage = () => {
  const initialForm = {
    username: '',
    password: '',
  };

  const [form, setForm] = useState(initialForm);

  const onChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = e => {
    axios
      .post(
        'https://virtserver.swaggerhub.com/rbhouck32/African-MarketPlace/1.0.0/auth/login',
        form
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    e.preventDefault();
    // redirect to home page on successful validation
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
                  value={form.username}
                  onChange={onChange}
                />
              </label>
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
                  value={form.password}
                  onChange={onChange}
                />
              </label>
              <ul className="actions special">
                <li>
                  <button className="button primary">Login</button>
                </li>
              </ul>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
