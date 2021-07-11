import setupApp from '../utils/serverTestHelper';

describe('Routes - root', () => {
  const app = setupApp();

  test('responds with success on request /', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/'
    });

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.payload)).toStrictEqual({ status : 'OK' });
    expect(response.payload).toBe('{"status":"OK"}');
  });
});