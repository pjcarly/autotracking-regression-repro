import { rest } from 'msw';

import airports from './data/airports'

export const handlers = [
  rest.get('http://example.local/api/airports', async (_req, res, ctx) => {
    return res(ctx.json(airports))
  }),
];
