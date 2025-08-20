const { handler } = require('../src/app');

// Mock axios to avoid actual network calls during tests
jest.mock('axios');
const axios = require('axios');

describe('Lambda Handler', () => {
  it('should return a 200 status code and fetched data on success', async () => {
    // Setup the mock response
    const mockPost = { title: 'Test Post', id: 1 };
    axios.get.mockResolvedValue({ data: mockPost });

    const event = {}; // A simple mock event
    const result = await handler(event);

    expect(result.statusCode).toBe(200);
    const body = JSON.parse(result.body);
    expect(body.message).toBe('Successfully fetched data!');
    expect(body.postTitle).toBe('Test Post');
  });
});