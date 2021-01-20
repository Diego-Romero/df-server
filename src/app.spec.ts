import supertest from 'supertest';
import setupDB from './loaders/test-setup';
import app from './app';
const request = supertest(app);
// setupDB('deepflow-test-app');

describe('testing app', () => {
  it('should return health endpoint', async (done) => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('health check confirmed');
    done();
  });
});
