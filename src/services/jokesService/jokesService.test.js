import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getJokes } from './jokesService';

const response = { test: 'testing' };

const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
        return res(ctx.json(response));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('transforma json response em um objeto', async () => {
    const joke = await getJokes();

    expect(joke).toStrictEqual(response);
});