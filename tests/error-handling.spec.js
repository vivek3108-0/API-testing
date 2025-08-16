const { test, expect } = require('@playwright/test');

test.describe('API Error Handling Tests', () => {
  test('GET /posts/:id returns 404 for non-existent post', async ({ request }) => {
    const response = await request.get('/posts/9999');
    expect(response.status()).toBe(404);
  });

  test('GET /posts with invalid endpoint returns 404', async ({ request }) => {
    const response = await request.get('/invalid');
    expect(response.status()).toBe(404);
  });

  test('POST /posts with missing fields', async ({ request }) => {
    const response = await request.post('/posts', { data: { title: 'no body' } });
    expect([201, 400]).toContain(response.status());
  });

  test('POST /posts with invalid data structure', async ({ request }) => {
    const response = await request.post('/posts', { 
      data: { invalidField: 'test' } 
    });
    expect([201, 400]).toContain(response.status());
  });

  test('PUT /posts with invalid ID', async ({ request }) => {
    const response = await request.put('/posts/9999', { 
      data: { title: 'test' } 
    });
    expect([200, 404, 500]).toContain(response.status());
  });

  test('DELETE /posts with invalid ID', async ({ request }) => {
    const response = await request.delete('/posts/9999');
    expect([200, 204, 404]).toContain(response.status());
  });
});