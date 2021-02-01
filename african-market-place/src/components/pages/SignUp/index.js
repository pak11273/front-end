import React, { useState } from 'react';

export const SignUpPage = () => {
  const initialForm = {
    username: '',
    email: '',
    password: '',
    confirm: '',
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
    e.preventDefault();
    // redirect to home page on successful validation
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
                email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                />
              </label>
              <label
              style={{
                  maxWidth: '200px',
                  margin: '40px auto',
                }}
              >
                country
                <input 
                  type="text"
                  name="country"
                  value={form.country}
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
              <label
                style={{
                  maxWidth: '200px',
                  margin: '40px auto',
                }}
              >
                confirm password
                <input
                  type="password"
                  name="confirm"
                  value={form.confirm}
                  onChange={onChange}
                />
              </label>
              <ul className="actions special">
                <li>
                  <button className="button primary">Sign Up</button>
                </li>
              </ul>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
