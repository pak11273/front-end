import React, { useState } from 'react';

export const LoginPage = () => {
  const initialForm = {
    username: '',
    password: '',
  };

  const errors = {
    username: "",
    password: "",
  };

  const [loginFormValues, setLoginFormValues] = useState(initialForm);
  const [disabled, setDisabled] = useState(true);
  const [loginErrors, setloginErrors] = useState(errors);

  const onChange = e => {
    const { name, value } = e.target;
    setLoginFormValues({
      ...loginFormValues,
      [name]: value,
    });
  };

  const onSubmit = e => {
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
                  value={loginFormValues.username}
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
                  value={loginFormValues.password}
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
