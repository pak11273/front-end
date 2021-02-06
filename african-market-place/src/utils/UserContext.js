import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();
const UserUpdateContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const useUpdateLogin = () => {
  return useContext(UserUpdateContext);
};

export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const updateLogin = token => {
    token
      ? localStorage.setItem('token', token)
      : localStorage.removeItem('token');
    setLoggedIn(token);
  };

  useEffect(() => {
    let haveToken = localStorage.getItem('token') ? true : false;
    setLoggedIn(haveToken);
  }, [loggedIn]);

  return (
    <UserContext.Provider value={loggedIn}>
      <UserUpdateContext.Provider value={updateLogin}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
};
