import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

export const LogoutPage = () => {
  let { push } = useHistory();
  useEffect(() => {
    localStorage.removeItem('token');
    push('/login');
  });

  return (
    <div id="page-wrapper">
      <div className="landing is-preload">
        <section id="banner"></section>
      </div>
    </div>
  );
};
