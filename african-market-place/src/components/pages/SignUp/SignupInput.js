import React from 'react';

export const SignupInput = ({ api, name, value, error, onChange }) => {
  return (
    <div>
      <label
        style={{
          maxWidth: '200px',
          margin: '40px auto',
        }}
      >
        <input
          type="text"
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
