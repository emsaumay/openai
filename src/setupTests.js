// src/setupTests.js

import '@testing-library/jest-dom/extend-expect';
import { configure } from '@testing-library/react';
import { server } from './api/mocks/server';

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time requests or responses that differ from the default).
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

// Configure the test library to throw errors when encountering accessibility issues.
configure({ throwSuggestions: true });