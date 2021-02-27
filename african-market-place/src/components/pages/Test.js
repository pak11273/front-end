import React, { useEffect } from 'react';

import { useAxiosAuth } from 'src/hooks/useAxiosAuth';

// import axios from 'axios';

// import { useLocalStorage } from 'src/hooks/useLocalStorage';

export const Test = () => {
  const [res, error, isLoading] = useAxiosAuth(
    'http://localhost:5000/api',
    'test',
    'get'
  );

  useEffect(() => {
    console.log('loading: ', isLoading);
    console.log('error: ', error);
  }, [isLoading]);

  return (
    <>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>{res && res.apiSuccessMessage}</div>
    </>
  );
};
