// src/mocks/handlers.js

import { products } from 'src/assets/data/products.js';
import { rest } from 'msw';

const baseURL = 'http://localhost:5000/api';
const token =
  'ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98';

export const handlers = [
  rest.get(`${baseURL}/test`, (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        apiSuccessMessage: 'huh?',
      })
    );
  }),

  rest.post(`${baseURL}/auth/login`, (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', true);
    const { username, password } = req.body;

    if (username === 'demoUser' && password === 'password') {
      return res(
        ctx.status(200),
        ctx.json({
          token,
        })
      );
    } else {
      return res(ctx.status(403), ctx.json({ message: 'Invalid credentials' }));
    }
  }),

  rest.get(`${baseURL}/items`, (req, res, ctx) => {
    // Check if the user is authenticated in this session
    // const isAuthenticated = sessionStorage.getItem('is-authenticated');

    // if (!isAuthenticated) {
    //   // If not authenticated, respond with a 403 error
    //   return res(
    //     ctx.status(403),
    //     ctx.json({
    //       message: 'Not authorized',
    //     })
    //   );
    // }

    // If authenticated, return a mocked user details
    return res(ctx.status(200), ctx.json(products));
  }),
];
