import React from 'react';

export const SignupInput = ({ api, name, value, error, onChange }) => {
  let type;
  if (api === 'confirm' || api === 'password') {
    type = 'password';
  } else {
    type = 'text';
  }
  return (
    <div className="signup_input">
      <label>
        <input
          type={type}
          name={api}
          value={value}
          onChange={onChange}
          placeholder={name}
        />
      </label>
      <div style={{ color: 'red' }}>{error}</div>
    </div>
  );
};
