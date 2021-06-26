import { server } from '../utils/serverTestHelper';

describe('Routes - root', () => {
  afterAll(() => {
    server.close();
  });

  test('responds with success on request /', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/'
    });

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.payload)).toStrictEqual({root: true});
    expect(response.payload).toBe('{"root":true}');
  });
});