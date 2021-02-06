import React from 'react';
import { useHistory } from 'react-router-dom';

const SignUpCompleted = () => {
  const { push } = useHistory();
  const pushToSignIn = () => {
    push('/login');
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h1> Sign up completed please return to login below</h1>
      <button onClick={pushToSignIn}>To Login</button>
    </div>
  );
};
export default SignUpCompleted;
