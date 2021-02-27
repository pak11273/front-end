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

  // useEffect(() => {
  //   axios
  //     .get('https://github.com/octocat')
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // }, []);

  useEffect(() => {
    console.log('loading: ', isLoading);
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
