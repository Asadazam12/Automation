const axios = require('axios');

// Describe block for grouping tests related to JSONPlaceholder API
describe('JSONPlaceholder API Tests', () => {
  // Test case for GET /posts/1 endpoint
  it('should return correct data for Post ID 1', async () => {
    try {
      // Send GET request to the JSONPlaceholder API
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

      // Verify HTTP status code is 200
      expect(response.status).toBe(200);

      // Verify response data contains userId: 1
      expect(response.data).toHaveProperty('userId', 1);

      // Verify response data contains id: 1 (lowercase 'id')
      expect(response.data).toHaveProperty('id', 1);
    } catch (error) {
      // Handle network or API errors gracefully
      console.error('API request failed:', {
        message: error.message,
        response: error.response ? error.response.data : 'No response data',
        status: error.response ? error.response.status : 'No status'
      });
      throw new Error(`API request failed: ${error.message}`);
    }
  });
});