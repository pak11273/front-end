import { useEffect, useState } from 'react';

import axios from 'axios';

export const useAxiosAuth = (baseURL, api, method) => {
  const token = localStorage.getItem('token');
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    axios
      .create({
        headers: {
          authorization: token,
        },
        baseURL,
      })
      [method](api)
      .then(res => {
        setResponse(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
      });
  }, [api, baseURL, method, token]);
  return [response, error, isLoading];
};
