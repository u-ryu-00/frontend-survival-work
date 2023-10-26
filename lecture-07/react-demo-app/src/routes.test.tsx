import { render, screen } from '@testing-library/react';

import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import routes from './routes';

const context = describe;

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });

    render(<RouterProvider router={router} />);
  }

  context('when the current path is "/"', () => {
    it('renders the home page', () => {
      renderRouter('/');

      screen.getByText(/Welcome/);
    });
  });

  context('when the current path is "/about"', () => {
    it('renders the about page', () => {
      renderRouter('/about');

      screen.getByText(/This is test/);
    });
  });
});
