import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent } from '@testing-library/react'
import { App } from './App';

const response = { joke: 'test joke' }

const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
    return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renderiza um botão', () => {
  render(<App />);
  
  const buttonE1 = screen.getByRole('button');

  expect(buttonE1).toBeInTheDocument();
});

test('chama a api ao clicar no botão e atualiza o texto', async() => {
  const customResponse = { joke: 'test joke' };

  render(<App />);

  server.use(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
      return res(ctx.json(customResponse));
    })
  );

  const buttonE1 = screen.getByRole('button');

  fireEvent.click(buttonE1);
  const jokeE1 = await screen.findByText(/custom test/i);

  expect(quoteE1).toBeInTheDocument();
})