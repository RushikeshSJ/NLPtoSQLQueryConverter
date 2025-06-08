import axios from 'axios';

const API_BASE_URL = 'ec2-98-130-50-18.ap-south-2.compute.amazonaws.com/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export async function processQuery(naturalLanguage) {
  try {
    // Log the request payload
    const requestPayload = {
      naturalLanguage: naturalLanguage
    };
    console.log('Request payload:', requestPayload);

    const response = await apiClient.post('/query', requestPayload);

    // Log the response
    console.log('Response:', response.data);

    if (!response.data) {
      throw new Error('No data received from server');
    }

    return {
      result: response.data.results,
      sqlQuery: response.data.sqlQuery
    };
  } catch (error) {
    // Enhanced error logging
    console.error('Error details:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });

    if (error.response?.status === 400) {
      const errorMessage = error.response.data?.message || error.response.data || 'Invalid request format';
      throw new Error(`Bad Request: ${errorMessage}`);
    }
    
    if (error.response?.status === 404) {
      throw new Error('API endpoint not found. Please check the server URL and endpoint path.');
    }
    
    if (error.code === 'ERR_NETWORK') {
      throw new Error(
        'Network Error: Cannot connect to the server. Please ensure:\n' +
        '1. The Spring Boot server is running on port 8080\n' +
        '2. CORS is properly configured\n' +
        '3. The endpoint path matches between frontend and backend'
      );
    }
    
    throw new Error(`Failed to process query: ${error.message}`);
  }
}
