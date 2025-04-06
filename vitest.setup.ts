import '@testing-library/jest-dom';
import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

// Add testing library matchers to Vitest's expect
expect.extend(matchers); 