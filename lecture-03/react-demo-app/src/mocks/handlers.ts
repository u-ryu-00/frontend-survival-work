import { rest } from 'msw';

import fixtures from '../../fixtures';

const BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/products`, (req, res, ctx) => {
    const { products } = fixtures;

    console.log(products);

    return res(
      ctx.status(200),
      ctx.json({ products }),
    );
  }),
];

export default handlers;
