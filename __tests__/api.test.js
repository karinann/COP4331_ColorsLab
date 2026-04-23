const request = require('supertest');
const app = require('./app'); // your Express app

test('GET /colors returns 200 and JSON array', async () => {
  const res = await request(app).get('/colors');
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});