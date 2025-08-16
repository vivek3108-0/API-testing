const { test, expect } = require('@playwright/test');
const testData = require('../data/testData.json');

test.describe('Data-Driven API Tests', () => {
  // Test multiple users
  testData.users.forEach(user => {
    test(`GET /users/${user.id} returns user data`, async ({ request }) => {
      const response = await request.get(`/users/${user.id}`);
      expect(response.status()).toBe(200);
      const userData = await response.json();
      expect(userData.id).toBe(user.id);
      expect(userData).toHaveProperty('email');
      expect(userData).toHaveProperty('name');
    });
  });

  // Test multiple posts
  testData.posts.forEach(post => {
    test(`GET /posts/${post.id} returns post data`, async ({ request }) => {
      const response = await request.get(`/posts/${post.id}`);
      expect(response.status()).toBe(200);
      const postData = await response.json();
      expect(postData.id).toBe(post.id);
      expect(postData).toHaveProperty('title');
      expect(postData).toHaveProperty('body');
    });
  });

  // Test creating posts with different data
  testData.newPosts.forEach((postData, index) => {
    test(`POST /posts creates post with data set ${index + 1}`, async ({ request }) => {
      const response = await request.post('/posts', { data: postData });
      expect(response.status()).toBe(201);
      const createdPost = await response.json();
      expect(createdPost).toMatchObject(postData);
      expect(createdPost).toHaveProperty('id');
    });
  });
});