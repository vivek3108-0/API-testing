/**
 * Helper functions for API testing
 */

/**
 * Creates a new post
 * @param {import('@playwright/test').APIRequestContext} request
 * @param {Object} data - Post data
 * @returns {Promise<Object>} Created post
 */
async function createPost(request, data) {
  const response = await request.post('/posts', { data });
  if (response.status() !== 201) {
    throw new Error(`Failed to create post. Status: ${response.status()}`);
  }
  return response.json();
}

/**
 * Validates post structure
 * @param {Object} post - Post object to validate
 */
function validatePost(post) {
  expect(post).toHaveProperty('id');
  expect(post).toHaveProperty('title');
  expect(post).toHaveProperty('body');
  expect(post).toHaveProperty('userId');
}

/**
 * Generates random test data
 * @returns {Object} Random post data
 */
function generateRandomPostData() {
  return {
    title: `Test Post ${Date.now()}`,
    body: `Test body ${Date.now()}`,
    userId: Math.floor(Math.random() * 10) + 1
  };
}

/**
 * Waits for a specific condition
 * @param {Function} condition - Function that returns boolean
 * @param {number} timeout - Timeout in milliseconds
 */
async function waitForCondition(condition, timeout = 5000) {
  const startTime = Date.now();
  while (Date.now() - startTime < timeout) {
    if (await condition()) {
      return true;
    }
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  throw new Error('Condition not met within timeout');
}

module.exports = {
  createPost,
  validatePost,
  generateRandomPostData,
  waitForCondition
};