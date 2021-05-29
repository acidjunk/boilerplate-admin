import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react admin dashboard', () => {
  render(<App />);
  const element = screen.getByText(/Welcome to React-admin/i);
  expect(element).toBeInTheDocument();
});
