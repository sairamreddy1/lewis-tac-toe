import { render, screen } from '@testing-library/react';
import App from './App';

test('renders game title', () => {
  render(<App />);
  const heading = screen.getByText(/Lewis-Tac-Azure by sai ram reddy/i);
  expect(heading).toBeInTheDocument();
});
