// src/setupTests.js

import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

// Extend the expect functionality for more complex assertions
import 'jest-extended';

// Configure the testing library to include additional matchers
configure({ testIdAttribute: 'data-testid' });