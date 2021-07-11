import setupApp from '../../utils/serverTestHelper';

describe('Routes - auth', () => {
  const app = setupApp();

  test('responds with success on request /', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/auth'
    });

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.payload)).toStrictEqual({ status : 'Auth route' });
    expect(response.payload).toBe('{"status":"Auth route"}');
  });
});