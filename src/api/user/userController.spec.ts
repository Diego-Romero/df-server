import { CREATED } from 'http-status';
import supertest from 'supertest';
import app from '../../app';
import setupDB  from '../../loaders/test-setup';
const request = supertest(app);
const testEmail = `test@mail.com`;
// todo: seed database

setupDB('deepflow-test-user');

describe('User controller', () => {
  it(`registers`, async (done) => {
    const response = await request.post('/user/register').send({
      name: 'test',
      email: testEmail,
      password: 'password',
    });
    expect(response.status).toBe(CREATED);
    done();
  });

  // it(`logs in`, async (done) => {
  //   const response = await request.post(`/user/login`).send({
  //     email: testEmail,
  //     password: testPassword,
  //   });
  //   expect(response.status).toBe(OK);
  //   done();
  // });

});
