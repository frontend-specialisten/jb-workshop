import { render, screen, waitFor } from "@testing-library/angular";

import { MovieListComponent } from "./movie-list.component";
import { server } from '../../../mocks/server';
import { rest } from "msw";

/**
 * Selectors
 */
const getMovies = () => screen.getAllByTestId("movie");
const getErrorMessage = () => screen.getByText(/Oops! Something went wrong/i);

test('should render movies', async () => {
  await render(MovieListComponent);
  await waitFor(() => {
    expect(getMovies()).toHaveLength(100);
  });
});

test('should render error message, when loading movies fail', async () => {
  // Could be moved to a testing util.
  server.resetHandlers(rest.get('*', (req, res, ctx) => {
    return res(ctx.status(500));
  }));

  await render(MovieListComponent);
  await waitFor(() => {
    expect(getErrorMessage()).toBeInTheDocument();
  });
});
